import galleryA from "../images/472902518_601111642868247_3421823822486160063_n.jpg";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import galleryC from "../images/WhatsApp Image 2026-05-22 at 15.06.55.jpeg";
import galleryD from "../images/WhatsApp Image 2026-05-22 at 15.07.50.jpeg";
import galleryE from "../images/WhatsApp Image 2026-05-22 at 15.20.21 (1).jpeg";
import { scoped, SectionLabel } from "./Pages";

const pastEvents = [
  {
    title: "Championnat de zone – Gymnastics",
    date: "2023",
    location: "Togo",
    category: "Compétition",
    result: "🥇 Plusieurs podiums",
    description:
      "Nos gymnastes ont brillé lors du championnat de zone 2023, avec notamment CISSE Maya (1re) et Cheuvreuil Ayana (2e) en tête des classements.",
  },
  {
    title: "Championnat national – Gymnastique",
    date: "2023",
    location: "Togo",
    category: "Compétition",
    result: "🥇 Multiples médailles",
    description:
      "Le YSC a dominé le championnat national 2023 dans plusieurs catégories : podiums en fitness, boxe éducative et gymnastique aérobic.",
  },
  {
    title: "Championnat d'Afrique – Gymnastique Aérobic",
    date: "2024",
    location: "Égypte",
    category: "Compétition",
    result: "🥉 Médaille de bronze",
    description:
      "PANASSI Emmanuel a décroché la médaille de bronze au championnat d'Afrique de gymnastique aérobic 2024 en Égypte, portant haut les couleurs du Togo et du YSC.",
  },
];

const upcomingEvents = [
  {
    title: "Compétition de zone – Kara",
    date: "18 – 20 juin 2026",
    location: "Kara, Togo",
    category: "Compétition",
    description:
      "Première étape du circuit de zone 2026. Le YSC engage ses athlètes en gymnastique, fitness et boxe éducative. Compétition organisée par la Fédération nationale.",
  },
  {
    title: "Compétition de zone – Atakpamé",
    date: "22 – 24 juin 2026",
    location: "Atakpamé, Togo",
    category: "Compétition",
    description:
      "Deuxième étape du circuit de zone 2026, organisée par la Fédération. Le club présentera ses meilleurs éléments dans toutes les disciplines.",
  },
  {
    title: "Compétition – Lomé",
    date: "04 juillet 2026",
    location: "Lomé, Togo",
    category: "Compétition",
    description:
      "Troisième rendez-vous du circuit, organisé par la Fédération à Lomé. Une occasion supplémentaire pour nos athlètes de se qualifier pour les championnats nationaux.",
  },
];

const laureats = [
  {
    photo: galleryA,
    title: "Championnat d'Afrique 2024 – Égypte",
    discipline: "Gymnastique Aérobic",
    results: [
      { rank: "🥉 Bronze", name: "PANASSI Emmanuel" },
    ],
    note: "Médaillé de bronze au championnat d'Afrique de gymnastique aérobic 2024 en Égypte.",
  },
  {
    photo: galleryC,
    title: "Championnat National 2023",
    discipline: "Gymnastatique / Fitness",
    results: [
      { rank: "🥇 1er", name: "PANASSI Emmanuel" },
      { rank: "🥈 2e", name: "ATOKLO Guillaume" },
      { rank: "🥉 3e", name: "ADADO Lucrèce" },
    ],
    note: null,
  },
  {
    photo: galleryD,
    title: "Championnat de Zone 2023",
    discipline: "Fitness",
    results: [
      { rank: "🥇 1re", name: "CISSE Maya" },
      { rank: "🥈 2e", name: "Cheuvreuil Ayana" },
    ],
    note: null,
  },
  {
    photo: galleryE,
    title: "Championnat National 2023",
    discipline: "Fitness – Catégorie A",
    results: [
      { rank: "🥇 1re", name: "Cheuvreuil Ayana" },
      { rank: "🥈 2e", name: "CISSE Maya" },
    ],
    note: null,
  },
  {
    photo: galleryB,
    title: "Championnat National 2023",
    discipline: "Fitness – Catégorie B",
    results: [
      { rank: "🥇 1er", name: "ABBI Mabel" },
      { rank: "🥈 2e", name: "DAGBO Félicité" },
      { rank: "🥉 3e", name: "ESSODEBOU Zakiya" },
    ],
    note: null,
  },
  {
    photo: galleryA,
    title: "Compétition – Catégorie Junior",
    discipline: "Boxe éducative",
    results: [
      { rank: "🥇 1re", name: "RAHIMI Kiana" },
    ],
    note: null,
  },
  {
    photo: galleryC,
    title: "Compétition – Catégorie Cadet",
    discipline: "Gymnastatique",
    results: [
      { rank: "🥇 1re", name: "BOUKPETI Lena" },
    ],
    note: null,
  },
  {
    photo: galleryD,
    title: "Compétition – Podium Collectif",
    discipline: "Fitness",
    results: [
      { rank: "🥇 1re", name: "BARNABO Félicité" },
      { rank: "🥈 2e", name: "RAHIMI Leyli" },
      { rank: "🥉 3e", name: "BROQUET Emilie" },
    ],
    note: null,
  },
];

