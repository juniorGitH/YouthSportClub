import { Link } from "react-router-dom";

// ─── Assets ────────────────────────────────────────────────────────────────
import videoSrc from "url:../images/private-training.mp4";
import galleryA from "../images/472902518_601111642868247_3421823822486160063_n.jpg";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import joinImage from "../images/Screenshot 2026-05-17 125026.png";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import testimonialImg from "../images/WhatsApp Image 2026-05-16 at 17.46.33.jpeg";

// ─── Sub-components ─────────────────────────────────────────────────────────

const Badge = ({ children }) => <span className="ysc-badge">{children}</span>;

const SectionLabel = ({ children }) => <p className="ysc-section-label">{children}</p>;

const FeatureRow = ({ text }) => (
  <li className="ysc-feature-row">
    <span>{text}</span>
  </li>
);

// ─── Scoped Styles ─────────────────────────────────────────────────────────

const scoped = `
  /* ── Variables & Utilities ── */
  :root {
    --ysc-primary: #2f6fb2;
    --ysc-primary-dark: #1d4f86;
    --ysc-accent: #f8c15a;
    --ysc-text: #2e4d70;
    --ysc-text-light: #4a6b90;
    --ysc-bg-alt: #f3f8ff;
    --ysc-white: #ffffff;
    --ysc-shadow: 0 8px 30px rgba(13, 45, 84, 0.08);
    --ysc-radius: 16px;
  }

  /* ── General ── */
  .ysc-badge {
    display: inline-block;
    padding: 4px 12px;
    background: #eaf2fc;
    color: var(--ysc-primary);
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  .ysc-section-label {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--ysc-primary);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 0.75rem;
  }

  .ysc-feature-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--ysc-text);
    margin-bottom: 0.5rem;
  }

  /* ── 1. Hero Split ── */
  .ysc-join-hero {
    display: flex;
    min-height: 80vh;
    background: var(--ysc-white);
    overflow: hidden;
  }

  .ysc-join-hero__image-col {
    flex: 1;
    position: relative;
    display: block;
  }

  .ysc-join-hero__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ysc-chip {
    position: absolute;
    background: var(--ysc-white);
    padding: 10px 18px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.85rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    color: var(--ysc-primary-dark);
    z-index: 2;
    white-space: nowrap;
  }

  .ysc-chip--topleft { top: 10%; left: 5%; }
  .ysc-chip--bottomright { bottom: 10%; right: 5%; }

  .ysc-join-hero__content-col {
    flex: 1;
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(135deg, #ffffff 0%, #f9fbff 100%);
  }

  .ysc-join-hero__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: var(--ysc-primary-dark);
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .ysc-join-hero__title em {
    font-style: italic;
    color: var(--ysc-primary);
  }

  .ysc-join-hero__desc {
    font-size: 1.15rem;
    color: var(--ysc-text-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 500px;
  }

  .ysc-qualif-block {
    margin-bottom: 2rem;
    padding: 1.25rem;
    background: #f8fbff;
    border-radius: 12px;
    border: 1px solid #e1ecf8;
  }

  .ysc-qualif-text {
    font-size: 0.9rem;
    color: var(--ysc-text);
    line-height: 1.5;
    margin: 0.5rem 0 0;
  }

  .ysc-benefits-strip {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* ── 2. Form Section ── */
  .ysc-form-section {
    padding: 5rem 1rem;
    background: var(--ysc-bg-alt);
  }

  .ysc-form-section__inner {
    max-width: 800px;
    margin: 0 auto;
  }

  .ysc-form-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .ysc-form-heading {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 0.5rem;
  }

  .ysc-form-subheading {
    color: var(--ysc-text-light);
    font-size: 1.1rem;
  }

  .ysc-form {
    background: var(--ysc-white);
    padding: 3rem;
    border-radius: var(--ysc-radius);
    box-shadow: var(--ysc-shadow);
  }

  .ysc-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .ysc-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .ysc-field--full { grid-column: span 2; }

  .ysc-field label {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--ysc-primary-dark);
  }

  .ysc-field input {
    padding: 0.85rem 1rem;
    border: 1px solid #d3e2f3;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: border-color 0.2s;
  }

  .ysc-field input:focus {
    outline: none;
    border-color: var(--ysc-primary);
  }

  .ysc-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    border-radius: 999px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    text-decoration: none;
  }

  .ysc-btn--primary {
    background: var(--ysc-primary);
    color: var(--ysc-white);
  }

  .ysc-btn--primary:hover {
    background: var(--ysc-primary-dark);
    transform: translateY(-2px);
  }

  .ysc-btn--full { width: 100%; }

  .ysc-form-note {
    text-align: center;
    font-size: 0.8rem;
    color: var(--ysc-text-light);
    margin-top: 1.5rem;
  }

  /* ── 3. Private Section ── */
  .ysc-private {
    padding: 5rem 1rem;
    background: var(--ysc-white);
  }

  .ysc-private__intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem;
  }

  .ysc-private__title {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 800;
    color: var(--ysc-primary-dark);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .ysc-private__subtitle {
    font-size: 1.1rem;
    color: var(--ysc-text-light);
  }

  .ysc-video-hero {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto 4rem;
    aspect-ratio: 16 / 9;
    border-radius: var(--ysc-radius);
    overflow: hidden;
    box-shadow: var(--ysc-shadow);
  }

  .ysc-video-hero__vid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
  }

  .ysc-video-hero__overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        110deg,
        rgba(6, 18, 41, 0.84) 0%,
        rgba(6, 18, 41, 0.63) 45%,
        rgba(8, 24, 54, 0.86) 100%
      ),
      radial-gradient(circle at 80% 20%, rgba(61,126,196,0.26), transparent 38%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }

  .ysc-video-hero__tagline {
    color: var(--ysc-white);
    font-weight: 600;
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 700px;
    line-height: 1.5;
  }

  .ysc-private__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto 4rem;
  }

  .ysc-info-card {
    background: var(--ysc-bg-alt);
    padding: 2.5rem;
    border-radius: var(--ysc-radius);
    border: 1px solid #e1ecf8;
  }

  .ysc-info-card h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 1rem;
  }

  .ysc-info-card ul {
    padding-left: 1.15rem;
  }

  .ysc-info-card li {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: var(--ysc-text);
  }

  .ysc-tel-link {
    color: var(--ysc-primary);
    font-weight: 700;
  }

  .ysc-gallery {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto 4rem;
  }

  .ysc-gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .ysc-gallery__large { height: 450px; }
  .ysc-gallery__stack {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }

  .ysc-testimonial-wrapper {
    max-width: 900px;
    margin: 0 auto 5rem;
  }

  .ysc-testimonial {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    background: var(--ysc-white);
    padding: 3rem;
    border-radius: var(--ysc-radius);
    box-shadow: var(--ysc-shadow);
  }

  .ysc-testimonial__avatar-wrap {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--ysc-bg-alt);
  }

  .ysc-testimonial__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ysc-testimonial__stars {
    color: #f8c15a;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    display: block;
  }

  .ysc-testimonial__quote {
    font-size: 1.25rem;
    font-style: italic;
    color: var(--ysc-primary-dark);
    line-height: 1.6;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .ysc-testimonial__author {
    font-weight: 700;
    color: var(--ysc-text-light);
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
  }

  /* ── 4. Social Section ── */
  .ysc-social-section {
    padding: 5rem 1rem;
    background: #fff8ef;
    border-top: 1px solid #f2cfac;
    border-bottom: 1px solid #f2cfac;
  }
  
  .ysc-social-section__inner {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .ysc-social-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .ysc-social-heading {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 800;
    color: #9b4708;
    line-height: 1.1;
  }
  
  .ysc-social-heading span {
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    display: block;
    margin-top: 0.5rem;
    color: #ef7d22;
  }
  
  .ysc-social-content {
    background: var(--ysc-white);
    padding: 3rem;
    border-radius: var(--ysc-radius);
    box-shadow: 0 10px 40px rgba(155, 71, 8, 0.08);
  }
  
  .ysc-social-intro {
    font-size: 1.1rem;
    color: var(--ysc-text);
    line-height: 1.7;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .ysc-social-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }
  
  .ysc-social-list li {
    display: flex;
    align-items: flex-start;
    font-size: 1.05rem;
    color: var(--ysc-text);
  }
  
  .ysc-social-objective {
    padding: 1.5rem;
    background: #fff8ef;
    border-radius: 12px;
    border: 1px dashed #ef7d22;
  }
  
  .ysc-social-objective p {
    font-size: 0.95rem;
    color: #6c4622;
    margin: 0;
  }

  .ysc-private__cta {
    text-align: center;
    background: var(--ysc-primary-dark);
    padding: 4rem 2rem;
    border-radius: var(--ysc-radius);
    color: var(--ysc-white);
    max-width: 1100px;
    margin: 4rem auto 0;
    position: relative;
    overflow: hidden;
  }

  .ysc-private__cta::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05), transparent 40%);
  }

  .ysc-private__cta-text {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .ysc-private__cta-note {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.6);
    margin-top: 1rem;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .ysc-join-hero { flex-direction: column; }
    .ysc-join-hero__image-col { height: 400px; }
    .ysc-join-hero__content-col { padding: 3rem 2rem; }
    .ysc-form-grid { grid-template-columns: 1fr; }
    .ysc-field--full { grid-column: span 1; }
    .ysc-private__cards { grid-template-columns: 1fr; }
    .ysc-gallery { grid-template-columns: 1fr; }
    .ysc-gallery__large { height: 300px; }
    .ysc-testimonial { flex-direction: column; text-align: center; padding: 2rem; }
    .ysc-testimonial__avatar-wrap { width: 100px; height: 100px; }
    .ysc-social-content { padding: 2rem 1.5rem; }
  }
`;

