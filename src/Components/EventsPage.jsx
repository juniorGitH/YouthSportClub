import { useEffect, useState } from "react";
import { scoped, SectionLabel } from "./Pages";
import { api } from "../api";
import { linesOf, paragraphsOf, usePageBlocks } from "./usePageContent";

const categoryColors = {
  "Compétition": { bg: "#fff0f0", color: "#a32d2d", border: "#f7c1c1" },
  "Stage": { bg: "#eaf2fc", color: "#185fa5", border: "#b5d4f4" },
  "Tournoi": { bg: "#faeeda", color: "#854f0b", border: "#fac775" },
  "Événement club": { bg: "#eaf3de", color: "#3b6d11", border: "#c0dd97" },
};

const disciplineColors = {
  "Gymnastique": { bg: "#eaf2fc", color: "#185fa5" },
  "Gymnastatique": { bg: "#eaf2fc", color: "#185fa5" },
  "Gymnastique Aérobic": { bg: "#eaf2fc", color: "#185fa5" },
  "Gymnastique / Fitness": { bg: "#eaf2fc", color: "#185fa5" },
  "Fitness": { bg: "#eaf3de", color: "#3b6d11" },
  "Fitness – Catégorie A": { bg: "#eaf3de", color: "#3b6d11" },
  "Fitness – Catégorie B": { bg: "#eaf3de", color: "#3b6d11" },
  "Boxe éducative": { bg: "#fff0f0", color: "#a32d2d" },
};

const parsePastEvent = (block) => {
  const lines = linesOf(block.text);
  const meta = (lines[0] || "").split("·").map((part) => part.trim());
  return {
    title: block.title,
    category: meta[0] || "Compétition",
    date: meta[1] || "",
    location: meta[2] || "",
    result: lines[1] || "",
    description: lines.slice(2).join(" "),
  };
};

const parseLaureats = (text) =>
  paragraphsOf(text).map((group) => {
    const lines = linesOf(group);
    const results = lines
      .slice(2)
      .filter((line) => /[🥇🥈🥉]/.test(line))
      .map((line) => {
        const [rank, ...nameParts] = line.split(":");
        return { rank: (rank || "").trim(), name: nameParts.join(":").trim() };
      });
    const noteLine = lines.slice(2).find((line) => !/[🥇🥈🥉]/.test(line));
    return {
      discipline: lines[0] || "",
      title: lines[1] || "",
      results,
      note: noteLine || null,
    };
  });

