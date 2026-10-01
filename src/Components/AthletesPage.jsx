import { useEffect, useState } from "react";
import { api, resolveMediaUrl } from "../api";
import { entriesPage, parseEntries } from "./adminContent";
import { linesOf, usePageBlocks } from "./usePageContent";
import "./Athletes.css";

const filters = [
  ["all", "Tous"],
  ["athlete", "Athlètes"],
  ["story", "Histoires"],
];

const initials = (name = "") =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0].toUpperCase()).join("") || "YSC";

const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "";

const Card = ({ entry, open, onToggle }) => {
  const isStory = entry.kind === "story";
  const lines = linesOf(entry.text);
  const preview = lines[0] || "";
  const hasMore = lines.length > 1 || preview.length > 220;

  return (
    <article className={`athlete-card${isStory ? " athlete-card--story" : ""}${open ? " is-open" : ""}`}>
      <div className="athlete-card-media">
        {entry.image
          ? <img src={resolveMediaUrl(entry.image)} alt={entry.title} loading="lazy" />
          : <span className="athlete-card-initials" aria-hidden="true">{initials(entry.title)}</span>}
        <span className="athlete-card-tag">{isStory ? "Histoire" : "Athlète"}</span>
      </div>
      <div className="athlete-card-body">
        <h3>{entry.title}</h3>
        {entry.subtitle && <p className="athlete-card-subtitle">{entry.subtitle}</p>}
        {!isStory && entry.highlight && <p className="athlete-card-highlight">{entry.highlight}</p>}
        {isStory && entry.createdAt && <p className="athlete-card-date">{formatDate(entry.createdAt)}</p>}
        <div className={`athlete-card-text${open ? "" : " is-clamped"}`}>
          {(open ? lines : [preview]).map((line, index) => <p key={index}>{line}</p>)}
        </div>
        {hasMore && (
          <button type="button" className="athlete-card-toggle" onClick={onToggle} aria-expanded={open}>
            {open ? "Réduire" : isStory ? "Lire l’histoire" : "Lire le parcours"}
          </button>
        )}
      </div>
    </article>
  );
};

const AthletesPage = () => {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { block } = usePageBlocks(entriesPage);
  const intro = block("intro");

  useEffect(() => {
    api.getContent(entriesPage)
      .then((items) => {
        setEntries(parseEntries(items).filter((entry) => entry.published !== false));
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

  const visible = entries.filter((entry) => filter === "all" || (entry.kind || "athlete") === filter);

  return (
    <div className="athletes-page">
      <header className="athletes-hero">
        <p className="athletes-eyebrow">Youth Sports Club</p>
        <h1>{intro.title}</h1>
        {linesOf(intro.text).map((line, index) => <p key={index}>{line}</p>)}
      </header>

      <div className="athletes-filters" role="tablist" aria-label="Filtrer les fiches">
        {filters.map(([key, label]) => (
          <button key={key} type="button" role="tab" aria-selected={filter === key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{label}</button>
        ))}
      </div>

      {loading && <p className="athletes-empty">Chargement…</p>}
      {!loading && !visible.length && <p className="athletes-empty">Aucune fiche à afficher pour le moment.</p>}

      <div className="athletes-grid">
        {visible.map((entry) => (
          <Card key={entry.id} entry={entry} open={openId === entry.id} onToggle={() => setOpenId(openId === entry.id ? null : entry.id)} />
        ))}
      </div>
    </div>
  );
};

export default AthletesPage;
