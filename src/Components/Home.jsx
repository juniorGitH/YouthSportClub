import { Link } from "react-router-dom";
import fitnessDisciplineImage from "url:../images/474394443_609527335360011_3887746446676892278_n.jpg";
import gymDisciplineImage from "url:../images/480777236_636877472624997_71086379626942907_n.jpg";
import boxeDisciplineImage from "url:../images/home-boxe.png";
import heroVideoOne from "url:../images/WhatsApp Video 2026-05-16 at 13.55.02.mp4";
import heroVideoTwo from "url:../images/WhatsApp Video 2026-05-16 at 13.56.37.mp4";
import heroVideoThree from "url:../images/WhatsApp Video 2026-05-16 at 14.02.58.mp4";

const disciplines = [
  {
    num: "01",
    title: "Gymnastique",
    desc: "Notre discipline phare. Souplesse, coordination et maîtrise corporelle. Coachs certifiés FIG.",
    to: "/entrainements#gymnastique",
    image: gymDisciplineImage,
    imageAlt: "Groupe d'enfants en entraînement de gymnastique au sol",
  },
  {
    num: "02",
    title: "Boxe",
    desc: "Condition physique, discipline et maîtrise de soi. Encadrée par des spécialistes en sports de combat.",
    to: "/entrainements#boxe",
    image: boxeDisciplineImage,
    imageAlt: "Entraînement de boxe avec sac de frappe",
  },
  {
    num: "03",
    title: "Fitness & Cross Training",
    desc: "Remise en forme et renforcement musculaire. Accessible à tous les niveaux, adultes et jeunes.",
    to: "/entrainements#fitness",
    image: fitnessDisciplineImage,
    imageAlt: "Séance de fitness et cross training",
  },
];

const horaires = [
  { who: "12 ans et plus", time: "Samedi 08h – 10h" },
  { who: "11 ans et moins", time: "Samedi 10h – 12h" },
  { who: "Adultes", time: "Samedi 10h30 – 11h30" },
];

const tarifs = [
  { label: "Inscription", value: "5 000 FCFA" },
  { label: "Mensualité enfant", value: "20 000 FCFA" },
  { label: "Mensualité adulte", value: "15 000 FCFA" },
  { label: "Réduction fratrie", value: "3 enfants et +" },
];

const socialTags = [
  "Bourses partielles",
  "Bourses totales",
  "Détection des talents",
  "Accompagnement personnalisé",
  "Réduction fratrie (3 enfants+)",
];

const palmares = [
  {
    emoji: "🥇",
    title: "Champion de zone",
    discipline: "Gymnastique",
    detail: "Moins de 12 ans · 2025",
    color: "#2f6fb2",
    bg: "#eaf2fc",
  },
  {
    emoji: "🥈",
    title: "Vice-champion national",
    discipline: "Fitness",
    detail: "Moins de 12 ans · 2024",
    color: "#3b6d11",
    bg: "#eaf3de",
  },
  {
    emoji: "🥇",
    title: "2 médailles d'or",
    discipline: "Boxe éducative",
    detail: "Championnat de zone · 2024",
    color: "#a32d2d",
    bg: "#fff0f0",
  },
  {
    emoji: "🥉",
    title: "3e place nationale",
    discipline: "Fitness",
    detail: "Moins de 12 ans · 2024",
    color: "#854f0b",
    bg: "#faeeda",
  },
];

const heroVideos = [heroVideoOne, heroVideoTwo, heroVideoThree];