const extra = `
  .ysc-ev-section { padding: 4.5rem 1rem; }
  .ysc-ev-section--alt { padding: 4.5rem 1rem; background: #f5f8fd; }
  .ysc-ev-inner { max-width: 1100px; margin: 0 auto; }
  .ysc-ev-header { text-align: center; margin-bottom: 2.5rem; }
  .ysc-ev-header h2 { font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 800; color: #1f4f8a; margin-bottom: 0.4rem; }
  .ysc-ev-header p { color: #4a6b90; font-size: 1rem; }
  .ysc-timeline { display: flex; flex-direction: column; gap: 1.25rem; }
  .ysc-timeline-item {
    background: #fff; border-radius: 14px; border: 1px solid #d7e5f6; padding: 1.4rem 1.5rem;
    display: grid; grid-template-columns: auto 1fr; gap: 0 1.25rem; align-items: start;
  }
  .ysc-timeline-dot { width: 12px; height: 12px; border-radius: 50%; background: #2f6fb2; margin-top: 6px; flex-shrink: 0; }
  .ysc-timeline-meta { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.4rem; }
  .ysc-timeline-title { font-size: 1.05rem; font-weight: 700; color: #1f4f8a; margin-bottom: 0.25rem; }
  .ysc-timeline-result { font-size: 0.88rem; font-weight: 600; color: #355274; margin-bottom: 0.35rem; }
  .ysc-timeline-desc { font-size: 0.88rem; color: #4a6b90; line-height: 1.6; }
  .ysc-badge { display: inline-block; font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; border: 1px solid; }
  .ysc-meta-item { font-size: 0.8rem; color: #4a6b90; display: flex; align-items: center; gap: 4px; }
  .ysc-upcoming-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; }
  .ysc-upcoming-card {
    background: #fff; border-radius: 14px; border: 1px solid #d7e5f6; padding: 1.4rem 1.25rem;
    display: flex; flex-direction: column; box-shadow: 0 4px 16px rgba(13,45,84,0.07);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ysc-upcoming-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(13,45,84,0.13); }
  .ysc-upcoming-date { font-size: 0.8rem; font-weight: 700; color: #2f6fb2; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 5px; }
  .ysc-upcoming-title { font-size: 1rem; font-weight: 700; color: #1f4f8a; margin-bottom: 0.35rem; }
  .ysc-upcoming-location { font-size: 0.8rem; color: #4a6b90; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 5px; }
  .ysc-upcoming-desc { font-size: 0.85rem; color: #355274; line-height: 1.6; flex: 1; }
  .ysc-laureats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
  .ysc-laureat-card {
    background: #fff; border-radius: 16px; border: 1px solid #d7e5f6; overflow: hidden;
    box-shadow: 0 6px 20px rgba(13,45,84,0.09); transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column;
  }
  .ysc-laureat-card:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(13,45,84,0.16); }
  .ysc-laureat-disc-badge {
    display: inline-block; font-size: 0.68rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; margin-bottom: 0.6rem;
  }
  .ysc-laureat-body { padding: 1.1rem 1.2rem 1.3rem; flex: 1; }
  .ysc-laureat-competition { font-size: 0.75rem; font-weight: 700; color: #2f6fb2; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.35rem; }
  .ysc-laureat-results { display: flex; flex-direction: column; gap: 0.3rem; margin-bottom: 0.6rem; }
  .ysc-laureat-result-row { display: flex; align-items: center; gap: 0.5rem; }
  .ysc-laureat-rank { font-size: 0.85rem; min-width: 28px; }
  .ysc-laureat-name { font-size: 0.88rem; font-weight: 600; color: #1f4f8a; }
  .ysc-laureat-note { font-size: 0.8rem; color: #4a6b90; line-height: 1.5; border-top: 1px solid #e8f0fa; padding-top: 0.6rem; margin-top: 0.4rem; font-style: italic; }
  .ysc-ev-cta {
    background: linear-gradient(120deg, #07152d, #102a50 60%, #113766);
    border-radius: 16px; padding: 3rem 2rem; text-align: center; position: relative; overflow: hidden;
  }
  .ysc-ev-cta::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 80% 20%, rgba(61,126,196,0.22), transparent 40%);
    pointer-events: none;
  }
  .ysc-ev-cta h2 { font-size: clamp(1.4rem, 3.5vw, 2.1rem); font-weight: 800; color: #fff; margin-bottom: 0.5rem; position: relative; }
  .ysc-ev-cta > p { font-size: 0.92rem; color: #cedcf7; margin-bottom: 1.5rem; position: relative; }
  .ysc-ev-cta-actions { display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-outline-white { display: inline-block; padding: 0.75rem 1.4rem; border-radius: 999px; font-weight: 700; background: transparent; border: 1px solid rgba(255,255,255,0.35); color: #fff; text-decoration: none; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); }
  @media (max-width: 640px) {
    .ysc-timeline-item { grid-template-columns: 1fr; }
    .ysc-timeline-dot { display: none; }
    .ysc-laureats-grid { grid-template-columns: 1fr; }
  }
`;

