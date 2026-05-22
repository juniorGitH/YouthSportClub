import React from "react";
import { Link } from "react-router-dom";
import historyTeamImage from "../images/WhatsApp Image 2026-05-16 at 16.18.39.jpeg";
import figCertifiedImage from "../images/WhatsApp Image 2026-05-16 at 16.12.14 (1).jpeg";
import stapsImageOne from "../images/WhatsApp Image 2026-05-19 at 11.58.31.jpeg";
import stapsImageTwo from "../images/WhatsApp Image 2026-05-19 at 12.32.39.jpeg";
import combatImageOne from "../images/WhatsApp Image 2026-04-10 at 22.00.43 (1)-Bswh1-OT.jpeg";
import combatImageTwo from "../images/WhatsApp Image 2026-05-22 at 15.06.55.jpeg";
import combatImageThree from "../images/WhatsApp Image 2026-05-22 at 15.07.50.jpeg";
import prepImage from "../images/WhatsApp Image 2026-05-22 at 15.20.21 (1).jpeg";

/* ── données ── */
const palmares = [
  { label: "Trophées de meilleur club", detail: "Classé 1er club de gymnastique au Togo depuis sa création" },
  { label: "Médailles individuelles", detail: "Nombreuses distinctions décernées à nos athlètes en compétition" },
  { label: "Culture d'excellence", detail: "Encadrement rigoureux axé sur la performance et la régularité" },
];

const axes = [
  {
    num: "01",
    title: "Axe Sport & Bien-être",
    desc: "Accueillir des jeunes de tous niveaux et leur faire découvrir les bienfaits du sport sur leur corps et leur mental.",
    disciplines: ["Gymnastique", "Boxe", "Fitness & Cross Training"],
  },
  {
    num: "02",
    title: "Axe Excellence",
    desc: "Détecter les talents et les préparer aux compétitions régionales, nationales et internationales.",
    disciplines: ["Préparation compétitive", "Suivi individualisé", "Stages et regroupements"],
  },
];

const coaches = [
  {
    title: "Certifiés FIG",
    detail: "Fédération Internationale de Gymnastique",
    image: figCertifiedImage,
    imageAlt: "Coachs certifiés FIG avec attestations de participation",
  },
  {
    title: "Diplômés STAPS",
    detail: "Sciences et Techniques des Activités Physiques et Sportives",
    images: [
      { src: stapsImageOne, alt: "Diplômés STAPS - remise de diplôme" },
      { src: stapsImageTwo, alt: "Diplômés STAPS - présentation du diplôme" },
    ],
  },
  {
    title: "Sports de combat",
    detail: "Spécialistes en boxe et préparation physique",
    images: [
      { src: combatImageOne, alt: "Athlète de sports de combat en compétition" },
      { src: combatImageTwo, alt: "Champion en sports de combat avec ceinture" },
      { src: combatImageThree, alt: "Podium et récompenses en sports de combat" },
    ],
  },
  {
    title: "Préparation physique",
    detail: "Coaches en renforcement musculaire et fitness",
    image: prepImage,
    imageAlt: "Coach en préparation physique et renforcement musculaire",
  },
];

const social = [
  { label: "Bourses partielles",            desc: "Réduction significative des frais d'adhésion pour les familles à revenus modestes." },
  { label: "Bourses totales",               desc: "Prise en charge complète pour les jeunes talents identifiés sans ressources suffisantes." },
  { label: "Détection des talents",         desc: "Programme actif de repérage des jeunes prometteurs dans les quartiers de Lomé." },
  { label: "Accompagnement personnalisé",   desc: "Suivi humain et pédagogique au-delà du cadre sportif pour chaque enfant accompagné." },
  { label: "Réduction fratrie",          desc: "Tarifs préférentiels à partir de 3 enfants d'une même famille inscrits au club." },
];

const timeline = [
  { year: "2022", event: "Création du Youth Sports Club à Lomé" },
  { year: "2022", event: "Premières séances de gymnastique au Stade de Kégué" },
  { year: "2023", event: "1er titre de meilleur club aux compétitions nationales" },
  { year: "2023", event: "Lancement du programme de bourses sportives" },
  { year: "2024", event: "Ouverture des disciplines Boxe et Fitness" },
  { year: "2024", event: "Mise en place de l'axe Excellence et détection de talents" },
];

