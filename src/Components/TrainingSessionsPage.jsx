// ─── Imports ────────────────────────────────────────────────────────────────
import { linesOf, usePageBlocks } from "./usePageContent";
import videoBoxe from "url:../images/video-boxe.mp4";
import videoFitness from "url:../images/video-fitness.mp4";
import videoGym from "url:../images/video-gym.mp4";
import { scoped, SectionLabel } from "./Pages";

// ─── Données structurelles (vidéos / couleurs) ───────────────────────────────

const disciplineMeta = [
  {
    id: "gymnastique",
    accentColor: "#2f6fb2",
    accentBg: "#eaf2fc",
    emoji: "🤸",
    videoSrc: videoGym,
    videoLabel: "Séance de Gymnastique – Youth Sports Club",
  },
  {
    id: "boxe",
    accentColor: "#c0392b",
    accentBg: "#fdecea",
    emoji: "🥊",
    videoSrc: videoBoxe,
    videoLabel: "Séance de Boxe éducative – Youth Sports Club",
  },
  {
    id: "fitness",
    accentColor: "#27ae60",
    accentBg: "#eafaf1",
    emoji: "💪",
    videoSrc: videoFitness,
    videoLabel: "Séance de Fitness – Youth Sports Club",
  },
];

const detailIcons = ["ti-users", "ti-users", "ti-users", "ti-calendar", "ti-map-pin", "ti-certificate", "ti-trophy"];

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

  /* Split layout */
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

  .ysc-schedule__day-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.12);
    color: #fff;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 5px 16px;
    border-radius: 999px;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
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

  .ysc-schedule__who {
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

const VideoOrPlaceholder = ({ videoSrc, videoLabel }) => (
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

export const TrainingSessionsPage = () => {
  const { block } = usePageBlocks("entrainements");
  const intro = block("intro");
  const scheduleBlock = block("schedule");
  const scheduleLines = linesOf(scheduleBlock.text);
  const scheduleIntro = scheduleLines[0]?.includes("|") ? "" : scheduleLines[0] || "";
  const scheduleSub = scheduleLines[1]?.includes("|") ? scheduleIntro : scheduleLines[1] || scheduleIntro;
  const scheduleSlots = linesOf(scheduleBlock.text)
    .filter((line) => line.includes("|"))
    .map((line) => {
      const parts = line.split("|").map((part) => part.trim());
      return {
        who: parts[0] || "",
        time: parts[1] || "",
        disciplines: (parts[2] || "").split(",").map((item) => item.trim()).filter(Boolean),
      };
    });
  const cta = block("cta");

  const displayedDisciplines = disciplineMeta.map((meta) => {
    const managed = block(meta.id);
    const contentLines = linesOf(managed.text);
    return {
      ...meta,
      label: managed.title,
      tagline: contentLines[0] || "",
      description: contentLines[1] || "",
      details: contentLines.slice(2).map((text, index) => ({
        icon: detailIcons[index] || "ti-check",
        text,
      })),
      managedImage: managed.image,
    };
  });

  return (
  <>
    <style>{scoped}</style>
    <style>{extra}</style>

    <section className="ysc-page-hero">
      <SectionLabel>Disciplines</SectionLabel>
      <h1>{intro.title}</h1>
      <p>{intro.text}</p>
    </section>

    {displayedDisciplines.map((disc) => (
      <section
        key={disc.id}
        id={disc.id}
        className="ysc-disc"
        aria-labelledby={`disc-title-${disc.id}`}
      >
        <div className="ysc-disc__inner">
          <div className="ysc-disc__header">
            <span className="ysc-disc__emoji" aria-hidden="true">{disc.emoji}</span>
            <div className="ysc-disc__title-wrap">
              <h2 id={`disc-title-${disc.id}`} className="ysc-disc__title">{disc.label}</h2>
              <p className="ysc-disc__tagline">{disc.tagline}</p>
            </div>
          </div>

          <div className="ysc-disc__split">
            <div>
              <p className="ysc-disc__desc">{disc.description}</p>
              {disc.managedImage && <img className="ysc-managed-discipline-image" src={disc.managedImage} alt={disc.label} />}
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

            <VideoOrPlaceholder videoSrc={disc.videoSrc} videoLabel={disc.videoLabel} />
          </div>
        </div>
      </section>
    ))}

    <section className="ysc-schedule" aria-labelledby="schedule-title">
      <div className="ysc-schedule__inner">
        <SectionLabel>Planning</SectionLabel>
        <h2 id="schedule-title" className="ysc-schedule__title">{scheduleBlock.title}</h2>
        <p className="ysc-schedule__sub">{scheduleSub}</p>

        <div className="ysc-schedule__day-label">📅 Samedi — Toutes disciplines</div>

        <table className="ysc-schedule__table">
          <thead>
            <tr>
              <th>Groupe</th>
              <th>Horaire</th>
              <th>Disciplines</th>
            </tr>
          </thead>
          <tbody>
            {scheduleSlots.map((slot) => (
              <tr key={slot.who}>
                <td className="ysc-schedule__who">{slot.who}</td>
                <td>{slot.time}</td>
                <td>
                  <div className="ysc-schedule__tags">
                    {slot.disciplines.map((d) => (
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

    <section className="ysc-train-cta" aria-labelledby="train-cta-title">
      <div className="ysc-train-cta__inner">
        <h2 id="train-cta-title" className="ysc-train-cta__title">{cta.title}</h2>
        <p className="ysc-train-cta__sub">{cta.text}</p>
        <div className="ysc-train-cta__actions">
          <a href="/rejoindre#registration-form" className="ysc-btn ysc-btn--primary">
            <span>S&apos;inscrire maintenant</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="tel:+22899670186" className="ysc-btn ysc-btn--outline">
            <span>+228 99 67 01 86 / +228 91 53 48 85</span>
          </a>
        </div>
      </div>
    </section>
  </>
  );
};