const eventsGallery = [
  { src: galleryLarge, alt: "Démonstration de gymnastique du Youth Sports Club" },
  { src: galleryC, alt: "Entraînement de gymnastique récent" },
  { src: galleryD, alt: "Séance de boxe éducative" },
  { src: galleryE, alt: "Préparation physique et stretching" },
  { src: galleryA, alt: "Séance collective du Youth Sports Club" },
  { src: galleryB, alt: "Photo de groupe des athlètes du club" },
];

const categoryColors = {
  "Compétition":    { bg: "#fff0f0", color: "#a32d2d", border: "#f7c1c1" },
  "Stage":          { bg: "#eaf2fc", color: "#185fa5", border: "#b5d4f4" },
  "Tournoi":        { bg: "#faeeda", color: "#854f0b", border: "#fac775" },
  "Événement club": { bg: "#eaf3de", color: "#3b6d11", border: "#c0dd97" },
};

const disciplineColors = {
  "Gymnastatique":        { bg: "#eaf2fc", color: "#185fa5" },
  "Gymnastique Aérobic":  { bg: "#eaf2fc", color: "#185fa5" },
  "Fitness":              { bg: "#eaf3de", color: "#3b6d11" },
  "Boxe éducative":       { bg: "#fff0f0", color: "#a32d2d" },
};

const rankColors = {
  "🥇": "#b8860b",
  "🥈": "#607d8b",
  "🥉": "#8b4513",
};