const scoped = `
  /* ── Hero About ── */
  .about-hero {
    background: linear-gradient(120deg, #07152d, #102a50 60%, #113766);
    padding: 5rem 1rem 3rem;
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .about-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 70% 30%, rgba(239,125,34,0.2), transparent 45%);
    pointer-events: none;
  }
  .about-hero-eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    color: #f8c15a;
    margin-bottom: 0.9rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .about-hero-eyebrow::before,
  .about-hero-eyebrow::after {
    content: '';
    flex: 0 0 30px;
    height: 1px;
    background: #f8c15a;
    opacity: 0.5;
  }
  .about-hero h1 {
    font-size: clamp(1.9rem, 5vw, 3.2rem);
    font-weight: 800;
    margin-bottom: 1rem;
    position: relative;
    color: #fff;
  }
  .about-hero-sub {
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    color: #cedcf7;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.7;
    position: relative;
  }
  .about-hero-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    position: relative;
  }
  .about-chip {
    font-size: 0.78rem;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.25);
    color: #fff;
    background: rgba(255,255,255,0.09);
  }

  /* ── Stats ── */
  .about-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  .about-stat {
    background: #fff;
    border-radius: 14px;
    padding: 1.3rem 0.75rem;
    text-align: center;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
  }
  .about-stat-num {
    display: block;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 800;
    color: #ef7d22;
    line-height: 1.1;
  }
  .about-stat-label {
    display: block;
    font-size: 0.8rem;
    color: #8b592f;
    margin-top: 4px;
  }

  /* ── Intro with team image ── */
  .about-intro-layout {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1.5rem;
    align-items: start;
  }
  .about-intro-text {
    font-size: 0.95rem;
    color: #6c4622;
    line-height: 1.8;
  }
  .about-team-image-wrap {
    background: #fff;
    border-radius: 14px;
    padding: 0.75rem;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
  }
  .about-team-image {
    display: block;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    max-height: 640px;
  }

  /* ── Timeline ── */
  .about-timeline {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    padding-left: 2rem;
  }
  .about-timeline::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #ef7d22, #f2cfac);
    border-radius: 2px;
  }
  .about-tl-item {
    position: relative;
    margin-bottom: 1.25rem;
    padding-left: 1rem;
  }
  .about-tl-item:last-child { margin-bottom: 0; }
  .about-tl-item::before {
    content: '';
    position: absolute;
    left: -1.68rem;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ef7d22;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #ef7d22;
  }
  .about-tl-year {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ef7d22;
    margin-bottom: 2px;
  }
  .about-tl-event {
    font-size: 0.9rem;
    color: #6c4622;
    line-height: 1.5;
  }

  /* ── Palmarès ── */
  .about-palmares-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.35rem 1.25rem;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .about-palmares-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
    line-height: 1;
  }
  .about-palmares-card h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #9b4708;
    margin-bottom: 3px;
  }
  .about-palmares-card p {
    font-size: 0.83rem;
    color: #6c4622;
    line-height: 1.5;
    margin: 0;
  }

  /* ── Valeurs ── */
  .about-valeur-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.5rem 1.25rem;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
    border-top: 3px solid #ef7d22;
  }
  .about-valeur-icon {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 0.65rem;
  }
  .about-valeur-card h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #9b4708;
    margin-bottom: 0.4rem;
  }
  .about-valeur-card p {
    font-size: 0.85rem;
    color: #6c4622;
    line-height: 1.6;
    margin: 0;
  }

  /* ── Axes ── */
  .about-axe-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.75rem 1.5rem;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
    position: relative;
    overflow: hidden;
  }
  .about-axe-num {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    font-size: 4rem;
    font-weight: 800;
    color: #fff1dd;
    line-height: 1;
    user-select: none;
  }
  .about-axe-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #9b4708;
    margin-bottom: 0.5rem;
  }
  .about-axe-card > p {
    font-size: 0.88rem;
    color: #6c4622;
    line-height: 1.65;
    margin-bottom: 1rem;
  }
  .about-axe-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .about-axe-tag {
    font-size: 0.78rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid #f2cfac;
    color: #8a4a17;
    background: #fff8ef;
  }

  /* ── Coaches ── */
  .about-coach-grid {
    align-items: stretch;
  }
  .about-coach-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.4rem 1.25rem;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    height: 100%;
    overflow: hidden;
  }
  .about-coach-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0;
    border: 1px solid #f2cfac;
  }
  .about-coach-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.6rem;
    margin-bottom: 0;
  }
  .about-coach-gallery-image {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #f2cfac;
  }
  .about-coach-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #fff1dd;
    border: 2px solid #f2cfac;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0.85rem;
    font-size: 1.5rem;
  }
  .about-coach-card h3 { font-size: 0.95rem; font-weight: 700; color: #9b4708; margin-bottom: 3px; }
  .about-coach-card p  { font-size: 0.8rem; color: #6c4622; line-height: 1.45; margin: 0; }

  /* ── Social ── */
  .about-social-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.4rem 1.25rem;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .about-social-icon {
    font-size: 1.6rem;
    flex-shrink: 0;
    line-height: 1;
  }
  .about-social-card h3 { font-size: 0.9rem; font-weight: 700; color: #9b4708; margin-bottom: 3px; }
  .about-social-card p  { font-size: 0.82rem; color: #6c4622; line-height: 1.5; margin: 0; }

  /* ── Contact ── */
  .about-contact-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  .about-contact-card {
    background: #fff;
    border-radius: 14px;
    padding: 1.5rem 1.25rem;
    box-shadow: 0 8px 24px rgba(165,85,20,0.10);
    text-align: center;
  }
  .about-contact-card .about-contact-icon {
    font-size: 1.8rem;
    display: block;
    margin-bottom: 0.65rem;
  }
  .about-contact-card h3 { font-size: 0.95rem; font-weight: 700; color: #9b4708; margin-bottom: 0.4rem; }
  .about-contact-card p  { font-size: 0.85rem; color: #6c4622; line-height: 1.55; margin: 0; }
  .about-contact-card a  { color: #ef7d22; font-weight: 600; }

  /* ── CTA ── */
  .about-cta {
    background: linear-gradient(120deg, #07152d, #102a50 60%, #113766);
    border-radius: 16px;
    padding: 3rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .about-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 75% 25%, rgba(239,125,34,0.2), transparent 40%);
    pointer-events: none;
  }
  .about-cta h2 { font-size: clamp(1.4rem, 3.5vw, 2.2rem); font-weight: 800; color: #fff; margin-bottom: 0.6rem; position: relative; }
  .about-cta p  { font-size: 0.92rem; color: #cedcf7; margin-bottom: 1.5rem; position: relative; }
  .about-cta-actions { display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-outline-white {
    display: inline-block;
    padding: 0.75rem 1.2rem;
    border-radius: 999px;
    font-weight: 700;
    font-family: inherit;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.35);
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); }

  /* ── Responsive ── */
  @media (max-width: 1120px) {
    .about-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .about-contact-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .about-intro-layout { grid-template-columns: 1fr; }
    .about-team-image { max-height: 520px; }
  }
  @media (max-width: 768px) {
    .about-hero { padding: 4.5rem 0.85rem 2.5rem; }
    .about-cta { padding: 2.5rem 1rem; border-radius: 12px; }
    .about-contact-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 520px) {
    .about-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .about-cta-actions { flex-direction: column; align-items: stretch; }
    .about-cta-actions .btn,
    .about-cta-actions .btn-outline-white { text-align: center; }
  }
`;

