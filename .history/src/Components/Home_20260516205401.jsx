import { Link } from "react-router-dom";
import fitnessDisciplineImage from "url:../images/474394443_609527335360011_3887746446676892278_n.jpg";
import gymDisciplineImage from "url:../images/480777236_636877472624997_71086379626942907_n.jpg";
import boxeDisciplineImage from "url:../images/home-boxe.png";
import heroVideoOne from "url:../images/WhatsApp Video 2026-05-16 at 13.55.02.mp4";
import heroVideoTwo from "url:../images/WhatsApp Video 2026-05-16 at 13.56.37.mp4";
import heroVideoThree from "url:../images/WhatsApp Video 2026-05-16 at 14.02.58.mp4";

/* ── données statiques ── */
const disciplines = [
  {
    num: "01",
    title: "Gymnastique",
    desc: "Notre discipline phare. Souplesse, coordination et maîtrise corporelle. Coachs certifiés FIG.",
    to: "/entrainements",
    image: gymDisciplineImage,
    imageAlt: "Groupe d'enfants en entraînement de gymnastique au sol",
  },
  {
    num: "02",
    title: "Boxe",
    desc: "Condition physique, discipline et maîtrise de soi. Encadrée par des spécialistes en sports de combat.",
    to: "/entrainements",
    image: boxeDisciplineImage,
    imageAlt: "Entraînement de boxe avec sac de frappe",
  },
  {
    num: "03",
    title: "Fitness & Cross Training",
    desc: "Remise en forme et renforcement musculaire. Accessible à tous les niveaux, adultes et jeunes.",
    to: "/entrainements",
    image: fitnessDisciplineImage,
    imageAlt: "Séance de fitness et cross training",
  },
];

const coaches = [
  {
    title: "Certifiés FIG",
    desc: "Entraîneurs certifiés par la Fédération Internationale de Gymnastique.",
  },
  {
    title: "Diplômés STAPS",
    desc: "Professionnels en Sciences et Techniques des Activités Physiques et Sportives.",
  },
  {
    title: "Préparation physique",
    desc: "Spécialistes en préparation physique et sports de combat.",
  },
];

const horaires = [
  { who: "12 ans et plus", time: "08h – 10h" },
  { who: "11 ans et moins", time: "10h – 12h" },
  { who: "Adultes", time: "10h30 – 11h30" },
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

const heroVideos = [heroVideoOne, heroVideoTwo, heroVideoThree];

/* ══════════════════════════════════════
   Styles scoped — n'écrasent pas index.css
   ══════════════════════════════════════ */
const scoped = `
  /* Hero */
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
    0%,
    29% { opacity: 1; }
    33%,
    100% { opacity: 0; }
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
  /* Discipline cards */
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
  .ysc-disc-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.75rem;
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

  /* Infos table */
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
  .ysc-tarif-link {
    display: inline-block;
    margin-top: 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #2f6fb2;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .ysc-tarif-link:hover { text-decoration: underline; }

  /* Coach cards */
  .ysc-coach-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.5rem 1.25rem;
    box-shadow: 0 8px 24px rgba(13,45,84,0.12);
    text-align: center;
  }
  .ysc-coach-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #eaf2fc;
    border: 2px solid #c9dcf2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0.85rem;
    font-size: 1.4rem;
  }
  .ysc-coach-card h3 { font-size: 0.95rem; font-weight: 700; color: #1f4f8a; margin-bottom: 4px; }
  .ysc-coach-card p  { font-size: 0.82rem; color: #355274; line-height: 1.5; margin: 0; }

  /* Social */
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

  /* CTA */
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
  }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); }

  /* Responsive */
  @media (max-width: 768px) {
    .ysc-hero {
      min-height: 100vh;
      margin-top: -65px;
      padding: calc(5.5rem + 65px) 0.85rem 2.5rem;
    }
    .ysc-hero-videos {
      display: block;
    }
    .ysc-hero-video-slot {
      position: absolute;
      inset: 0;
      opacity: 0;
      animation: yscHeroVideoFade 18s infinite;
    }
    .ysc-hero-video-slot:nth-child(1) { animation-delay: 0s; }
    .ysc-hero-video-slot:nth-child(2) { animation-delay: 6s; }
    .ysc-hero-video-slot:nth-child(3) { animation-delay: 12s; }
    .ysc-hero-eyebrow {
      letter-spacing: 0.08rem;
      font-size: 0.76rem;
    }
    .ysc-social-inner { flex-direction: column; gap: 1rem; }
    .ysc-social-stat { width: 100%; }
    .ysc-cta { border-radius: 12px; padding: 2.5rem 1rem; }
  }
  @media (max-width: 640px) {
    .ysc-info-table tr {
      display: block;
      padding: 0.45rem 0;
    }
    .ysc-info-table td {
      display: block;
      padding: 0.15rem 0.2rem;
    }
    .ysc-info-table td:first-child {
      width: 100%;
    }
    .ysc-info-table td:last-child {
      text-align: left;
      padding-top: 0;
    }
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
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/rejoindre">
              S&apos;inscrire maintenant
            </Link>
            <Link className="btn btn-outline" to="/a-propos">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* ══ DISCIPLINES ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Nos disciplines</h2>
          <p>
            Trois activités complémentaires pour tous les profils et tous les niveaux, encadrées par
            des professionnels qualifiés.
          </p>
        </div>
        <div className="grid three-columns">
          {disciplines.map((d) => (
            <article className="ysc-disc-card" key={d.num}>
              <span className="ysc-disc-num" aria-hidden="true">
                {d.num}
              </span>
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

      {/* ══ INFOS PRATIQUES ══ */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Informations pratiques</h2>
          <p>Retrouvez-nous au Stade de Kégué, Lomé. Tous niveaux acceptés.</p>
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

      {/* ══ MISSION ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Notre mission</h2>
          <p>
            Le YSC accompagne les jeunes dans leur développement physique, mental et social. Il ne
            forme pas uniquement des sportifs, mais participe à la construction de jeunes
            responsables et ambitieux.
          </p>
        </div>
      </section>

      {/* ══ ENCADREMENT ══ */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Un encadrement qualifié</h2>
          <p>
            Chaque séance est animée par des professionnels certifiés et adaptée à l&apos;âge et au
            niveau des participants.
          </p>
        </div>
        <div className="grid three-columns">
          {coaches.map((c) => (
            <div className="ysc-coach-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
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
                    <span className="ysc-tag" key={t}>
                      {t}
                    </span>
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
      <section className="section">
        <div className="wide">
          <div className="ysc-cta">
            <h2>Prêt à rejoindre le club ?</h2>
            <p>Tous niveaux acceptés · Encadrement professionnel · Stade de Kégué, Lomé</p>
            <div className="ysc-cta-actions">
              <Link className="btn btn-primary" to="/rejoindre">
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