// ─── Join Club Page ─────────────────────────────────────────────────────────

export const JoinClubPage = () => (
  <>
    <style>{scoped}</style>
    {/* ── 1. HERO SPLIT ─────────────────────────────────────────────────── */}
    <section className="ysc-join-hero">
      {/* Left: image with floating stat chips */}
      <div className="ysc-join-hero__image-col">
        <img
          src={joinImage}
          alt="Membres du Youth Sports Club à l'entraînement"
          className="ysc-join-hero__img"
        />
        {/* Floating trust chips anchored on the photo */}
        <div className="ysc-chip ysc-chip--topleft">+200 membres actifs</div>
        <div className="ysc-chip ysc-chip--bottomright">Suivi personnalisé</div>
      </div>

      {/* Right: headline + benefits + form */}
      <div className="ysc-join-hero__content-col">
        <SectionLabel>Inscriptions</SectionLabel>
        <h1 className="ysc-join-hero__title">
          Rejoignez le
          <br />
          <em>Youth Sports Club</em>
        </h1>
        <p className="ysc-join-hero__desc">
          Offrez un encadrement sportif d'excellence — un suivi pédagogique, sécurisé et adapté à
          tous les niveaux.
        </p>

        {/* Qualification Badge/Block */}
        <div className="ysc-qualif-block">
          <Badge>Encadrement Qualifié</Badge>
          <p className="ysc-qualif-text">
            Licence STAPS • Diplôme FIG Niveau 1 • Certifications boxe éducative, fitness et
            cross-training
          </p>
        </div>

        {/* Quick-benefits strip */}
        <ul className="ysc-benefits-strip" aria-label="Avantages">
          <FeatureRow text="Programme sur mesure" />
          <FeatureRow text="Progression mesurable" />
          <FeatureRow text="Communauté bienveillante" />
        </ul>
      </div>
    </section>

    {/* ── 2. REGISTRATION FORM ──────────────────────────────────────────── */}
    <section className="ysc-form-section" aria-labelledby="form-heading">
      <div className="ysc-form-section__inner">
        <div className="ysc-form-header">
          <Badge>Inscription gratuite</Badge>
          <h2 id="form-heading" className="ysc-form-heading">
            Créer votre compte membre
          </h2>
          <p className="ysc-form-subheading">
            Complétez le formulaire — notre équipe vous contacte sous 24h.
          </p>
        </div>

        <form className="ysc-form" onSubmit={(e) => e.preventDefault()}>
          <div className="ysc-form-grid">
            <div className="ysc-field">
              <label htmlFor="f-name">Nom complet du membre</label>
              <input id="f-name" type="text" placeholder="Ex : Kofi Mensah" required />
            </div>

            <div className="ysc-field">
              <label htmlFor="f-age">Âge</label>
              <input id="f-age" type="number" placeholder="Ex : 12" min="3" required />
            </div>

            <div className="ysc-field ysc-field--full">
              <label htmlFor="f-discipline">Discipline souhaitée</label>
              <input
                id="f-discipline"
                type="text"
                placeholder="Ex : Football, Basketball…"
                required
              />
            </div>

            <div className="ysc-field">
              <label htmlFor="f-phone">Téléphone parent / membre</label>
              <input id="f-phone" type="tel" placeholder="+228 90 00 00 00" required />
            </div>

            <div className="ysc-field">
              <label htmlFor="f-email">Email du compte membre</label>
              <input id="f-email" type="email" placeholder="email@exemple.com" required />
            </div>
          </div>

          <button type="submit" className="ysc-btn ysc-btn--primary ysc-btn--full">
            <span>Créer mon compte membre</span>
          </button>

          <p className="ysc-form-note">
            Vos données sont confidentielles et ne seront jamais partagées.
          </p>
        </form>
      </div>
    </section>

    {/* ── 3. PRIVATE TRAINING ───────────────────────────────────────────── */}
    <section className="ysc-private" aria-labelledby="private-heading">
      {/* 3a. Section intro */}
      <div className="ysc-private__intro">
        <SectionLabel>Cours privés</SectionLabel>
        <h2 id="private-heading" className="ysc-private__title">
          Développez votre
          <br />
          <em>plein potentiel</em>
        </h2>
        <p className="ysc-private__subtitle">
          Séances individuelles adaptées à chaque objectif, niveau et rythme de vie.
        </p>
      </div>

      {/* 3b. Video hero */}
      <div className="ysc-video-hero" aria-label="Vidéo de présentation des cours privés">
        <video className="ysc-video-hero__vid" src={videoSrc} autoPlay muted loop playsInline />
        <div className="ysc-video-hero__overlay" aria-hidden="true">
          <p className="ysc-video-hero__tagline">
            Coaching individuel · Tous niveaux · À domicile ou en extérieur
          </p>
        </div>
      </div>

      {/* 3c. Cards: Objectives + Modalities */}
      <div className="ysc-private__cards">
        <article className="ysc-info-card">
          <h3>Objectifs</h3>
          <ul>
            <li>Progression technique accélérée</li>
            <li>Programme adapté à l'âge et au niveau</li>
            <li>Préparation physique et mentale ciblée</li>
            <li>Développement de la confiance en soi</li>
          </ul>
        </article>

        <article className="ysc-info-card">
          <h3>Modalités</h3>
          <ul>
            <li>Cours privés à domicile disponibles pour toutes nos disciplines</li>
            <li>À domicile ou en extérieur selon vos préférences</li>
            <li>Encadrement par des coachs certifiés</li>
            <li>Flexibilité horaire — week-end inclus</li>
            <li>
              Contact rapide :{" "}
              <a href="tel:+22899670186" className="ysc-tel-link">
                +228 99 67 01 86
              </a>
            </li>
          </ul>
        </article>
      </div>

      {/* 3d. Photo gallery */}
      <div className="ysc-gallery" aria-label="Galerie photos des cours privés">
        <div className="ysc-gallery__large">
          <img src={galleryLarge} alt="Séance privée en action" />
        </div>
        <div className="ysc-gallery__stack">
          <img src={galleryA} alt="Entraînement individuel" />
          <img src={galleryB} alt="Coach et athlète en séance" />
        </div>
      </div>

      {/* 3e. Testimonial */}
      <div className="ysc-testimonial-wrapper" aria-label="Témoignage client">
        <figure className="ysc-testimonial">
          <div className="ysc-testimonial__avatar-wrap">
            <img
              src={testimonialImg}
              alt="Cora-CW, Piper-Beckett et Mosa"
              className="ysc-testimonial__avatar"
            />
          </div>
          <div className="ysc-testimonial__body">
            <blockquote className="ysc-testimonial__quote">
              "Merci pour tout ce que vous avez fait pour notre famille. On est tellement contents
              d'avoir commencé cette aventure avec YSC depuis les premiers jours. Vous avez une
              passion, une vision et une expertise uniques — nous n'allons jamais vous oublier."
            </blockquote>
            <figcaption className="ysc-testimonial__author">
              Cora-CW, Piper-Beckett &amp; Mosa
            </figcaption>
          </div>
        </figure>
      </div>

      {/* ── 4. SOCIAL PROGRAM ────────────────────────────────────────────── */}
      <section className="ysc-social-section" aria-labelledby="social-heading">
        <div className="ysc-social-section__inner">
          <div className="ysc-social-header">
            <SectionLabel>Engagement</SectionLabel>
            <h2 id="social-heading" className="ysc-social-heading">
              PROGRAMME SOCIAL YSC
              <br />
              <span>Le sport pour tous</span>
            </h2>
          </div>

          <div className="ysc-social-content">
            <p className="ysc-social-intro">
              Parce que le sport doit rester accessible à tous, YSC met en place un programme social
              pour soutenir les familles et accompagner les jeunes motivés par la gymnastique.
            </p>

            <ul className="ysc-social-list">
              <li>
                <span>
                  <strong>Bourse de 50 %</strong> sur la mensualité
                </span>
              </li>
              <li>
                <span>
                  <strong>Entraînement gratuit</strong> possible pour les enfants issus de familles
                  en difficulté
                </span>
              </li>
              <li>
                <span>
                  <strong>Aides spécifiques</strong> selon les besoins (transport, accompagnement)
                </span>
              </li>
            </ul>

            <div className="ysc-social-objective">
              <p>
                <strong>Objectif :</strong> permettre à chaque enfant motivé de pratiquer la
                gymnastique, quelles que soient les conditions sociales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3f. Final CTA */}
      <div className="ysc-private__cta">
        <p className="ysc-private__cta-text">Prêt à passer au niveau supérieur ?</p>
        <a href="tel:+22899670186" className="ysc-btn ysc-btn--primary">
          <span>Réserver une séance privée</span>
        </a>
        <p className="ysc-private__cta-note">
          Réponse sous 24h • Première séance découverte offerte
        </p>
      </div>
    </section>
  </>
);

