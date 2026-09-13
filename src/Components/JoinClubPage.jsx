import {
  faArrowTrendUp,
  faPersonRunning,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import videoSrc from "url:../images/cours-prive.mp4";
import championImg from "../images/chamipon.jpeg";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import testimonialImg from "../images/WhatsApp Image 2026-05-16 at 17.46.33.jpeg";
import { FeatureRow, scoped } from "./Pages";

// ─── CSS supplémentaire spécifique à ce fichier ────────────────────────────
// (les styles de base viennent de Pages.jsx via <style>{scoped}</style>)

const extraScoped = `
  /* ── Hero : légende sous l'image plutôt que des badges flottants ── */
  .ysc-join-hero__caption {
    margin-top: 0.9rem;
    font-size: 0.9rem;
    color: var(--ysc-text-light);
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .ysc-join-hero__caption strong {
    color: var(--ysc-primary-dark);
    font-size: 1.15rem;
  }

  .ysc-credential {
    font-size: 0.95rem;
    color: var(--ysc-text-light);
    line-height: 1.6;
    margin-top: 0.75rem;
    max-width: 46ch;
  }

  /* ── Section "Comment inscrire votre enfant" — étapes réelles ── */
  .ysc-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin: 2.75rem 0 3rem;
  }

  .ysc-step__num {
    font-size: 2.75rem;
    font-weight: 800;
    line-height: 1;
    color: var(--ysc-primary);
    opacity: 0.35;
    margin-bottom: 0.5rem;
  }

  .ysc-step__title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ysc-primary-dark);
    margin-bottom: 0.4rem;
  }

  .ysc-step__text {
    font-size: 0.92rem;
    color: var(--ysc-text-light);
    line-height: 1.55;
  }

  .ysc-form-section__inner { max-width: 1000px; }

  .ysc-form-note {
    font-size: 0.85rem;
    color: var(--ysc-text-light);
    margin-top: 1rem;
  }

  /* ── Listes texte simples (remplacent les cartes icônes identiques) ── */
  .ysc-private__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin: 3rem 0;
    padding: 2.5rem 0;
    border-top: 1px solid #e8f0fb;
    border-bottom: 1px solid #e8f0fb;
  }

  .ysc-private__cards h3 {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 1.1rem;
  }

  .ysc-plain-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .ysc-plain-list li {
    position: relative;
    padding-left: 1.1rem;
    margin-bottom: 0.7rem;
    font-size: 0.94rem;
    color: var(--ysc-text);
    line-height: 1.5;
  }

  .ysc-plain-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 5px;
    height: 5px;
    background: var(--ysc-primary);
  }

  .ysc-info-rows {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .ysc-info-row {
    display: grid;
    grid-template-columns: 9rem 1fr;
    gap: 0.75rem;
    font-size: 0.9rem;
    padding-bottom: 0.65rem;
    border-bottom: 1px solid #eef3fa;
  }

  .ysc-info-row dt {
    color: var(--ysc-text-light);
    font-weight: 600;
  }

  .ysc-info-row dd {
    margin: 0;
    color: var(--ysc-text);
  }

  .ysc-info-row a { color: var(--ysc-primary); text-decoration: none; }
  .ysc-info-row a:hover { text-decoration: underline; }

  /* ── Témoignage : citation, pas une carte à étoiles ── */
  .ysc-pullquote {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1.75rem;
    align-items: center;
    margin: 3.5rem 0 0;
    padding-top: 2.5rem;
  }

  .ysc-pullquote__photo {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }

  .ysc-pullquote__text {
    font-size: 1.2rem;
    line-height: 1.5;
    color: var(--ysc-primary-dark);
    font-style: italic;
    margin: 0 0 0.6rem;
  }

  .ysc-pullquote__author {
    font-size: 0.85rem;
    color: var(--ysc-text-light);
  }

  /* ── Programme social ── */
  .ysc-social-points {
    margin: 1.5rem 0 2rem;
    padding: 0;
    list-style: none;
  }

  .ysc-social-points li {
    padding: 0.85rem 0;
    border-bottom: 1px solid #eef3fa;
    font-size: 0.97rem;
    color: var(--ysc-text);
    line-height: 1.55;
  }

  .ysc-social-points li:first-child { padding-top: 0; }
  .ysc-social-points strong { color: var(--ysc-primary-dark); }

  .ysc-callout {
    border-left: 3px solid var(--ysc-primary);
    padding: 0 0 0 1.25rem;
    margin-top: 1rem;
  }

  .ysc-callout p {
    font-size: 1.02rem;
    color: var(--ysc-primary-dark);
    margin: 0;
    line-height: 1.55;
  }

  /* ── CTA final : sobre, sans carte ni ombre ── */
  .ysc-final-cta {
    padding: 5rem 1.5rem;
    text-align: center;
  }

  .ysc-final-cta__text {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--ysc-primary-dark);
    max-width: 30ch;
    margin: 0 auto 1.5rem;
    line-height: 1.3;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .ysc-steps { grid-template-columns: 1fr; gap: 2rem; }
    .ysc-private__cards { grid-template-columns: 1fr; gap: 2.5rem; }
    .ysc-pullquote { grid-template-columns: 1fr; text-align: center; }
    .ysc-pullquote__photo { margin: 0 auto; }
    .ysc-info-row { grid-template-columns: 1fr; gap: 0.15rem; }
  }
`;

// WhatsApp du club — message pré-rempli simple, pas de collecte de données en page
const CLUB_WHATSAPP = "22899670186";
const PREFILLED_MESSAGE =
  "Bonjour Youth Sports Club, je souhaite inscrire mon enfant au club.";
const whatsappUrl = `https://wa.me/${CLUB_WHATSAPP}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

// ─── Join Club Page ─────────────────────────────────────────────────────────

export const JoinClubPage = () => {
  const location = useLocation();

  // ── Scroll to registration section from URL hash ──
  useEffect(() => {
    if (location.hash === "#registration-form") {
      document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{scoped}</style>
      <style>{extraScoped}</style>

      {/* ─── 1. HERO SPLIT ─────────────────────────────────────────────── */}
      <section className="ysc-join-hero">
        <div className="ysc-join-hero__image-col">
          <img
            src={championImg}
            alt="Champions du Youth Sports Club"
            className="ysc-join-hero__img"
          />
          <p className="ysc-join-hero__caption">
            <strong>+100</strong> jeunes suivis cette saison à Lomé
          </p>
        </div>

        <div className="ysc-join-hero__content-col">
          <h1 className="ysc-join-hero__title">
            Rejoignez le<br />
            <em>Youth Sports Club</em>
          </h1>
          <p className="ysc-join-hero__desc">
            Un encadrement sportif d'excellence, avec un suivi pédagogique adapté à tous les
            niveaux, du premier cours à la compétition.
          </p>

          <p className="ysc-credential">
            Encadrement assuré par une équipe titulaire d'une licence STAPS et du diplôme FIG
            niveau 1, avec des certifications en boxe éducative, fitness et cross-training.
          </p>

          <ul className="ysc-benefits-strip" aria-label="Avantages">
            <FeatureRow icon={<FontAwesomeIcon icon={faPersonRunning} />} text="Programme sur mesure" />
            <FeatureRow icon={<FontAwesomeIcon icon={faArrowTrendUp} />}  text="Progression mesurable" />
            <FeatureRow icon={<FontAwesomeIcon icon={faUsers} />}         text="Communauté bienveillante" />
          </ul>
        </div>
      </section>

      {/* ─── 2. COMMENT INSCRIRE VOTRE ENFANT ──────────────────────────── */}
      <section id="registration-form" className="ysc-form-section" aria-labelledby="form-heading">
        <div className="ysc-form-section__inner">
          <h2 id="form-heading" className="ysc-form-heading">Comment inscrire votre enfant</h2>

          <div className="ysc-steps">
            <div>
              <div className="ysc-step__num">01</div>
              <div className="ysc-step__title">Écrivez-nous sur WhatsApp</div>
              <p className="ysc-step__text">
                Un message est déjà prêt : il vous suffit d'appuyer sur le bouton ci-dessous.
              </p>
            </div>
            <div>
              <div className="ysc-step__num">02</div>
              <div className="ysc-step__title">Donnez-nous quelques infos</div>
              <p className="ysc-step__text">
                Nom, âge et discipline souhaitée (gymnastique, boxe ou fitness) suffisent pour
                démarrer.
              </p>
            </div>
            <div>
              <div className="ysc-step__num">03</div>
              <div className="ysc-step__title">On confirme votre séance</div>
              <p className="ysc-step__text">
                Un membre de l'équipe revient vers vous sous 24h pour fixer le premier cours.
              </p>
            </div>
          </div>

          <a
            className="ysc-btn ysc-btn--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Écrire sur WhatsApp</span>
          </a>
          <p className="ysc-form-note">
            Vos informations restent entre vous et l'équipe du club.
          </p>
        </div>
      </section>

      {/* ─── 3. COURS PRIVÉS ───────────────────────────────────────────── */}
      <section className="ysc-private" aria-labelledby="private-heading">
        <div className="ysc-private__intro">
          <h2 id="private-heading" className="ysc-private__title">
            Progressez à votre<br />
            <em>rythme, avec un coach</em>
          </h2>
          <p className="ysc-private__subtitle">
            Séances individuelles pensées pour l'objectif, le niveau et l'emploi du temps de
            chaque athlète.
          </p>
        </div>

        <div className="ysc-video-hero" aria-label="Vidéo de présentation des cours privés">
          <video
            className="ysc-video-hero__vid"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
          />
          <div className="ysc-video-hero__overlay" aria-hidden="true">
            <p className="ysc-video-hero__tagline">
              Un accompagnement individuel, à domicile ou en extérieur, quel que soit le niveau.
            </p>
          </div>
        </div>

        <div className="ysc-private__cards">
          <div>
            <h3>Ce que ça change</h3>
            <ul className="ysc-plain-list">
              <li>Progression technique accélérée</li>
              <li>Programme adapté à l'âge et au niveau</li>
              <li>Préparation physique et mentale ciblée</li>
              <li>Confiance en soi renforcée séance après séance</li>
            </ul>
          </div>

          <div>
            <h3>En pratique</h3>
            <dl className="ysc-info-rows">
              <div className="ysc-info-row">
                <dt>Lieu</dt>
                <dd>À domicile ou en extérieur, selon vos préférences</dd>
              </div>
              <div className="ysc-info-row">
                <dt>Encadrement</dt>
                <dd>Coachs certifiés, toutes disciplines</dd>
              </div>
              <div className="ysc-info-row">
                <dt>Horaires</dt>
                <dd>Flexibles, week-end inclus</dd>
              </div>
              <div className="ysc-info-row">
                <dt>Contact</dt>
                <dd>
                  <a href="tel:+22899670186">+228 99 67 01 86</a>
                  {" · "}
                  <a href="tel:+22891534885">+228 91 53 48 85</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="ysc-gallery" aria-label="Galerie photos des cours privés">
          <div className="ysc-gallery__large">
            <img src={galleryLarge} alt="Séance privée en action" />
          </div>
          <div className="ysc-gallery__stack">
            <img src={galleryB} alt="Coach et athlète en séance" />
          </div>
        </div>

        <figure className="ysc-pullquote">
          <img
            src={testimonialImg}
            alt="Cora-CW, Piper-Beckett et Mosa"
            className="ysc-pullquote__photo"
          />
          <div>
            <blockquote className="ysc-pullquote__text">
              "Merci pour tout ce que vous avez fait pour notre famille. On est tellement
              contents d'avoir commencé cette aventure avec YSC depuis les premiers jours. Vous
              avez une passion, une vision et une expertise uniques — nous n'allons jamais vous
              oublier."
            </blockquote>
            <figcaption className="ysc-pullquote__author">
              Cora-CW, Piper-Beckett &amp; Mosa
            </figcaption>
          </div>
        </figure>
      </section>

      {/* ─── 4. PROGRAMME SOCIAL ────────────────────────────────────────── */}
      <section className="ysc-social-section" aria-labelledby="social-heading">
        <div className="ysc-social-section__inner">
          <h2 id="social-heading" className="ysc-social-heading">
            Programme social YSC
            <span>Le sport pour tous</span>
          </h2>

          <div className="ysc-social-content">
            <p className="ysc-social-intro">
              Parce que le sport doit rester accessible à tous, YSC met en place un programme
              social pour soutenir les familles et accompagner les jeunes motivés par la
              gymnastique.
            </p>

            <ul className="ysc-social-points">
              <li><strong>Bourse de 50 %</strong> sur la mensualité</li>
              <li>
                <strong>Entraînement gratuit</strong> possible pour les enfants issus de familles
                en difficulté
              </li>
              <li>
                <strong>Aides spécifiques</strong> selon les besoins : transport,
                accompagnement
              </li>
            </ul>

            <div className="ysc-callout">
              <p>
                Objectif : permettre à chaque enfant motivé de pratiquer la gymnastique, quelles
                que soient les conditions sociales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. CTA FINAL ──────────────────────────────────────────────── */}
      <section className="ysc-final-cta">
        <p className="ysc-final-cta__text">
          Une place vous attend au prochain cours d'essai.
        </p>
        <a href="#registration-form" onClick={scrollToForm} className="ysc-btn ysc-btn--primary">
          <span>Réserver une séance privée</span>
        </a>
      </section>
    </>
  );
};