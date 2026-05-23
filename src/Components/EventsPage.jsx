import galleryA from "../images/472902518_601111642868247_3421823822486160063_n.jpg";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import galleryC from "../images/WhatsApp Image 2026-05-22 at 15.06.55.jpeg";
import galleryD from "../images/WhatsApp Image 2026-05-22 at 15.07.50.jpeg";
import galleryE from "../images/WhatsApp Image 2026-05-22 at 15.20.21 (1).jpeg";
import { scoped, SectionLabel } from "./Pages";

const pastEvents = [
  {
    title: "Championnat de zone – Gymnastique",
    date: "Mars 2025",
    location: "Stade de Kégué, Lomé",
    category: "Compétition",
    result: "🥇 1re place catégorie moins de 12 ans",
    description:
      "Nos jeunes gymnastes ont brillé lors du championnat de zone, décrochant la première place dans la catégorie moins de 12 ans face aux clubs de la région.",
  },
  {
    title: "Championnat national – Fitness",
    date: "Novembre 2024",
    location: "Palais des Sports, Lomé",
    category: "Compétition",
    result: "🥈 2e place et 🥉 3e place",
    description:
      "Deux de nos athlètes fitness ont brillé sur la scène nationale, rapportant médaille d'argent et de bronze dans la tranche moins de 12 ans.",
  },
  {
    title: "Championnat de zone – Boxe éducative",
    date: "Juin 2024",
    location: "Dojo Youth Sports Club",
    category: "Compétition",
    result: "🥇 2 médailles d'or",
    description:
      "Deux boxeurs du club ont dominé leur catégorie lors du championnat de zone, confirmant la qualité de l'encadrement technique du YSC.",
  },
  {
    title: "Journée portes ouvertes – Édition 2024",
    date: "Août 2024",
    location: "Youth Sports Club",
    category: "Événement club",
    result: "150+ familles accueillies",
    description:
      "Une journée festive ouverte à toute la communauté : démonstrations, essais gratuits et inscriptions sur place dans une ambiance conviviale.",
  },
];

const upcomingEvents = [
  {
    title: "Stage de perfectionnement – Gymnastique",
    date: "15 – 20 juin 2026",
    location: "Stade de Kégué, Lomé",
    category: "Stage",
    description:
      "Travail technique intensif, souplesse et préparation aux compétitions avec un encadrement renforcé. Ouvert aux benjamins, minimes et cadets.",
  },
  {
    title: "Championnat national – Moins de 12 ans",
    date: "Juillet 2026",
    location: "Palais des Sports, Lomé",
    category: "Compétition",
    description:
      "Le YSC engage ses meilleurs éléments en gymnastique, fitness et boxe éducative pour le championnat national moins de 12 ans.",
  },
  {
    title: "Tournoi amical de boxe éducative",
    date: "05 juillet 2026",
    location: "Dojo Youth Sports Club",
    category: "Tournoi",
    description:
      "Rencontres encadrées inter-clubs pour développer discipline, respect et maîtrise de soi dans un cadre bienveillant.",
  },
  {
    title: "Journée portes ouvertes",
    date: "24 août 2026",
    location: "Youth Sports Club",
    category: "Événement club",
    description:
      "Essais gratuits, démonstrations et inscriptions sur place pour toutes les familles. Venez découvrir le club et rencontrer nos coachs.",
  },
];

const champions = [
  {
    name: "Koffi A.",
    discipline: "Gymnastique",
    achievement: "Champion de zone – Moins de 12 ans",
    year: "2025",
    photo: galleryA,
  },
  {
    name: "Afi M.",
    discipline: "Fitness",
    achievement: "Vice-championne nationale – Moins de 12 ans",
    year: "2024",
    photo: galleryC,
  },
  {
    name: "Edem T.",
    discipline: "Boxe éducative",
    achievement: "Champion de zone – Catégorie junior",
    year: "2024",
    photo: galleryD,
  },
  {
    name: "Sena K.",
    discipline: "Fitness",
    achievement: "3e place nationale – Moins de 12 ans",
    year: "2024",
    photo: galleryE,
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
  "Compétition": { bg: "#fff0f0", color: "#a32d2d", border: "#f7c1c1" },
  "Stage":        { bg: "#eaf2fc", color: "#185fa5", border: "#b5d4f4" },
  "Tournoi":      { bg: "#faeeda", color: "#854f0b", border: "#fac775" },
  "Événement club": { bg: "#eaf3de", color: "#3b6d11", border: "#c0dd97" },
};

const disciplineColors = {
  "Gymnastique":    { bg: "#eaf2fc", color: "#185fa5" },
  "Fitness":        { bg: "#eaf3de", color: "#3b6d11" },
  "Boxe éducative": { bg: "#fff0f0", color: "#a32d2d" },
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

  /* Champions */
  .ysc-champions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  .ysc-champion-card {
    background: #fff;
    border-radius: 16px;
    border: 1px solid #d7e5f6;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(13,45,84,0.09);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ysc-champion-card:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(13,45,84,0.16); }
  .ysc-champion-photo-wrap { position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; }
  .ysc-champion-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ysc-champion-year {
    position: absolute; top: 10px; right: 10px;
    background: #2f6fb2; color: #fff;
    font-size: 0.72rem; font-weight: 700;
    padding: 3px 9px; border-radius: 999px;
  }
  .ysc-champion-body { padding: 1rem 1.1rem 1.2rem; }
  .ysc-champion-name { font-size: 1rem; font-weight: 700; color: #1f4f8a; margin-bottom: 0.2rem; }
  .ysc-champion-disc { font-size: 0.78rem; font-weight: 600; margin-bottom: 0.5rem; display: inline-block; padding: 2px 10px; border-radius: 999px; }
  .ysc-champion-achievement { font-size: 0.82rem; color: #355274; line-height: 1.5; }

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
          <p>Les prochains temps forts pour les athlètes, familles et partenaires du club.</p>
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

    {/* ── Champions ── */}
    <section className="ysc-ev-section">
      <div className="ysc-ev-inner">
        <div className="ysc-ev-header">
          <SectionLabel>Palmarès</SectionLabel>
          <h2>Nos athlètes champions</h2>
          <p>
            Ils représentent le Youth Sports Club en compétition et portent haut les couleurs du club.
          </p>
        </div>
        <div className="ysc-champions-grid">
          {champions.map((c) => {
            const disc = disciplineColors[c.discipline] || disciplineColors["Fitness"];
            return (
              <div className="ysc-champion-card" key={c.name}>
                <div className="ysc-champion-photo-wrap">
                  <img
                    className="ysc-champion-photo"
                    src={c.photo}
                    alt={`${c.name} – ${c.discipline}`}
                  />
                  <span className="ysc-champion-year">{c.year}</span>
                </div>
                <div className="ysc-champion-body">
                  <p className="ysc-champion-name">{c.name}</p>
                  <span
                    className="ysc-champion-disc"
                    style={{ background: disc.bg, color: disc.color }}
                  >
                    {c.discipline}
                  </span>
                  <p className="ysc-champion-achievement">🏅 {c.achievement}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Galerie photos ── */}
    <section className="ysc-ev-section--alt">
      <div className="ysc-ev-inner">
        <div className="ysc-ev-header">
          <SectionLabel>Galerie</SectionLabel>
          <h2>Images récentes</h2>
          <p>Entraînements, démonstrations et moments de compétition.</p>
        </div>
        <div className="ysc-ev-gallery">
          {eventsGallery.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
          ))}
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