const upcomingEvents = [
  {
    title: "Portes ouvertes du club",
    date: "Samedi 8 juin · 10h00",
    place: "Stade de Kégué, Lomé",
    details:
      "Découverte gratuite de la gymnastique, de la boxe et du fitness avec les coachs du club.",
  },
  {
    title: "Challenge jeunes talents",
    date: "Dimanche 23 juin · 09h00",
    place: "Complexe sportif municipal",
    details:
      "Démonstrations techniques, ateliers de progression et détection des profils à potentiel.",
  },
  {
    title: "Journée famille & sport",
    date: "Samedi 6 juillet · 15h00",
    place: "Parc sportif de Lomé",
    details:
      "Animations sportives, mini-tournois et temps d'échange avec l'équipe pédagogique.",
  },
];

const trainingPrograms = [
  {
    title: "Gymnastique",
    audience: "Enfants et adolescents",
    schedule: "Mardi, jeudi et samedi",
    focus: "Coordination, souplesse et maîtrise corporelle",
  },
  {
    title: "Boxe éducative",
    audience: "Jeunes et adultes",
    schedule: "Lundi, mercredi et vendredi",
    focus: "Condition physique, discipline et gestion de l'effort",
  },
  {
    title: "Fitness & Cross Training",
    audience: "Adultes",
    schedule: "Mardi, jeudi et samedi",
    focus: "Renforcement musculaire, cardio et mobilité",
  },
];

