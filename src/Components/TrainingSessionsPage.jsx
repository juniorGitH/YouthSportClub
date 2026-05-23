// ─── Imports ────────────────────────────────────────────────────────────────
import galleryA from "../images/472902518_601111642868247_3421823822486160063_n.jpg";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import { scoped, SectionLabel } from "./Pages";

// ─── Placeholder media (remplacer par les vraies URLs/imports) ──────────────
// Vidéos : importer depuis "../images/..." une fois disponibles
// Photos supplémentaires : idem
// Pour l'instant on utilise les assets existants + des slots vides commentés

// ─── Données ─────────────────────────────────────────────────────────────────

const disciplines = [
  {
    id: "gymnastique",
    label: "Gymnastique",
    accentColor: "#2f6fb2",
    accentBg: "#eaf2fc",
    emoji: "🤸",
    tagline: "Souplesse, coordination et dépassement de soi",
    description:
      "La gymnastique au YSC forme les enfants dès 4 ans à travers des exercices au sol, aux agrès et en acrobaties. Le programme progressif renforce la motricité, l'équilibre et la confiance en soi tout en respectant le rythme de chaque athlète.",
    details: [
      { icon: "ti-users", text: "Âges : 4 – 17 ans" },
      { icon: "ti-chart-line", text: "Niveaux : Éveil, Benjamin, Minime, Cadet, Junior" },
      { icon: "ti-calendar", text: "Mercredi 14h–18h · Samedi 08h–12h" },
      { icon: "ti-certificate", text: "Encadrant certifié FIG Niveau 1" },
      { icon: "ti-trophy", text: "Préparation aux compétitions nationales" },
    ],
    // videoSrc: gymVideoSrc, // import videoGym from "../images/gym.mp4"
    videoSrc: null,
    videoLabel: "Séance de Gymnastique – Youth Sports Club",
    photos: [galleryLarge, galleryA],
    photosAlt: ["Démonstration au sol", "Exercices aux agrès"],
  },
  {
    id: "boxe",
    label: "Boxe éducative",
    accentColor: "#c0392b",
    accentBg: "#fdecea",
    emoji: "🥊",
    tagline: "Discipline, respect et maîtrise de soi",
    description:
      "La boxe éducative du YSC n'est pas un sport de combat : c'est avant tout un outil pédagogique. À travers les gestes techniques, le travail au sac, les déplacements et les rencontres encadrées, les jeunes développent concentration, gestion du stress et esprit sportif.",
    details: [
      { icon: "ti-users", text: "Âges : 10 ans et +" },
      { icon: "ti-chart-line", text: "Niveaux : Initiation & perfectionnement" },
      { icon: "ti-calendar", text: "Mercredi 14h–18h · Samedi 08h–12h" },
      { icon: "ti-certificate", text: "Encadrant certifié boxe éducative" },
      { icon: "ti-heart", text: "Approche non-violente et éducative" },
    ],
    // videoSrc: boxeVideoSrc,
    videoSrc: null,
    videoLabel: "Séance de Boxe éducative – Youth Sports Club",
    photos: [galleryB, galleryA],
    photosAlt: ["Travail technique au sac", "Rencontre encadrée"],
  },
  {
    id: "fitness",
    label: "Fitness & Cross-training",
    accentColor: "#27ae60",
    accentBg: "#eafaf1",
    emoji: "💪",
    tagline: "Force, mobilité et forme complète",
    description:
      "Le programme fitness du YSC est conçu pour adolescents et adultes souhaitant améliorer leur condition physique globale. Renforcement musculaire, travail cardiovasculaire, mobilité et coordination sont au programme — adapté à chaque niveau, du débutant au sportif régulier.",
    details: [
      { icon: "ti-users", text: "Âges : Adolescents & adultes" },
      { icon: "ti-chart-line", text: "Niveaux : Tous niveaux" },
      { icon: "ti-calendar", text: "Dimanche 08h30–11h30" },
      { icon: "ti-certificate", text: "Encadrant certifié fitness & cross-training" },
      { icon: "ti-flame", text: "Cardio, renforcement et mobilité" },
    ],
    // videoSrc: fitnessVideoSrc,
    videoSrc: null,
    videoLabel: "Séance de Fitness – Youth Sports Club",
    photos: [galleryA, galleryLarge],
    photosAlt: ["Circuit training en groupe", "Séance de renforcement"],
  },
];

const schedule = [
  { day: "Mercredi", time: "14h00 – 18h00", disciplines: ["Gymnastique", "Boxe éducative"] },
  { day: "Samedi",   time: "08h00 – 12h00", disciplines: ["Gymnastique enfants", "Fitness adultes"] },
  { day: "Dimanche", time: "08h30 – 11h30", disciplines: ["Fitness & cross-training", "Séances privées"] },
];