export const EventsPage = () => {
  const [remoteEvents, setRemoteEvents] = useState([]);
  const { block } = usePageBlocks("evenements");

  useEffect(() => {
    api.getEvents().then(setRemoteEvents).catch(() => setRemoteEvents([]));
  }, []);

  const intro = block("intro");
  const upcoming = block("upcoming");
  const history = block("history");
  const palmaresIntro = block("palmares-intro");
  const cta = block("cta");

  const displayedUpcoming = [...remoteEvents]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((event) => ({
      ...event,
      date: new Date(event.date).toLocaleDateString("fr-FR", {
        day: "2-digit", month: "long", year: "numeric",
      }),
    }));

  const pastEvents = ["past-1", "past-2", "past-3"]
    .map((key) => parsePastEvent(block(key)))
    .filter((event) => event.title);

  const laureats = parseLaureats(block("palmares-results").text);

  return (
    <>
      <style>{scoped}</style>
      <style>{extra}</style>

      <section className="ysc-page-hero">
        <SectionLabel>Agenda &amp; Palmarès</SectionLabel>
        <h1>{intro.title}</h1>
        <p>{intro.text}</p>
      </section>

      <section className="ysc-ev-section">
        <div className="ysc-ev-inner">
          <div className="ysc-ev-header">
            <SectionLabel>Prochains rendez-vous</SectionLabel>
            <h2>{upcoming.title}</h2>
            <p>{upcoming.text}</p>
          </div>
          <div className="ysc-upcoming-grid">
            {displayedUpcoming.map((event) => {
              const cat = categoryColors[event.category] || categoryColors["Événement club"];
              return (
                <article className="ysc-upcoming-card" key={event.id || event.title}>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span className="ysc-badge" style={{ background: cat.bg, color: cat.color, borderColor: cat.border }}>
                      {event.category}
                    </span>
                  </div>
                  <p className="ysc-upcoming-date"><span>📅</span> {event.date}</p>
                  <h3 className="ysc-upcoming-title">{event.title}</h3>
                  <p className="ysc-upcoming-location"><span>📍</span> {event.location}</p>
                  <p className="ysc-upcoming-desc">{event.description}</p>
                </article>
              );
            })}
            {!displayedUpcoming.length && (
              <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#4a6b90" }}>
                Aucun événement à venir pour le moment. Publiez-en depuis l&apos;administration.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="ysc-ev-section--alt">
        <div className="ysc-ev-inner">
          <div className="ysc-ev-header">
            <SectionLabel>Historique</SectionLabel>
            <h2>{history.title}</h2>
            <p>{history.text}</p>
          </div>
          <div className="ysc-timeline">
            {pastEvents.map((event) => {
              const cat = categoryColors[event.category] || categoryColors["Événement club"];
              return (
                <div className="ysc-timeline-item" key={event.title}>
                  <div className="ysc-timeline-dot" />
                  <div>
                    <div className="ysc-timeline-meta">
                      <span className="ysc-badge" style={{ background: cat.bg, color: cat.color, borderColor: cat.border }}>
                        {event.category}
                      </span>
                      {event.date && <span className="ysc-meta-item">📅 {event.date}</span>}
                      {event.location && <span className="ysc-meta-item">📍 {event.location}</span>}
                    </div>
                    <p className="ysc-timeline-title">{event.title}</p>
                    {event.result && <p className="ysc-timeline-result">{event.result}</p>}
                    <p className="ysc-timeline-desc">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ysc-ev-section">
        <div className="ysc-ev-inner">
          <div className="ysc-ev-header">
            <SectionLabel>Palmarès</SectionLabel>
            <h2>{palmaresIntro.title}</h2>
            <p>{palmaresIntro.text}</p>
          </div>
          <div className="ysc-laureats-grid">
            {laureats.map((l, i) => {
              const disc = disciplineColors[l.discipline] || { bg: "#eaf3de", color: "#3b6d11" };
              return (
                <div className="ysc-laureat-card" key={`${l.title}-${i}`}>
                  <div className="ysc-laureat-body">
                    <span className="ysc-laureat-disc-badge" style={{ background: `${disc.bg}ee`, color: disc.color }}>
                      {l.discipline}
                    </span>
                    <p className="ysc-laureat-competition">{l.title}</p>
                    <div className="ysc-laureat-results">
                      {l.results.map((r, j) => (
                        <div className="ysc-laureat-result-row" key={j}>
                          <span className="ysc-laureat-rank">{r.rank.split(" ")[0]}</span>
                          <span className="ysc-laureat-name">{r.rank.split(" ").slice(1).join(" ")} {r.name}</span>
                        </div>
                      ))}
                    </div>
                    {l.note && <p className="ysc-laureat-note">{l.note}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ysc-ev-section">
        <div className="ysc-ev-inner">
          <div className="ysc-ev-cta">
            <h2>{cta.title}</h2>
            <p>{cta.text}</p>
            <div className="ysc-ev-cta-actions">
              <a className="btn btn-primary" href="/rejoindre#registration-form">S&apos;inscrire maintenant</a>
              <a className="btn-outline-white" href="tel:+22899670186">+228 99 67 01 86 / +228 91 53 48 85</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
