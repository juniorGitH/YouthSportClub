import React from "react";
// Images and media used by the Join Club and Private Training sections
import joinImage from "../images/Screenshot 2026-05-17 125026.png";
import videoSrc from "../images/AQN_pIQXDVtaRZZ3cDoQcPjOxfLt0fme5jJLR81JxLCzSsjumCuGmcy6FeF4JXXmoqId-T1e0bctUgICpSJJm_I_xB9bMpSaSd6icSpcmQ.mp4";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import galleryA from "../images/472902518_601111642868247_3421823822486160063_n.jpg";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import testimonialImg from "../images/WhatsApp Image 2026-05-16 at 17.46.33.jpeg";

const PageHeader = ({ title, subtitle }) => (
  <div className="section-header">
    <h2 className="page-title">{title}</h2>
    {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
  </div>
);

export const JoinClubPage = () => (
  <section className="section join-club-section">
    {/* Page header for the whole join area */}
    <PageHeader
      title="Rejoindre le club"
      subtitle="Inscriptions digitalisées et création de compte membre."
    />

    {/* Join layout: image + form. Desktop: side-by-side. Mobile: stacked. */}
    <div className="join-layout">
      <div className="join-image">
        {/* Decorative immersive image */}
        <img src={joinImage} alt="Rejoindre le Youth Sports Club" />
      </div>

      <div className="join-content">
        <h3>Rejoignez le Youth Sports Club</h3>
        <p>
          Offrez à votre enfant ou à vous-même un encadrement sportif de qualité
          avec des coachs expérimentés, un suivi personnalisé et une communauté
          engagée.
        </p>

        {/* Form card: keep same inputs but restyled */}
        <article className="card join-form-card">
          <h3 className="centered-card-title">Formulaire d'inscription</h3>
          {/* Form fields kept exactly as requested */}
          <form className="join-form">
            <input type="text" placeholder="Nom complet du membre" required />
            <input type="number" placeholder="Âge" min="3" required />
            <input type="text" placeholder="Discipline souhaitée" required />
            <input type="tel" placeholder="Téléphone parent / membre" required />
            <input type="email" placeholder="Email du compte membre" required />
            <button type="submit" className="btn btn-primary">
              Créer le compte membre
            </button>
          </form>
        </article>
      </div>
    </div>

    {/* PRIVATE TRAINING SECTION - redesigned to follow new UX order */}
    <section className="private-training-showcase">
      <div className="section-header" style={{ marginTop: "3rem" }}>
        <h2 className="page-title">Cours privés</h2>
        <p className="page-subtitle">Séances personnalisées pour enfants et adultes.</p>
      </div>

      {/* Video hero with subtle overlay */}
      <div className="video-hero">
        <video className="hero-video" src={videoSrc} autoPlay muted loop playsInline />
        <div className="video-overlay">
          <h3>Développez votre potentiel</h3>
          <p>Coaching individuel et préparation personnalisée pour tous les niveaux.</p>
        </div>
      </div>

      {/* Short centered presentation text */}
      <p className="centered-intro">Des séances privées adaptées aux objectifs, au niveau et au rythme de chaque athlète.</p>

      {/* Gallery: large left image + two stacked right images */}
      <div className="private-gallery">
        <div className="gallery-large">
          <img src={galleryLarge} alt="Séance privée" />
        </div>
        <div className="gallery-stack">
          <img src={galleryA} alt="Galerie 1" />
          <img src={galleryB} alt="Galerie 2" />
        </div>
      </div>

      {/* Improved cards for Objectives / Modalities */}
      <div className="grid two-columns" style={{ marginTop: "2rem" }}>
        <article className="card card-elevated">
          <h3>Objectifs</h3>
          <ul>
            <li>Progression technique accélérée</li>
            <li>Programme sur mesure selon l'âge et le niveau</li>
            <li>Préparation physique et mentale ciblée</li>
          </ul>
        </article>
        <article className="card card-elevated">
          <h3>Modalités</h3>
          <ul>
            <li>À domicile ou en extérieur</li>
            <li>Encadrement professionnel</li>
            <li>Contact rapide : +228 99 67 01 86</li>
          </ul>
        </article>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h3>Témoignages</h3>
        <div className="testimonial-card">
          <img src={testimonialImg} alt="Cora et famille" className="avatar" />
          <blockquote>
            Merci pour tout ce que vous avez pour notre famille, on est tellement contents d’avoir pu commencer cette aventure de YSC depuis les premiers jours. Vous êtes une équipe exceptionnelle avec beaucoup de potentiel et opportunité. N’arrêtez pas de suivre vos rêves, vous avez une passion, vision, et expertise unique ! Nous n’allons jamais vous oublier.
          </blockquote>
          <cite>Cora-CW, Piper-Beckett et Mosa</cite>
        </div>
      </div>

      {/* Final CTA centered */}
      <div className="private-cta">
        <button className="btn btn-primary">Réserver une séance privée</button>
      </div>
    </section>

  </section>
);

export const EventsPage = () => (
  <section className="section section-alt">
    <PageHeader
      title="Événements"
      subtitle="Compétitions et activités du club tout au long de l'année."
    />
    <article className="card wide">
      <ul>
        <li>Journées portes ouvertes et démonstrations</li>
        <li>Compétitions régionales et nationales</li>
        <li>Stages de perfectionnement pendant les vacances</li>
      </ul>
    </article>
  </section>
);

export const ResultsPage = () => (
  <section className="section">
    <PageHeader
      title="Résultats"
      subtitle="Le club est régulièrement classé meilleur club avec de nombreux trophées."
    />
    <article className="card wide">
      <p>
        Le Youth Sports Club confirme sa régularité par des distinctions
        collectives et individuelles, reflet d&apos;un encadrement rigoureux.
      </p>
    </article>
  </section>
);

export const TrainingSessionsPage = () => (
  <section className="section section-alt">
    <PageHeader
      title="Nos séances d'entraînement"
      subtitle="Découvrez nos programmes d'entraînement intensifs et adaptés pour tous les niveaux."
    />
    <div className="grid two-columns">
      <article className="card">
        <h3>Programmes Jeunes</h3>
        <p>
          Axés sur les fondamentaux techniques, le développement de la motricité
          et l&apos;esprit d&apos;équipe.
        </p>
        <ul>
          <li>Initiation sportive</li>
          <li>Perfectionnement technique</li>
          <li>Préparation aux premières compétitions</li>
        </ul>
      </article>

      <article className="card">
        <h3>Programmes Élite</h3>
        <p>
          Pour les athlètes confirmés visant l&apos;excellence nationale et
          internationale.
        </p>
        <ul>
          <li>Préparation physique spécifique</li>
          <li>Analyse vidéo et tactique</li>
          <li>Suivi nutritionnel et mental</li>
        </ul>
      </article>

      <article className="card">
        <h3>Programmes Adultes & Loisirs</h3>
        <p>
          Sport bien-être, remise en forme et pratique conviviale.
        </p>
        <ul>
          <li>Cross-training et fitness</li>
          <li>Apprentissage technique tardif</li>
          <li>Séances de maintien de la forme</li>
        </ul>
      </article>

      <article className="card">
        <h3>Horaires des séances</h3>
        <ul>
          <li><strong>Lundi - Mercredi - Vendredi :</strong> 16h - 19h (Jeunes & Élite)</li>
          <li><strong>Samedi :</strong> 08h - 12h (Tous niveaux)</li>
          <li><strong>Dimanche :</strong> Séances spécifiques sur rendez-vous</li>
        </ul>
      </article>
    </div>
  </section>
);

export const PartnersPage = () => (
  <section className="section">
    <PageHeader title="Partenaires" subtitle="Devenir partenaire du Youth Sports Club." />
    <div className="grid three-columns">
      <article className="card">
        <h3>Visibilité</h3>
        <p>Associez votre image à un club reconnu pour ses résultats.</p>
      </article>
      <article className="card">
        <h3>Impact social</h3>
        <p>Soutenez l&apos;accès au sport pour les jeunes de milieux modestes.</p>
      </article>
      <article className="card">
        <h3>Collaboration</h3>
        <p>Construisons des actions durables pour le sport et la jeunesse.</p>
      </article>
    </div>
  </section>
);
