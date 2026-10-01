import { useEffect, useMemo, useState } from "react";
import { api, resolveMediaUrl } from "../api";
import { contentPages, contentBlocks, defaultBlocks, emptyBlock, entriesPage, emptyEntry, newEntryId, parseEntries } from "./adminContent";

const emptyEvent = {
  title: "", description: "", date: "", location: "",
  category: "Événement club", published: true, featured: false,
};

// Bloc affiché dans l'éditeur : vide < contenu par défaut du site < contenu enregistré en base
const resolveBlock = (blocks, page, key) => ({
  ...emptyBlock,
  ...(defaultBlocks[page]?.[key] || {}),
  ...(blocks[page]?.[key] || {}),
});

const AdminPage = () => {
  const auth = api.getAuth();
  const [section, setSection] = useState("dashboard");
  const [selectedPage, setSelectedPage] = useState(contentPages[0][0]);
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(emptyEvent);
  const [editingEventId, setEditingEventId] = useState(null);
  const [blocks, setBlocks] = useState({});
  const [notice, setNotice] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState("");
  const [entries, setEntries] = useState([]);
  const [entryForm, setEntryForm] = useState(emptyEntry);
  const [editingEntryId, setEditingEntryId] = useState(null);

  const selectedPageLabel = contentPages.find(([key]) => key === selectedPage)?.[1];
  const selectedBlocks = contentBlocks[selectedPage] || [];
  const upcomingEvents = useMemo(() => events.filter((event) => new Date(event.date) >= new Date()), [events]);

  const notify = (text, type = "success") => setNotice({ text, type });

  const loadEvents = () => api.getEvents().then(setEvents).catch((error) => notify(error.message, "error"));

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await loadEvents();
      const groups = await Promise.all(contentPages.map(([page]) => api.getContent(page).catch(() => [])));
      const detailed = {};
      groups.forEach((items, index) => {
        const page = contentPages[index][0];
        detailed[page] = Object.fromEntries(items.filter((item) => item.key.startsWith("block:")).map((item) => {
          try { return [item.key.slice(6), JSON.parse(item.value)]; } catch { return [item.key.slice(6), emptyBlock]; }
        }));
      });
      setBlocks(detailed);
      setEntries(parseEntries(groups[contentPages.findIndex(([page]) => page === entriesPage)]));
      setLoading(false);
    };
    load();
  }, []);

  const createEvent = async (event) => {
    event.preventDefault();
    setSaving("event");
    try {
      const payload = { ...form, date: new Date(form.date).toISOString() };
      if (editingEventId) await api.updateEvent(editingEventId, payload);
      else await api.createEvent(payload);
      setForm(emptyEvent);
      setEditingEventId(null);
      notify(editingEventId ? "L’événement a été modifié." : "L’événement a été publié.");
      await loadEvents();
    } catch (error) {
      notify(error.message, "error");
    } finally {
      setSaving("");
    }
  };

  const editEvent = (event) => {
    setEditingEventId(event.id);
    setForm({
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString().slice(0, 16),
      location: event.location,
      category: event.category,
      published: event.published,
      featured: event.featured,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEditEvent = () => {
    setEditingEventId(null);
    setForm(emptyEvent);
  };

  const removeEvent = async (id) => {
    if (!window.confirm("Supprimer définitivement cet événement ?")) return;
    try {
      await api.deleteEvent(id);
      setEvents((current) => current.filter((event) => event.id !== id));
      notify("Événement supprimé.");
    } catch (error) {
      notify(error.message, "error");
    }
  };

  // ---- Athlètes & histoires -------------------------------------------------
  const loadEntries = () => api.getContent(entriesPage).then((items) => setEntries(parseEntries(items))).catch((error) => notify(error.message, "error"));

  const submitEntry = async (event) => {
    event.preventDefault();
    setSaving("entry");
    try {
      const existing = entries.find((entry) => entry.id === editingEntryId);
      const id = editingEntryId || newEntryId();
      const payload = { ...entryForm, createdAt: existing?.createdAt || new Date().toISOString() };
      await api.saveContent(entriesPage, `entry:${id}`, JSON.stringify(payload));
      notify(editingEntryId ? "La fiche a été modifiée." : entryForm.published ? "La fiche a été publiée." : "La fiche a été enregistrée (non publiée).");
      setEntryForm(emptyEntry);
      setEditingEntryId(null);
      await loadEntries();
    } catch (error) {
      notify(error.message, "error");
    } finally {
      setSaving("");
    }
  };

  const editEntry = (entry) => {
    setEditingEntryId(entry.id);
    setEntryForm({
      kind: entry.kind || "athlete",
      title: entry.title || "",
      subtitle: entry.subtitle || "",
      highlight: entry.highlight || "",
      text: entry.text || "",
      image: entry.image || "",
      published: entry.published !== false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEditEntry = () => {
    setEditingEntryId(null);
    setEntryForm(emptyEntry);
  };

  const removeEntry = async (id) => {
    if (!window.confirm("Supprimer définitivement cette fiche ?")) return;
    try {
      await api.deleteContent(entriesPage, `entry:${id}`);
      setEntries((current) => current.filter((entry) => entry.id !== id));
      if (editingEntryId === id) cancelEditEntry();
      notify("Fiche supprimée.");
    } catch (error) {
      notify(error.message, "error");
    }
  };

  const uploadEntryImage = async (file) => {
    if (!file) return;
    setSaving("entry-upload");
    try {
      const url = await api.uploadPhoto(file);
      setEntryForm((current) => ({ ...current, image: url }));
      notify("Photo importée. Cliquez sur « Enregistrer » pour publier la fiche.");
    } catch (error) {
      notify(error.message || "Impossible d'importer la photo.", "error");
    } finally {
      setSaving("");
    }
  };

  const getBlock = (key) => resolveBlock(blocks, selectedPage, key);

  const saveBlock = async (key) => {
    setSaving(`block:${key}`);
    try {
      const currentBlock = getBlock(key);
      const block = selectedPage === "rejoindre" && key === "testimonial"
        ? { ...currentBlock, author: currentBlock.author ?? "Cora-CW, Piper-Beckett & Mosa" }
        : currentBlock;
      const requests = [api.saveContent(selectedPage, `block:${key}`, JSON.stringify(block))];
      if (key === "intro") {
        requests.push(api.saveContent(selectedPage, "title", block.title || ""));
        requests.push(api.saveContent(selectedPage, "description", (block.text || "").split(/\r?\n/).filter(Boolean)[0] || ""));
      }
      await Promise.all(requests);
      // On garde en mémoire la version enregistrée (y compris les valeurs par défaut fusionnées)
      setBlocks((current) => ({ ...current, [selectedPage]: { ...current[selectedPage], [key]: block } }));
      notify(`Bloc « ${contentBlocks[selectedPage].find(([blockKey]) => blockKey === key)?.[1]} » enregistré.`);
    } catch (error) {
      notify(error.message, "error");
    } finally {
      setSaving("");
    }
  };

  const updateBlock = (key, field, value) => {
    setBlocks((current) => ({
      ...current,
      [selectedPage]: {
        ...current[selectedPage],
        [key]: { ...resolveBlock(current, selectedPage, key), [field]: value },
      },
    }));
  };

  // Supprime la version enregistrée : le bloc retrouve le contenu d'origine du site
  const resetBlock = async (key) => {
    if (!window.confirm("Rétablir le contenu d'origine de ce bloc ? Vos modifications enregistrées seront perdues.")) return;
    try {
      await api.deleteContent(selectedPage, `block:${key}`);
      setBlocks((current) => {
        const { [key]: _removed, ...rest } = current[selectedPage] || {};
        return { ...current, [selectedPage]: rest };
      });
      notify("Contenu d'origine rétabli.");
    } catch (error) {
      notify(error.message, "error");
    }
  };

  const upload = async (key, file) => {
    if (!file) return;
    setSaving(`upload:${key}`);
    try {
      updateBlock(key, "image", await api.uploadPhoto(file));
      notify("Photo importée. Cliquez sur « Enregistrer le bloc » pour publier la modification.");
    } catch (error) {
      notify(error.message, "error");
    } finally {
      setSaving("");
    }
  };

  return (
    <section className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo"><span aria-hidden="true">YSC</span><div><strong>Administration</strong><small>Youth Sports Club</small></div></div>
        <nav className="admin-menu" aria-label="Navigation administration">
          <button type="button" aria-current={section === "dashboard" ? "page" : undefined} className={section === "dashboard" ? "active" : ""} onClick={() => setSection("dashboard")}><span className="admin-menu-icon" aria-hidden="true">▦</span><span className="admin-menu-label">Tableau de bord</span></button>
          <button type="button" aria-current={section === "events" ? "page" : undefined} className={section === "events" ? "active" : ""} onClick={() => setSection("events")}><span className="admin-menu-icon" aria-hidden="true">◷</span><span className="admin-menu-label">Événements</span></button>
          <button type="button" aria-current={section === "athletes" ? "page" : undefined} className={section === "athletes" ? "active" : ""} onClick={() => setSection("athletes")}><span className="admin-menu-icon" aria-hidden="true">★</span><span className="admin-menu-label">Athlètes & histoires</span></button>
          <button type="button" aria-current={section === "content" ? "page" : undefined} className={section === "content" ? "active" : ""} onClick={() => setSection("content")}><span className="admin-menu-icon" aria-hidden="true">▤</span><span className="admin-menu-label">Contenu du site</span></button>
        </nav>
        <div className="admin-sidebar-bottom">
          <a href="/" target="_blank" rel="noreferrer">↗ Voir le site</a>
          <button onClick={() => { api.logout(); window.location.href = "/connexion"; }}>⇥ Déconnexion</button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div><span className="admin-breadcrumb">Administration</span><strong>{{ dashboard: "Tableau de bord", events: "Événements", athletes: "Athlètes & histoires", content: "Contenu du site" }[section]}</strong></div>
          <div className="admin-user"><span className="admin-avatar">{(auth?.user?.email || "A")[0].toUpperCase()}</span><span>{auth?.user?.email}</span></div>
        </header>

        <div className="admin-workspace">
          {notice.text && <div className={`admin-notice admin-notice--${notice.type}`} role="status">{notice.text}<button onClick={() => setNotice({ text: "", type: "" })}>×</button></div>}
          {loading ? <div className="admin-loading">Chargement de votre espace d’administration…</div> : (
            <>
              {section === "dashboard" && <Dashboard events={upcomingEvents} pagesCount={contentPages.length} onEvents={() => setSection("events")} onContent={() => setSection("content")} />}
              {section === "events" && <EventsSection events={events} form={form} setForm={setForm} saving={saving} editingEventId={editingEventId} onSubmit={createEvent} onEdit={editEvent} onCancelEdit={cancelEditEvent} onDelete={removeEvent} />}
              {section === "athletes" && <AthletesSection entries={entries} form={entryForm} setForm={setEntryForm} saving={saving} editingEntryId={editingEntryId} onSubmit={submitEntry} onEdit={editEntry} onCancelEdit={cancelEditEntry} onDelete={removeEntry} onUpload={uploadEntryImage} />}
              {section === "content" && (
                <ContentSection
                  selectedPage={selectedPage} setSelectedPage={setSelectedPage} selectedPageLabel={selectedPageLabel}
                  selectedBlocks={selectedBlocks} getBlock={getBlock}
                  updateBlock={updateBlock} saveBlock={saveBlock} resetBlock={resetBlock}
                  upload={upload} saving={saving}
                />
              )}
            </>
          )}
        </div>
      </main>
    </section>
  );
};

const Dashboard = ({ events, pagesCount, onEvents, onContent }) => (
  <div>
    <div className="admin-page-title"><div><p className="admin-eyebrow">Vue d’ensemble</p><h1>Bonjour 👋</h1><p>Gérez le contenu et l’actualité de Youth Sports Club depuis cet espace.</p></div></div>
    <div className="admin-stat-grid">
      <button className="admin-stat" onClick={onEvents}><span className="admin-stat-icon admin-stat-icon--blue">◷</span><span><strong>{events.length}</strong><small>Événements à venir</small></span><b>→</b></button>
      <button className="admin-stat" onClick={onContent}><span className="admin-stat-icon admin-stat-icon--green">▤</span><span><strong>{pagesCount}</strong><small>Pages administrables</small></span><b>→</b></button>
      <div className="admin-stat"><span className="admin-stat-icon admin-stat-icon--gold">✓</span><span><strong>En ligne</strong><small>État du site</small></span></div>
    </div>
    <div className="admin-dashboard-grid">
      <div className="admin-panel"><div className="admin-panel-heading"><div><h2>Prochains événements</h2><p>Les rendez-vous visibles par les visiteurs.</p></div><button onClick={onEvents}>Tout voir</button></div>
        {events.slice(0, 4).map((event) => <div className="admin-list-row" key={event.id}><span className="admin-date-badge">{new Date(event.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}</span><div><strong>{event.title}</strong><small>{event.location}{event.featured ? " · Mis en avant" : ""}</small></div><span className="admin-status">Publié</span></div>)}
        {!events.length && <p className="admin-empty">Aucun événement à venir.</p>}
      </div>
      <div className="admin-panel admin-quick-panel"><h2>Actions rapides</h2><button onClick={onEvents}>＋ Publier un événement</button><button onClick={onContent}>✎ Modifier le contenu du site</button><a href="/" target="_blank" rel="noreferrer">↗ Prévisualiser le site</a></div>
    </div>
  </div>
);

const EventsSection = ({ events, form, setForm, saving, editingEventId, onSubmit, onEdit, onCancelEdit, onDelete }) => (
  <div>
    <div className="admin-page-title"><div><p className="admin-eyebrow">Actualité du club</p><h1>Événements</h1><p>Publiez les compétitions, stages et rendez-vous du Youth Sports Club.</p></div></div>
    <div className="admin-two-columns">
      <form className="admin-panel admin-form" onSubmit={onSubmit}><div className="admin-panel-heading"><div><h2>{editingEventId ? "Modifier l’événement" : "Nouvel événement"}</h2><p>Les champs marqués d’un * sont obligatoires.</p></div>{editingEventId && <button type="button" className="admin-text-button" onClick={onCancelEdit}>Annuler</button>}</div>
        <label>Titre *<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label>
        <label>Description *<textarea required rows="5" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></label>
        <div className="admin-form-row"><label>Date et heure *<input required type="datetime-local" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label><label>Lieu *<input required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></label></div>
        <label>Catégorie<select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}><option>Événement club</option><option>Compétition</option><option>Stage</option><option>Tournoi</option></select></label>
        <label className="admin-switch"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} /><span>Mettre en avant sur l’accueil</span></label>
        <button className="admin-primary-button" disabled={saving === "event"}>{saving === "event" ? "Enregistrement…" : editingEventId ? "Enregistrer les modifications" : "Publier l’événement"}</button>
      </form>
      <div className="admin-panel"><div className="admin-panel-heading"><div><h2>Événements publiés</h2><p>{events.length} événement(s) affiché(s) sur le site.</p></div></div><div className="admin-event-list">
        {events.map((event) => <article className="admin-event-item" key={event.id}><div className="admin-event-item-date">{new Date(event.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}</div><div className="admin-event-item-body"><strong>{event.title}</strong><small>{event.category} · {event.location}</small>{event.featured && <span className="admin-featured-label">★ Accueil</span>}</div><button className="admin-icon-button" aria-label={`Modifier ${event.title}`} onClick={() => onEdit(event)}>✎</button><button className="admin-icon-button admin-icon-button--danger" aria-label={`Supprimer ${event.title}`} onClick={() => onDelete(event.id)}>⌫</button></article>)}
        {!events.length && <p className="admin-empty">Aucun événement publié.</p>}
      </div></div>
    </div>
  </div>
);

const AthletesSection = ({ entries, form, setForm, saving, editingEntryId, onSubmit, onEdit, onCancelEdit, onDelete, onUpload }) => {
  const isAthlete = form.kind === "athlete";
  return (
    <div>
      <div className="admin-page-title"><div><p className="admin-eyebrow">Vie du club</p><h1>Athlètes & histoires</h1><p>Présentez les athlètes du Youth Sports Club et publiez de petites histoires. Le texte d’introduction de la page se modifie dans « Contenu du site ».</p></div><a href="/athletes" target="_blank" rel="noreferrer">Prévisualiser ↗</a></div>
      <div className="admin-two-columns">
        <form className="admin-panel admin-form" onSubmit={onSubmit}>
          <div className="admin-panel-heading"><div><h2>{editingEntryId ? "Modifier la fiche" : "Nouvelle fiche"}</h2><p>Les champs marqués d’un * sont obligatoires.</p></div>{editingEntryId && <button type="button" className="admin-text-button" onClick={onCancelEdit}>Annuler</button>}</div>
          <label>Type de fiche<select value={form.kind} onChange={(e) => setForm({ ...form, kind: e.target.value })}><option value="athlete">Athlète</option><option value="story">Petite histoire</option></select></label>
          <label>{isAthlete ? "Nom de l’athlète *" : "Titre de l’histoire *"}<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label>
          <label>{isAthlete ? "Discipline et catégorie" : "Accroche (une phrase)"}<input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} placeholder={isAthlete ? "Ex. : Gymnastique · Moins de 12 ans" : "Ex. : Comment tout a commencé…"} /></label>
          {isAthlete && <label>Distinction principale<input value={form.highlight} onChange={(e) => setForm({ ...form, highlight: e.target.value })} placeholder="Ex. : 🥉 Bronze au championnat d’Afrique 2024" /></label>}
          <label>{isAthlete ? "Parcours et présentation *" : "Histoire *"}<textarea required rows="8" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Séparez les paragraphes par une ligne vide." /></label>
          <label>Photo<div className="admin-upload"><input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="URL de la photo" /><label className="admin-file-button">Importer une photo<input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" onChange={(e) => { onUpload(e.target.files?.[0]); e.target.value = ""; }} /></label></div></label>
          {saving === "entry-upload" && <small>Import de la photo…</small>}
          {form.image && <img className="admin-image-preview" src={resolveMediaUrl(form.image)} alt="Aperçu de la photo" />}
          <label className="admin-switch"><input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} /><span>Publié sur le site</span></label>
          <button className="admin-primary-button" disabled={saving === "entry" || saving === "entry-upload"}>{saving === "entry" ? "Enregistrement…" : editingEntryId ? "Enregistrer les modifications" : "Enregistrer la fiche"}</button>
        </form>
        <div className="admin-panel">
          <div className="admin-panel-heading"><div><h2>Fiches du club</h2><p>{entries.length} fiche(s) · {entries.filter((entry) => entry.published !== false).length} publiée(s).</p></div></div>
          <div className="admin-event-list">
            {entries.map((entry) => (
              <article className="admin-event-item" key={entry.id}>
                <div className="admin-event-item-date">{entry.kind === "story" ? "Histoire" : "Athlète"}</div>
                <div className="admin-event-item-body"><strong>{entry.title}</strong><small>{entry.subtitle || (entry.kind === "story" ? "Petite histoire" : "Athlète du club")}{entry.published === false ? " · Brouillon" : ""}</small></div>
                <button className="admin-icon-button" aria-label={`Modifier ${entry.title}`} onClick={() => onEdit(entry)}>✎</button>
                <button className="admin-icon-button admin-icon-button--danger" aria-label={`Supprimer ${entry.title}`} onClick={() => onDelete(entry.id)}>⌫</button>
              </article>
            ))}
            {!entries.length && <p className="admin-empty">Aucune fiche pour le moment.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSection = ({ selectedPage, setSelectedPage, selectedPageLabel, selectedBlocks, getBlock, updateBlock, saveBlock, resetBlock, upload, saving }) => (
  <div>
    <div className="admin-page-title"><div><p className="admin-eyebrow">Éditeur de contenu</p><h1>Contenu du site</h1><p>Choisissez une page puis modifiez chaque bloc visible par les visiteurs.</p></div></div>
    <div className="admin-content-layout">
      <nav className="admin-page-list" aria-label="Pages à modifier">{contentPages.map(([key, label, description]) => <button key={key} className={selectedPage === key ? "active" : ""} onClick={() => setSelectedPage(key)}><strong>{label}</strong><small>{description}</small><span>›</span></button>)}</nav>
      <div className="admin-editor">
        <div className="admin-editor-header"><div><p className="admin-eyebrow">Page sélectionnée</p><h2>{selectedPageLabel}</h2></div><a href={selectedPage === "accueil" ? "/" : `/${selectedPage}`} target="_blank" rel="noreferrer">Prévisualiser ↗</a></div>
        <div className="admin-blocks-heading"><h3>Blocs de la page</h3><span>{selectedBlocks.length} blocs</span></div>
        {selectedBlocks.map(([key, label, hint], index) => {
          const value = getBlock(key);
          return (
            <div className="admin-panel admin-block-card" key={`${selectedPage}:${key}`}>
              <div className="admin-block-card-header">
                <div><span>Bloc de contenu</span><h3>{label}</h3>{hint && <small>{hint}</small>}</div>
                <div>
                  <span className="admin-block-number">{String(index + 1).padStart(2, "0")}</span>
                  <button type="button" className="admin-text-button admin-text-button--danger" onClick={() => resetBlock(key)}>Rétablir l’original</button>
                </div>
              </div>
              <label>
                Titre du bloc
                {(selectedPage === "rejoindre" && key === "social")
                  ? <textarea rows="2" value={value.title} onChange={(e) => updateBlock(key, "title", e.target.value)} />
                  : <input value={value.title} onChange={(e) => updateBlock(key, "title", e.target.value)} />}
              </label>
              <label>Texte<textarea rows="6" value={value.text} onChange={(e) => updateBlock(key, "text", e.target.value)} placeholder="Saisissez le texte visible sur la page…" /></label>
              {selectedPage === "rejoindre" && key === "testimonial" && (
                <label>
                  Signature du témoignage
                  <input
                    value={value.author ?? "Cora-CW, Piper-Beckett & Mosa"}
                    onChange={(e) => updateBlock(key, "author", e.target.value)}
                  />
                </label>
              )}
              <label>Image du bloc<div className="admin-upload"><input value={value.image} onChange={(e) => updateBlock(key, "image", e.target.value)} placeholder="URL de l’image principale" /><label className="admin-file-button">Importer une image<input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" onChange={(e) => { upload(key, e.target.files?.[0]); e.target.value = ""; }} /></label></div></label>
              {value.image && <img className="admin-image-preview" src={resolveMediaUrl(value.image)} alt="Aperçu du bloc" />}
              {selectedPage === "rejoindre" && key === "gallery" && <label>Deuxième image<input value={value.image2 || ""} onChange={(e) => updateBlock(key, "image2", e.target.value)} placeholder="URL de la deuxième image" /></label>}
              <div className="admin-block-actions">
                <span>{saving === `upload:${key}` ? "Import de la photo…" : "Modifications non enregistrées automatiquement"}</span>
                <button type="button" className="admin-primary-button" onClick={() => saveBlock(key)} disabled={saving === `block:${key}`}>
                  {saving === `block:${key}` ? "Enregistrement…" : "Enregistrer le bloc"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default AdminPage;