const clubResults = [
  { year: "2024", item: "Meilleur club formateur (district)", note: "Gymnastique" },
  { year: "2023", item: "1re place challenge interclubs", note: "Catégorie jeunes" },
  { year: "2023", item: "Finaliste coupe régionale", note: "Équipe mixte" },
  { year: "2022", item: "Lancement du pôle compétition", note: "Première saison" },
];

const partnerTypes = [
  {
    title: "Institutions sportives",
    description:
      "Collaboration avec les structures sportives locales pour l'organisation des entraînements et événements.",
  },
  {
    title: "Entreprises engagées",
    description:
      "Soutien matériel et logistique pour accompagner les jeunes athlètes dans leur progression.",
  },
  {
    title: "Partenaires sociaux",
    description:
      "Actions communes pour faciliter l'accès au sport des familles et des enfants en difficulté.",
  },
];

export const EventsPage = () => (
  <section className="section">
    <div className="section-header">
      <h2>Événements du club</h2>
      <p>
        Retrouvez les prochaines activités ouvertes aux membres, aux familles et aux futurs
        adhérents.
      </p>
    </div>

    <div className="grid three-columns">
      {upcomingEvents.map((event) => (
        <article className="card" key={event.title}>
          <h3>{event.title}</h3>
          <p>
            <strong>{event.date}</strong>
          </p>
          <p>{event.place}</p>
          <p>{event.details}</p>
        </article>
      ))}
    </div>
  </section>
);

