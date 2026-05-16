import React from "react";

const PageHeader = ({ title, subtitle }) => (
  <div className="section-header">
    <h2 className="page-title">{title}</h2>
    {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
  </div>
);

export const JoinClubPage = () => (
  <section className="section">
    <PageHeader
      title="Rejoindre le club"
      subtitle="Inscriptions digitalisées et création de compte membre."
    />
    <div className="wide" style={{ maxWidth: "680px" }}>
      <article className="card">
        <h3 className="centered-card-title">Formulaire d&apos;inscription</h3>
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

    <div className="section-header" style={{ marginTop: "4rem" }}>
      <h2 className="page-title">Cours privés</h2>
      <p className="page-subtitle">Séances personnalisées pour enfants et adultes, en individuel ou petit groupe.</p>
    </div>

    <div className="grid two-columns">
      <article className="card">
        <h3>Objectifs</h3>
        <ul>
          <li>Progression technique accélérée</li>
          <li>Programme sur mesure selon l&apos;âge et le niveau</li>
          <li>Préparation physique et mentale ciblée</li>
        </ul>
      </article>
      <article className="card">
        <h3>Modalités</h3>
        <ul>
          <li>À domicile ou en extérieur</li>
          <li>Encadrement professionnel</li>
          <li>Contact rapide : +228 99 67 01 86</li>
        </ul>
      </article>
    </div>

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