const scoped = `
  /* ── Hero ── */
  .ysc-hero {
    position: relative;
    min-height: calc(100vh + 65px);
    margin-top: -65px;
    padding: calc(7rem + 65px) 1rem 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .ysc-hero-videos {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    pointer-events: none;
  }
  .ysc-hero-video-slot {
    position: relative;
    overflow: hidden;
  }
  .ysc-hero-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.07);
  }
  @keyframes yscHeroVideoFade {
    0%, 29% { opacity: 1; }
    33%, 100% { opacity: 0; }
  }
  .ysc-hero-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(
        110deg,
        rgba(6, 18, 41, 0.84) 0%,
        rgba(6, 18, 41, 0.63) 45%,
        rgba(8, 24, 54, 0.86) 100%
      ),
      radial-gradient(circle at 80% 20%, rgba(61,126,196,0.26), transparent 38%);
    pointer-events: none;
  }
  .ysc-hero-inner {
    position: relative;
    z-index: 2;
    max-width: 860px;
    text-align: center;
    color: #fff;
    width: 100%;
  }
  .ysc-hero-eyebrow {
    color: #b7d3f5;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    font-size: 0.82rem;
    margin-bottom: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .ysc-hero-eyebrow::before,
  .ysc-hero-eyebrow::after {
    content: '';
    flex: 0 0 28px;
    height: 1px;
    background: #b7d3f5;
    opacity: 0.6;
  }
  .ysc-hero-inner h1 {
    font-size: clamp(2.4rem, 7vw, 5rem);
    font-weight: 800;
    line-height: 1.0;
    margin-bottom: 1rem;
    letter-spacing: 0.01em;
    color: #fff;
  }
  .ysc-hero-accent { color: #8dbbe8; font-style: normal; }
  .ysc-hero-sub {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #cedcf7;
    max-width: 580px;
    margin: 0 auto 1.25rem;
    line-height: 1.65;
  }
  .ysc-hero-stats {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1.75rem 0 2rem;
  }
  .ysc-hero-stat {
    text-align: center;
  }
  .ysc-hero-stat-num {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: #fff;
    line-height: 1;
  }
  .ysc-hero-stat-label {
    display: block;
    font-size: 0.72rem;
    color: #b7d3f5;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 4px;
  }
  .ysc-hero-stat-sep {
    width: 1px;
    background: rgba(183,211,245,0.3);
    align-self: stretch;
  }

  /* ── Discipline cards ── */
  .ysc-disc-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.5rem 1.25rem;
    box-shadow: 0 8px 24px rgba(13,45,84,0.12);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ysc-disc-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 36px rgba(13,45,84,0.2);
  }
  .ysc-disc-num {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    font-size: 3.5rem;
    font-weight: 800;
    color: #dfeafb;
    line-height: 1;
    user-select: none;
  }
  .ysc-disc-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1f4f8a;
    margin-bottom: 0.5rem;
  }
  .ysc-disc-image {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0.9rem;
    border: 1px solid #d7e5f6;
  }
  .ysc-disc-card p {
    font-size: 0.88rem;
    color: #355274;
    line-height: 1.6;
    flex: 1;
    margin-bottom: 1rem;
  }
  .ysc-disc-link {
    font-size: 0.8rem;
    font-weight: 700;
    color: #2f6fb2;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    align-self: flex-start;
  }
  .ysc-disc-link:hover { text-decoration: underline; }

  /* ── Palmarès ── */
  .ysc-palmares-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .ysc-palmares-card {
    border-radius: 14px;
    padding: 1.25rem 1.1rem;
    border: 1px solid #d7e5f6;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    background: #fff;
    transition: transform 0.2s;
  }
  .ysc-palmares-card:hover { transform: translateY(-2px); }
  .ysc-palmares-emoji { font-size: 2rem; line-height: 1; }
  .ysc-palmares-title { font-size: 0.95rem; font-weight: 700; color: #1f4f8a; }
  .ysc-palmares-disc {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 999px;
    align-self: flex-start;
  }
  .ysc-palmares-detail { font-size: 0.78rem; color: #4a6b90; }

  /* ── Infos table ── */
  .ysc-card-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: #1f4f8a;
    margin-bottom: 1rem;
  }
  .ysc-info-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
  }
  .ysc-info-table tr { border-bottom: 1px solid #c9dcf2; }
  .ysc-info-table tr:last-child { border-bottom: none; }
  .ysc-info-table td {
    padding: 0.6rem 0.2rem;
    color: #355274;
    line-height: 1.4;
  }
  .ysc-info-table td:first-child {
    font-weight: 600;
    color: #2e4d70;
    width: 55%;
  }
  .ysc-info-table td:last-child {
    text-align: right;
    font-weight: 700;
    color: #2f6fb2;
  }

  /* ── Social ── */
  .ysc-social-inner {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  .ysc-social-text { flex: 1; }
  .ysc-social-text h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1f4f8a;
    margin-bottom: 0.6rem;
  }
  .ysc-social-text p {
    font-size: 0.9rem;
    color: #355274;
    line-height: 1.7;
    margin-bottom: 0.9rem;
  }
  .ysc-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .ysc-tag {
    font-size: 0.78rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid #c9dcf2;
    color: #2d5f99;
    background: #f3f8ff;
  }
  .ysc-social-stat {
    flex-shrink: 0;
    text-align: center;
    background: #eaf2fc;
    border: 1px solid #c9dcf2;
    border-radius: 14px;
    padding: 1.25rem 1.75rem;
  }
  .ysc-social-stat-num {
    display: block;
    font-size: 2.8rem;
    font-weight: 800;
    color: #2f6fb2;
    line-height: 1;
  }
  .ysc-social-stat-label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #4a6b90;
    margin-top: 4px;
  }

  /* ── Prochain événement banner ── */
  .ysc-next-event {
    background: linear-gradient(110deg, #eaf2fc 0%, #f3f8ff 100%);
    border: 1px solid #c9dcf2;
    border-radius: 14px;
    padding: 1.4rem 1.75rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .ysc-next-event-badge {
    background: #2f6fb2;
    color: #fff;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 999px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .ysc-next-event-info { flex: 1; min-width: 180px; }
  .ysc-next-event-title { font-size: 0.98rem; font-weight: 700; color: #1f4f8a; margin-bottom: 0.2rem; }
  .ysc-next-event-meta { font-size: 0.82rem; color: #4a6b90; }

  /* ── CTA ── */
  .ysc-cta {
    background: linear-gradient(120deg, #07152d, #102a50 60%, #113766);
    border-radius: 16px;
    padding: 3rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .ysc-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 80% 20%, rgba(61,126,196,0.24), transparent 40%);
    pointer-events: none;
  }
  .ysc-cta h2 {
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 0.6rem;
    position: relative;
  }
  .ysc-cta > p {
    font-size: 0.92rem;
    color: #cedcf7;
    margin-bottom: 1.5rem;
    position: relative;
  }
  .ysc-cta-actions {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }
  .btn-outline-white {
    display: inline-block;
    padding: 0.75rem 1.2rem;
    border-radius: 999px;
    font-weight: 700;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.35);
    color: #fff;
    text-decoration: none;
  }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .ysc-hero {
      min-height: 100vh;
      margin-top: -65px;
      padding: calc(5.5rem + 65px) 0.85rem 2.5rem;
    }
    .ysc-hero-videos { display: block; }
    .ysc-hero-video-slot {
      position: absolute;
      inset: 0;
      opacity: 0;
      animation: yscHeroVideoFade 18s infinite;
    }
    .ysc-hero-video-slot:nth-child(1) { animation-delay: 0s; }
    .ysc-hero-video-slot:nth-child(2) { animation-delay: 6s; }
    .ysc-hero-video-slot:nth-child(3) { animation-delay: 12s; }
    .ysc-hero-eyebrow { letter-spacing: 0.08rem; font-size: 0.76rem; }
    .ysc-hero-stats { gap: 1rem; }
    .ysc-hero-stat-sep { display: none; }
    .ysc-social-inner { flex-direction: column; gap: 1rem; }
    .ysc-social-stat { width: 100%; }
    .ysc-cta { border-radius: 12px; padding: 2.5rem 1rem; }
    .ysc-next-event { gap: 1rem; }
  }
  @media (max-width: 640px) {
    .ysc-info-table tr { display: block; padding: 0.45rem 0; }
    .ysc-info-table td { display: block; padding: 0.15rem 0.2rem; }
    .ysc-info-table td:first-child { width: 100%; }
    .ysc-info-table td:last-child { text-align: left; padding-top: 0; }
  }
  @media (max-width: 520px) {
    .ysc-hero-inner h1 { font-size: clamp(2rem, 10vw, 3rem); }
    .ysc-hero .hero-actions,
    .ysc-cta-actions { flex-direction: column; align-items: stretch; }
    .ysc-hero .hero-actions .btn,
    .ysc-cta-actions .btn,
    .ysc-cta-actions .btn-outline-white { text-align: center; }
    .ysc-disc-num { font-size: 2.5rem; }
  }
`;