export const TrainingSessionsPage = () => (
  <section className="section section-alt">
    <div className="section-header">
      <h2>Entraînements</h2>
      <p>
        Des programmes structurés et progressifs pour chaque niveau, avec un encadrement qualifié.
      </p>
    </div>

    <div className="grid three-columns">
      {trainingPrograms.map((program) => (
        <article className="card" key={program.title}>
          <h3>{program.title}</h3>
          <p>
            <strong>Public :</strong> {program.audience}
          </p>
          <p>
            <strong>Fréquence :</strong> {program.schedule}
          </p>
          <p>{program.focus}</p>
        </article>
      ))}
    </div>
  </section>
);

export const ResultsPage = () => (
  <section className="section">
    <div className="section-header">
      <h2>Résultats</h2>
      <p>
        Une progression continue du club et de nos athlètes grâce à un travail régulier et
        collectif.
      </p>
    </div>

    <div className="grid two-columns">
      {clubResults.map((result) => (
        <article className="card" key={`${result.year}-${result.item}`}>
          <h3>{result.item}</h3>
          <p>
            <strong>{result.year}</strong>
          </p>
          <p>{result.note}</p>
        </article>
      ))}
    </div>
  </section>
);

export const PartnersPage = () => (
  <section className="section section-alt">
    <div className="section-header">
      <h2>Partenaires</h2>
      <p>
        Le développement du club est possible grâce au soutien de partenaires institutionnels,
        économiques et sociaux.
      </p>
    </div>

    <div className="grid three-columns">
      {partnerTypes.map((partner) => (
        <article className="card" key={partner.title}>
          <h3>{partner.title}</h3>
          <p>{partner.description}</p>
        </article>
      ))}
    </div>

    <div className="wide section">
      <div className="card">
        <h3>Vous souhaitez soutenir le club ?</h3>
        <p>
          Rejoignez notre réseau de partenaires pour contribuer à la formation sportive des jeunes.
        </p>
        <Link className="btn btn-primary" to="/rejoindre">
          Devenir partenaire
        </Link>
      </div>
    </div>
  </section>
);