const extra = `
  .ysc-ev-section { padding: 4.5rem 1rem; }
  .ysc-ev-section--alt { padding: 4.5rem 1rem; background: #f5f8fd; }
  .ysc-ev-inner { max-width: 1100px; margin: 0 auto; }
  .ysc-ev-header { text-align: center; margin-bottom: 2.5rem; }
  .ysc-ev-header h2 { font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 800; color: #1f4f8a; margin-bottom: 0.4rem; }
  .ysc-ev-header p { color: #4a6b90; font-size: 1rem; }

  /* Timeline past events */
  .ysc-timeline { display: flex; flex-direction: column; gap: 1.25rem; }
  .ysc-timeline-item {
    background: #fff;
    border-radius: 14px;
    border: 1px solid #d7e5f6;
    padding: 1.4rem 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1.25rem;
    align-items: start;
  }
  .ysc-timeline-dot {
    width: 12px; height: 12px; border-radius: 50%;
    background: #2f6fb2; margin-top: 6px; flex-shrink: 0;
  }
  .ysc-timeline-meta { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.4rem; }
  .ysc-timeline-title { font-size: 1.05rem; font-weight: 700; color: #1f4f8a; margin-bottom: 0.25rem; }
  .ysc-timeline-result { font-size: 0.88rem; font-weight: 600; color: #355274; margin-bottom: 0.35rem; }
  .ysc-timeline-desc { font-size: 0.88rem; color: #4a6b90; line-height: 1.6; }
  .ysc-badge {
    display: inline-block; font-size: 0.72rem; font-weight: 700;
    padding: 3px 10px; border-radius: 999px; border: 1px solid;
  }
  .ysc-meta-item { font-size: 0.8rem; color: #4a6b90; display: flex; align-items: center; gap: 4px; }

  /* Upcoming event cards */
  .ysc-upcoming-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .ysc-upcoming-card {
    background: #fff;
    border-radius: 14px;
    border: 1px solid #d7e5f6;
    padding: 1.4rem 1.25rem;
    display: flex; flex-direction: column;
    box-shadow: 0 4px 16px rgba(13,45,84,0.07);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ysc-upcoming-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(13,45,84,0.13); }
  .ysc-upcoming-date { font-size: 0.8rem; font-weight: 700; color: #2f6fb2; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 5px; }
  .ysc-upcoming-title { font-size: 1rem; font-weight: 700; color: #1f4f8a; margin-bottom: 0.35rem; }
  .ysc-upcoming-location { font-size: 0.8rem; color: #4a6b90; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 5px; }
  .ysc-upcoming-desc { font-size: 0.85rem; color: #355274; line-height: 1.6; flex: 1; }

  /* Lauréats */
  .ysc-laureats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  .ysc-laureat-card {
    background: #fff;
    border-radius: 16px;
    border: 1px solid #d7e5f6;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(13,45,84,0.09);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; flex-direction: column;
  }
  .ysc-laureat-card:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(13,45,84,0.16); }
  .ysc-laureat-photo-wrap { position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; }
  .ysc-laureat-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ysc-laureat-disc-badge {
    position: absolute; top: 10px; left: 10px;
    font-size: 0.68rem; font-weight: 700;
    padding: 3px 10px; border-radius: 999px;
    backdrop-filter: blur(4px);
  }
  .ysc-laureat-body { padding: 1.1rem 1.2rem 1.3rem; flex: 1; }
  .ysc-laureat-competition { font-size: 0.75rem; font-weight: 700; color: #2f6fb2; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.35rem; }
  .ysc-laureat-title { font-size: 0.97rem; font-weight: 800; color: #1f4f8a; margin-bottom: 0.7rem; line-height: 1.35; }
  .ysc-laureat-results { display: flex; flex-direction: column; gap: 0.3rem; margin-bottom: 0.6rem; }
  .ysc-laureat-result-row { display: flex; align-items: center; gap: 0.5rem; }
  .ysc-laureat-rank { font-size: 0.85rem; min-width: 28px; }
  .ysc-laureat-name { font-size: 0.88rem; font-weight: 600; color: #1f4f8a; }
  .ysc-laureat-note { font-size: 0.8rem; color: #4a6b90; line-height: 1.5; border-top: 1px solid #e8f0fa; padding-top: 0.6rem; margin-top: 0.4rem; font-style: italic; }

  /* Gallery */
  .ysc-ev-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
  .ysc-ev-gallery img {
    width: 100%; aspect-ratio: 4/3; object-fit: cover;
    border-radius: 10px; display: block;
  }
  .ysc-ev-gallery img:first-child {
    grid-column: 1 / -1; aspect-ratio: 16/7;
  }

  /* CTA */
  .ysc-ev-cta {
    background: linear-gradient(120deg, #07152d, #102a50 60%, #113766);
    border-radius: 16px; padding: 3rem 2rem; text-align: center;
    position: relative; overflow: hidden;
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
    .ysc-ev-gallery { grid-template-columns: 1fr 1fr; }
    .ysc-ev-gallery img:first-child { grid-column: 1 / -1; }
    .ysc-timeline-item { grid-template-columns: 1fr; }
    .ysc-timeline-dot { display: none; }
    .ysc-laureats-grid { grid-template-columns: 1fr; }
  }
`;