const Home = () => {
  return (
    <>
      <style>{scoped}</style>

      {/* ══ HERO ══ */}
      <section className="ysc-hero">
        <div className="ysc-hero-videos" aria-hidden="true">
          {heroVideos.map((videoSrc, index) => (
            <div className="ysc-hero-video-slot" key={index}>
              <video
                className="ysc-hero-video"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
        <div className="ysc-hero-overlay" />
        <div className="ysc-hero-inner">
          <p className="ysc-hero-eyebrow">Lomé, Togo · Fondé en 2022</p>
          <h1>
            YOUTH <em className="ysc-hero-accent">SPORTS</em> CLUB
          </h1>
          <p className="ysc-hero-sub">
            Association sportive de référence nationale, spécialisée dans la formation et
            l&apos;encadrement des jeunes à travers la gymnastique, la boxe et le fitness.
          </p>

          {/* Stats hero */}
          <div className="ysc-hero-stats" aria-label="Chiffres clés">
            <div className="ysc-hero-stat">
              <span className="ysc-hero-stat-num">3+</span>
              <span className="ysc-hero-stat-label">Années d'expérience</span>
            </div>
            <div className="ysc-hero-stat-sep" aria-hidden="true" />
            <div className="ysc-hero-stat">
              <span className="ysc-hero-stat-num">3</span>
              <span className="ysc-hero-stat-label">Disciplines</span>
            </div>
            <div className="ysc-hero-stat-sep" aria-hidden="true" />
            <div className="ysc-hero-stat">
              <span className="ysc-hero-stat-num">🥇</span>
              <span className="ysc-hero-stat-label">Champions nationaux</span>
            </div>
            <div className="ysc-hero-stat-sep" aria-hidden="true" />
            <div className="ysc-hero-stat">
              <span className="ysc-hero-stat-num">100%</span>
              <span className="ysc-hero-stat-label">Inclusif</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/rejoindre#registration-form">
              S&apos;inscrire maintenant
            </Link>
            <Link className="btn btn-outline" to="/a-propos">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PROCHAIN ÉVÉNEMENT ══ */}
      <section className="section">
        <div className="wide">
          <div className="ysc-next-event">
            <span className="ysc-next-event-badge">Prochain événement</span>
            <div className="ysc-next-event-info">
              <p className="ysc-next-event-title">
                Stage de perfectionnement – Gymnastique
              </p>
              <p className="ysc-next-event-meta">
                📅 15 – 20 juin 2026 &nbsp;·&nbsp; 📍 Stade de Kégué, Lomé
              </p>
            </div>
            <Link
              className="btn btn-primary"
              to="/evenements"
              style={{ flexShrink: 0, fontSize: "0.85rem", padding: "0.6rem 1.2rem" }}
            >
              Voir l&apos;agenda →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ DISCIPLINES ══ */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Nos disciplines</h2>
          <p>
            Trois activités complémentaires pour tous les profils et tous les niveaux, encadrées
            par des professionnels qualifiés.
          </p>
        </div>
        <div className="grid three-columns">
          {disciplines.map((d) => (
            <article className="ysc-disc-card" key={d.num}>
              <span className="ysc-disc-num" aria-hidden="true">{d.num}</span>
              {d.image && (
                <img
                  className="ysc-disc-image"
                  src={d.image}
                  alt={d.imageAlt || d.title}
                  loading="lazy"
                />
              )}
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <Link className="ysc-disc-link" to={d.to}>
                Découvrir →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ══ PALMARÈS ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Notre palmarès</h2>
          <p>
            Le Youth Sports Club forme des champions. Quelques titres obtenus en compétitions
            zonales et nationales.
          </p>
        </div>
        <div className="ysc-palmares-grid">
          {palmares.map((p) => (
            <div className="ysc-palmares-card" key={p.title + p.discipline}>
              <span className="ysc-palmares-emoji">{p.emoji}</span>
              <p className="ysc-palmares-title">{p.title}</p>
              <span
                className="ysc-palmares-disc"
                style={{ background: p.bg, color: p.color }}
              >
                {p.discipline}
              </span>
              <p className="ysc-palmares-detail">{p.detail}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1.75rem" }}>
          <Link className="btn btn-outline" to="/evenements">
            Voir tous les événements &amp; palmarès →
          </Link>
        </div>
      </section>

      {/* ══ INFOS PRATIQUES ══ */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Informations pratiques</h2>
          <p>Retrouvez-nous au Stade de Kégué, Lomé. Entraînements le samedi. Tous niveaux acceptés..</p>
        </div>
        <div className="grid two-columns">
          <div className="card">
            <p className="ysc-card-title">Horaires d&apos;entraînement</p>
            <table className="ysc-info-table">
              <tbody>
                {horaires.map((h) => (
                  <tr key={h.who}>
                    <td>{h.who}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
                <tr>
                  <td>Lieu</td>
                  <td>Stade de Kégué</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <p className="ysc-card-title">Tarifs</p>
            <table className="ysc-info-table">
              <tbody>
                {tarifs.map((t) => (
                  <tr key={t.label}>
                    <td>{t.label}</td>
                    <td>{t.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ ENGAGEMENT SOCIAL ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Engagement social</h2>
        </div>
        <div className="wide">
          <div className="card">
            <div className="ysc-social-inner">
              <div className="ysc-social-text">
                <h3>L&apos;accès au sport pour tous</h3>
                <p>
                  Le YSC s&apos;engage activement pour l&apos;inclusion et l&apos;accessibilité du
                  sport. Des dispositifs concrets accompagnent les jeunes issus de milieux modestes
                  dans leur parcours sportif et de vie : bourses, réductions familiales et suivi
                  personnalisé.
                </p>
                <div className="ysc-tags">
                  {socialTags.map((t) => (
                    <span className="ysc-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="ysc-social-stat">
                <span className="ysc-social-stat-num">100%</span>
                <span className="ysc-social-stat-label">Inclusif</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className="section section-alt">
        <div className="wide">
          <div className="ysc-cta">
            <h2>Prêt à rejoindre le club ?</h2>
            <p>Tous niveaux acceptés · Encadrement professionnel · Stade de Kégué, Lomé</p>
            <div className="ysc-cta-actions">
              <Link className="btn btn-primary" to="/rejoindre#registration-form">
                S&apos;inscrire maintenant
              </Link>
              <Link className="btn-outline-white" to="/entrainements">
                Voir les entraînements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;