// ─── CSS propre à ce fichier ────────────────────────────────────────────────

const extra = `
  /* ── Discipline section ── */
  .ysc-disc {
    padding: 5rem 1rem;
  }

  .ysc-disc:nth-child(even) {
    background: var(--ysc-bg-alt);
  }

  .ysc-disc__inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  /* Header discipline */
  .ysc-disc__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .ysc-disc__emoji {
    font-size: 2.5rem;
    line-height: 1;
    flex-shrink: 0;
  }

  .ysc-disc__title-wrap {}

  .ysc-disc__title {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 800;
    color: var(--ysc-primary-dark);
    line-height: 1.1;
    margin: 0 0 0.25rem;
  }

  .ysc-disc__tagline {
    font-size: 1rem;
    color: var(--ysc-text-light);
    margin: 0;
  }

  /* Split layout: text left, media right */
  .ysc-disc__split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
    margin-bottom: 3rem;
  }

  .ysc-disc__desc {
    font-size: 1.05rem;
    color: var(--ysc-text);
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }

  .ysc-disc__details {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .ysc-disc__detail {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--ysc-text);
  }

  .ysc-disc__detail-icon {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }

  /* Video block */
  .ysc-disc__video-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 12px 36px rgba(13, 45, 84, 0.12);
    background: #0a1628;
  }

  .ysc-disc__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ysc-disc__video-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: rgba(255,255,255,0.5);
    font-size: 0.9rem;
  }

  .ysc-disc__video-placeholder-icon {
    font-size: 3rem;
    opacity: 0.4;
  }

  .ysc-disc__video-label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
    padding: 1.25rem 1rem 0.75rem;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 600;
  }

  /* Photo strip */
  .ysc-disc__photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .ysc-disc__photo {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }

  .ysc-disc__photo:first-child {
    grid-column: 1 / -1;
    height: 300px;
  }

  /* ── Schedule table ── */
  .ysc-schedule {
    padding: 4rem 1rem;
    background: var(--ysc-primary-dark);
  }

  .ysc-schedule__inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .ysc-schedule__title {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  .ysc-schedule__sub {
    color: rgba(255,255,255,0.65);
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  .ysc-schedule__table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    overflow: hidden;
  }

  .ysc-schedule__table th {
    background: rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.7);
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 1rem 1.25rem;
    text-align: left;
  }

  .ysc-schedule__table td {
    padding: 1rem 1.25rem;
    color: #fff;
    font-size: 0.95rem;
    border-top: 1px solid rgba(255,255,255,0.07);
    vertical-align: middle;
  }

  .ysc-schedule__table tr:hover td {
    background: rgba(255,255,255,0.04);
  }

  .ysc-schedule__day {
    font-weight: 700;
    color: var(--ysc-accent);
  }

  .ysc-schedule__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .ysc-schedule__tag {
    display: inline-block;
    padding: 3px 10px;
    background: rgba(255,255,255,0.12);
    border-radius: 999px;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.85);
  }

  /* ── CTA final ── */
  .ysc-train-cta {
    padding: 5rem 1rem;
    background: var(--ysc-white);
  }

  .ysc-train-cta__inner {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    background: linear-gradient(135deg, #f3f8ff 0%, #eaf2fc 100%);
    border-radius: var(--ysc-radius);
    padding: 4rem 2.5rem;
    box-shadow: 0 12px 40px rgba(47, 111, 178, 0.1);
  }

  .ysc-train-cta__title {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 0.75rem;
  }

  .ysc-train-cta__sub {
    color: var(--ysc-text-light);
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .ysc-train-cta__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .ysc-btn--outline {
    background: transparent;
    color: var(--ysc-primary);
    border: 2px solid var(--ysc-primary);
  }

  .ysc-btn--outline:hover {
    background: var(--ysc-primary);
    color: #fff;
    transform: translateY(-2px);
  }

  /* ── Responsive ── */
  @media (max-width: 860px) {
    .ysc-disc__split {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .ysc-disc__photos {
      grid-template-columns: 1fr 1fr;
    }
    .ysc-disc__photo:first-child {
      height: 200px;
    }
    .ysc-disc__photo {
      height: 160px;
    }
    .ysc-schedule__table th:last-child,
    .ysc-schedule__table td:last-child {
      display: none;
    }
  }

  @media (max-width: 560px) {
    .ysc-disc__photos {
      grid-template-columns: 1fr;
    }
    .ysc-disc__photo:first-child {
      grid-column: 1;
    }
    .ysc-train-cta__actions {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// ─── Sub-components ──────────────────────────────────────────────────────────

/**
 * VideoOrPlaceholder
 * Affiche la vidéo si videoSrc est fourni, sinon un placeholder stylisé.
 * Remplacez videoSrc: null par l'import réel pour chaque discipline.
 */
const VideoOrPlaceholder = ({ videoSrc, videoLabel, accentColor }) => (
  <div className="ysc-disc__video-wrap">
    {videoSrc ? (
      <>
        <video
          className="ysc-disc__video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-label={videoLabel}
        />
        <div className="ysc-disc__video-label">{videoLabel}</div>
      </>
    ) : (
      <>
        <div className="ysc-disc__video-placeholder">
          <span className="ysc-disc__video-placeholder-icon">▶</span>
          <span>Vidéo d'entraînement à venir</span>
        </div>
        <div className="ysc-disc__video-label">{videoLabel}</div>
      </>
    )}
  </div>
);

// ─── Training Sessions Page ─────────────────────────────────────────────────

export const TrainingSessionsPage = () => (
  <>
    <style>{scoped}</style>
    <style>{extra}</style>

    {/* ── Hero ── */}
    <section className="ysc-page-hero">
      <SectionLabel>Disciplines</SectionLabel>
      <h1>Entraînements</h1>
      <p>
        Trois disciplines, un seul objectif : révéler le meilleur de chaque athlète dans un cadre
        sécurisé et bienveillant.
      </p>
      <img src={galleryA} alt="Séance d'entraînement encadrée au Youth Sports Club" className="ysc-hero-img" />
    </section>

    {/* ── Une section par discipline ── */}
    {disciplines.map((disc, i) => (
      <section
        key={disc.id}
        id={disc.id}
        className="ysc-disc"
        aria-labelledby={`disc-title-${disc.id}`}
      >
        <div className="ysc-disc__inner">

          {/* En-tête discipline */}
          <div className="ysc-disc__header">
            <span className="ysc-disc__emoji" aria-hidden="true">{disc.emoji}</span>
            <div className="ysc-disc__title-wrap">
              <h2 id={`disc-title-${disc.id}`} className="ysc-disc__title">
                {disc.label}
              </h2>
              <p className="ysc-disc__tagline">{disc.tagline}</p>
            </div>
          </div>

          {/* Split : infos à gauche, vidéo à droite */}
          <div className="ysc-disc__split">
            {/* Colonne gauche */}
            <div>
              <p className="ysc-disc__desc">{disc.description}</p>
              <ul className="ysc-disc__details">
                {disc.details.map(({ icon, text }) => (
                  <li key={text} className="ysc-disc__detail">
                    <span
                      className="ysc-disc__detail-icon"
                      style={{ background: disc.accentBg, color: disc.accentColor }}
                      aria-hidden="true"
                    >
                      <i className={`ti ${icon}`}></i>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne droite : vidéo */}
            <VideoOrPlaceholder
              videoSrc={disc.videoSrc}
              videoLabel={disc.videoLabel}
              accentColor={disc.accentColor}
            />
          </div>

          {/* Photos d'entraînement */}
          <div className="ysc-disc__photos" aria-label={`Photos – ${disc.label}`}>
            {disc.photos.map((src, j) => (
              <img
                key={j}
                src={src}
                alt={disc.photosAlt[j] || `Entraînement ${disc.label}`}
                className="ysc-disc__photo"
              />
            ))}
          </div>

        </div>
      </section>
    ))}

    {/* ── Planning hebdomadaire ── */}
    <section className="ysc-schedule" aria-labelledby="schedule-title">
      <div className="ysc-schedule__inner">
        <SectionLabel>Planning</SectionLabel>
        <h2 id="schedule-title" className="ysc-schedule__title">Horaires hebdomadaires</h2>
        <p className="ysc-schedule__sub">
          Créneaux réguliers — séances privées disponibles sur rendez-vous
        </p>
        <table className="ysc-schedule__table">
          <thead>
            <tr>
              <th>Jour</th>
              <th>Horaire</th>
              <th>Disciplines</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.day}>
                <td className="ysc-schedule__day">{row.day}</td>
                <td>{row.time}</td>
                <td>
                  <div className="ysc-schedule__tags">
                    {row.disciplines.map((d) => (
                      <span key={d} className="ysc-schedule__tag">{d}</span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="ysc-train-cta" aria-labelledby="train-cta-title">
      <div className="ysc-train-cta__inner">
        <h2 id="train-cta-title" className="ysc-train-cta__title">
          Prêt à rejoindre une discipline ?
        </h2>
        <p className="ysc-train-cta__sub">
          Essai gratuit sur inscription — nos coachs vous accueillent et vous orientent vers le
          programme adapté à votre profil.
        </p>
        <div className="ysc-train-cta__actions">
          <a href="/join#registration-form" className="ysc-btn ysc-btn--primary">
            <span>S'inscrire maintenant</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="tel:+22891534885" className="ysc-btn ysc-btn--outline">
            <span>+228 91 53 48 85</span>
          </a>
        </div>
      </div>
    </section>
  </>
);