const About = () => {
  return (
    <>
      <style>{scoped}</style>

      {/* ══ PRÉSENTATION ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Le Youth Sports Club (YSC) est une association sportive basée à
            Lomé, fondée en 2022. Depuis sa création, le club s&apos;est
            imposé comme une référence nationale, notamment en gymnastique, en
            se classant régulièrement parmi les meilleurs clubs lors des
            compétitions et en remportant de nombreux trophées.
          </p>
        </div>
        <div className="about-intro-layout">
          <p className="about-intro-text">
            Au-delà de la performance sportive, le Youth Sports Club s&apos;inscrit dans une
            démarche sociale visant à favoriser l&apos;accès au sport pour tous, notamment à
            travers des dispositifs de bourses et d&apos;accompagnement des jeunes issus de milieux
            modestes. Le club considère le sport comme un puissant outil d&apos;éducation,
            d&apos;inclusion et de transformation sociale.
          </p>
          <div className="about-team-image-wrap">
            <img
              src={historyTeamImage}
              alt="Équipe du Youth Sports Club"
              className="about-team-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ══ PALMARÈS ══ */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Un club performant</h2>
          <p>
            Depuis sa création, le YSC se classe régulièrement parmi les
            meilleurs clubs lors des compétitions nationales.
          </p>
        </div>
        <div className="grid three-columns">
          {palmares.map((p) => (
            <div className="about-palmares-card" key={p.label}>
              <div>
                <h3>{p.label}</h3>
                <p>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Notre histoire</h2>
          <p>Les grandes étapes du Youth Sports Club depuis sa fondation.</p>
        </div>
        <div className="about-timeline">
          {timeline.map((t, i) => (
            <div className="about-tl-item" key={i}>
              <div className="about-tl-year">{t.year}</div>
              <div className="about-tl-event">{t.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ AXES ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Nos axes de développement</h2>
          <p>Le club s&apos;organise autour de deux axes complémentaires pour couvrir tous les profils.</p>
        </div>
        <div className="grid two-columns about-coach-grid">
          {axes.map((a) => (
            <div className="about-axe-card" key={a.num}>
              <span className="about-axe-num" aria-hidden="true">{a.num}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <div className="about-axe-tags">
                {a.disciplines.map((d) => (
                  <span className="about-axe-tag" key={d}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ENCADREMENT ══ */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Un encadrement qualifié</h2>
          <p>
            Chaque séance est animée par des professionnels certifiés et
            adaptée à l&apos;âge et au niveau des participants.
          </p>
        </div>
        <div className="grid two-columns">
          {coaches.map((c) => (
            <div className="about-coach-card" key={c.title}>
              {c.images ? (
                <div className="about-coach-gallery">
                  {c.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt || c.title}
                      className="about-coach-gallery-image"
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                c.image && (
                  <img
                    src={c.image}
                    alt={c.imageAlt || c.title}
                    className="about-coach-image"
                    loading="lazy"
                  />
                )
              )}
              <h3>{c.title}</h3>
              <p>{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ENGAGEMENT SOCIAL ══ */}
      <section className="section">
        <div className="section-header">
          <h2>Engagement social</h2>
          <p>
            Le YSC s&apos;engage activement pour l&apos;inclusion et
            l&apos;accessibilité du sport. Des dispositifs concrets
            accompagnent les jeunes issus de milieux modestes.
          </p>
        </div>
        <div className="grid two-columns">
          {social.map((s) => (
            <div className="about-social-card" key={s.label}>
              <div>
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Nous contacter</h2>
          <p>Une question, un renseignement ? Notre équipe vous répond rapidement.</p>
        </div>
        <div className="about-contact-grid">
          <div className="about-contact-card">
            <h3>Adresse</h3>
            <p>Stade de Kégué<br />Lomé, Togo</p>
          </div>
          <div className="about-contact-card">
            <h3>Téléphone</h3>
            <p>
              <a href="tel:+22891534885">+228 91 53 48 85</a>
            </p>
          </div>
          <div className="about-contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:youthsportsclub.togo@gmail.com">
                youthsportsclub.togo@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section">
        <div className="wide">
          <div className="about-cta">
            <h2>Rejoignez le Youth Sports Club</h2>
            <p>
              Tous niveaux acceptés · Encadrement professionnel · Stade de
              Kégué, Lomé
            </p>
            <div className="about-cta-actions">
              <Link className="btn btn-primary" to="/rejoindre">
                S&apos;inscrire maintenant
              </Link>
              <Link className="btn-outline-white" to="/rejoindre">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;