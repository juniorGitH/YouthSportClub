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

const FeatureRow = ({ icon, text }) => (
  <li className="ysc-feature-row">
    <span className="ysc-feature-icon" aria-hidden="true">
      {icon}
    </span>
    <span>{text}</span>
  </li>
);

// ─── Join Club Page ─────────────────────────────────────────────────────────

export const JoinClubPage = () => (
  <>
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
        <div className="ysc-chip ysc-chip--topleft">🏆 +200 membres actifs</div>
        <div className="ysc-chip ysc-chip--bottomright">⭐ Suivi personnalisé</div>
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
          Offrez un encadrement sportif d'excellence — coachs certifiés, suivi personnalisé,
          communauté engagée.
        </p>

        {/* Quick-benefits strip */}
        <ul className="ysc-benefits-strip" aria-label="Avantages">
          <FeatureRow icon="🎯" text="Programme sur mesure" />
          <FeatureRow icon="👥" text="Encadrement professionnel" />
          <FeatureRow icon="📈" text="Progression mesurable" />
          <FeatureRow icon="🌍" text="Communauté bienveillante" />
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
            <span className="ysc-btn__arrow" aria-hidden="true">
              →
            </span>
          </button>

          <p className="ysc-form-note">
            🔒 Vos données sont confidentielles et ne seront jamais partagées.
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
          <div className="ysc-info-card__icon" aria-hidden="true">
            🎯
          </div>
          <h3>Objectifs</h3>
          <ul>
            <li>Progression technique accélérée</li>
            <li>Programme adapté à l'âge et au niveau</li>
            <li>Préparation physique et mentale ciblée</li>
            <li>Développement de la confiance en soi</li>
          </ul>
        </article>

        <article className="ysc-info-card">
          <div className="ysc-info-card__icon" aria-hidden="true">
            📋
          </div>
          <h3>Modalités</h3>
          <ul>
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
            <span className="ysc-testimonial__stars" aria-label="5 étoiles">
              ★★★★★
            </span>
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

      {/* 3f. Final CTA */}
      <div className="ysc-private__cta">
        <p className="ysc-private__cta-text">Prêt à passer au niveau supérieur ?</p>
        <a href="tel:+22899670186" className="ysc-btn ysc-btn--primary">
          <span>Réserver une séance privée</span>
          <span className="ysc-btn__arrow" aria-hidden="true">
            →
          </span>
        </a>
        <p className="ysc-private__cta-note">
          Réponse sous 24h • Première séance découverte offerte
        </p>
      </div>
    </section>
  </>
);