export const EventsPage = () => (
  <>
    <style>{scoped}</style>
    <style>{extra}</style>

    {/* ── Hero ── */}
    <section className="ysc-page-hero">
      <SectionLabel>Agenda &amp; Palmarès</SectionLabel>
      <h1>Événements</h1>
      <p>
        Compétitions, stages et tournois — retrouvez toute l'actualité sportive du Youth Sports Club,
        passée et à venir.
      </p>
      <img src={galleryLarge} alt="Événement sportif du Youth Sports Club" className="ysc-hero-img" />
    </section>

    {/* ── Événements à venir ── */}
    <section className="ysc-ev-section">
      <div className="ysc-ev-inner">
        <div className="ysc-ev-header">
          <SectionLabel>Prochains rendez-vous</SectionLabel>
          <h2>Calendrier à venir</h2>
          <p>
            Compétitions de zone organisées par la Fédération nationale auxquelles le YSC prendra part.
          </p>
        </div>
        <div className="ysc-upcoming-grid">
          {upcomingEvents.map((event) => {
            const cat = categoryColors[event.category] || categoryColors["Événement club"];
            return (
              <article className="ysc-upcoming-card" key={event.title}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span
                    className="ysc-badge"
                    style={{ background: cat.bg, color: cat.color, borderColor: cat.border }}
                  >
                    {event.category}
                  </span>
                </div>
                <p className="ysc-upcoming-date">
                  <span>📅</span> {event.date}
                </p>
                <h3 className="ysc-upcoming-title">{event.title}</h3>
                <p className="ysc-upcoming-location">
                  <span>📍</span> {event.location}
                </p>
                <p className="ysc-upcoming-desc">{event.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Événements passés ── */}
    <section className="ysc-ev-section--alt">
      <div className="ysc-ev-inner">
        <div className="ysc-ev-header">
          <SectionLabel>Historique</SectionLabel>
          <h2>Événements passés</h2>
          <p>Retour sur les compétitions et moments forts vécus par le club.</p>
        </div>
        <div className="ysc-timeline">
          {pastEvents.map((event) => {
            const cat = categoryColors[event.category] || categoryColors["Événement club"];
            return (
              <div className="ysc-timeline-item" key={event.title}>
                <div className="ysc-timeline-dot" />
                <div>
                  <div className="ysc-timeline-meta">
                    <span
                      className="ysc-badge"
                      style={{ background: cat.bg, color: cat.color, borderColor: cat.border }}
                    >
                      {event.category}
                    </span>
                    <span className="ysc-meta-item">📅 {event.date}</span>
                    <span className="ysc-meta-item">📍 {event.location}</span>
                  </div>
                  <p className="ysc-timeline-title">{event.title}</p>
                  {event.result && (
                    <p className="ysc-timeline-result">{event.result}</p>
                  )}
                  <p className="ysc-timeline-desc">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Lauréats ── */}
    <section className="ysc-ev-section">
      <div className="ysc-ev-inner">
        <div className="ysc-ev-header">
          <SectionLabel>Palmarès</SectionLabel>
          <h2>Nos lauréats</h2>
          <p>
            Les athlètes du Youth Sports Club qui ont brillé en compétition régionale, nationale et africaine.
          </p>
        </div>
        <div className="ysc-laureats-grid">
          {laureats.map((l, i) => {
            const disc = disciplineColors[l.discipline] || { bg: "#eaf3de", color: "#3b6d11" };
            return (
              <div className="ysc-laureat-card" key={i}>
                <div className="ysc-laureat-photo-wrap">
                  <img
                    className="ysc-laureat-photo"
                    src={l.photo}
                    alt={l.title}
                  />
                  <span
                    className="ysc-laureat-disc-badge"
                    style={{ background: disc.bg + "ee", color: disc.color }}
                  >
                    {l.discipline}
                  </span>
                </div>
                <div className="ysc-laureat-body">
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

  

    {/* ── CTA final ── */}
    <section className="ysc-ev-section">
      <div className="ysc-ev-inner">
        <div className="ysc-ev-cta">
          <h2>Rejoignez un club de champions</h2>
          <p>
            Inscription ouverte toute l'année · Encadrement professionnel · Stade de Kégué, Lomé
          </p>
          <div className="ysc-ev-cta-actions">
            <a className="btn btn-primary" href="/rejoindre#registration-form">
              S'inscrire maintenant
            </a>
            <a className="btn-outline-white" href="tel:+22891534885">
              +228 91 53 48 85
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);