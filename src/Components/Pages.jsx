// ─── Assets ────────────────────────────────────────────────────────────────
import {
  faArrowTrendUp,
  faChildReaching,
  faHandHoldingDollar,
  faHeartPulse,
  faPersonRunning,
  faUsers,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import videoSrc from "url:../images/cours-prive.mp4";
import galleryA from "../images/472902518_601111642868247_3421823822486160063_n.jpg";
import championImg from "../images/chamipon.jpeg";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import testimonialImg from "../images/WhatsApp Image 2026-05-16 at 17.46.33.jpeg";
import galleryC from "../images/WhatsApp Image 2026-05-22 at 15.06.55.jpeg";
import galleryD from "../images/WhatsApp Image 2026-05-22 at 15.07.50.jpeg";
import galleryE from "../images/WhatsApp Image 2026-05-22 at 15.20.21 (1).jpeg";

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
    scroll-behavior: smooth;
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

  .ysc-feature-icon {
    font-size: 1.1rem;
    color: var(--ysc-primary);
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* ── 2. Form Section ── */
  .ysc-form-section {
    padding: 5rem 1rem;
    background: var(--ysc-bg-alt);
  }

  .ysc-form-section__inner {
    max-width: 600px;
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
    padding: 2.5rem;
    border-radius: var(--ysc-radius);
    box-shadow: var(--ysc-shadow);
  }

  .ysc-form-block {
    margin-bottom: 2rem;
  }

  .ysc-form-section-title {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 0.75rem;
  }

  .ysc-form-hint {
    font-size: 0.85rem;
    color: var(--ysc-text-light);
    margin-bottom: 1rem;
  }

  .ysc-form-grid {
    display: flex;
    flex-direction: column;
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

  .ysc-field input,
  .ysc-field select,
  .ysc-field textarea {
    padding: 0.85rem 1rem;
    border: 1px solid #d3e2f3;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: border-color 0.2s;
    background: var(--ysc-white);
    font-family: inherit;
  }

  .ysc-field input:focus,
  .ysc-field select:focus,
  .ysc-field textarea:focus {
    outline: none;
    border-color: var(--ysc-primary);
  }

  .ysc-field textarea {
    min-height: 100px;
    resize: vertical;
  }

  .ysc-checkbox-field {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .ysc-checkbox-field input {
    width: auto;
    margin-top: 0.25rem;
  }

  .ysc-checkbox-text {
    font-size: 0.9rem;
    color: var(--ysc-text);
    line-height: 1.4;
  }

  .ysc-category-label {
    margin-top: 0.25rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ysc-primary);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    animation: fadeIn 0.3s ease;
  }

  .ysc-radio-group {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }

  .ysc-radio-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.95rem;
    color: var(--ysc-text);
  }

  .ysc-radio-item input {
    width: auto;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
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
    background: var(--ysc-white);
    padding: 2.5rem;
    border-radius: var(--ysc-radius);
    border: 1px solid #e1ecf8;
    position: relative;
    overflow: hidden;
    box-shadow: var(--ysc-shadow);
  }

  .ysc-info-card--objectives { border-left: 6px solid var(--ysc-primary); }
  .ysc-info-card--modalities { border-left: 6px solid #ef7d22; }

  .ysc-info-card__icon-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  .ysc-info-card--objectives .ysc-info-card__icon-badge {
    background: #eaf2fc;
    color: var(--ysc-primary);
  }

  .ysc-info-card--modalities .ysc-info-card__icon-badge {
    background: #fff4e5;
    color: #ef7d22;
  }

  .ysc-info-card h3 {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 1.5rem;
  }

  .ysc-info-card ul {
    padding-left: 0;
    list-style: none;
  }

  .ysc-info-card li {
    position: relative;
    padding-left: 2.5rem;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
    color: var(--ysc-text);
    min-height: 32px;
    display: flex;
    align-items: center;
  }

  .ysc-info-card__li-badge {
    position: absolute;
    left: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 1.1rem;
  }

  .ysc-info-card--objectives .ysc-info-card__li-badge {
    background: #f0f7ff;
    color: var(--ysc-primary);
  }

  .ysc-info-card--modalities .ysc-info-card__li-badge {
    background: #fff8ef;
    color: #ef7d22;
  }

  .ysc-tel-link {
    color: var(--ysc-primary);
    font-weight: 700;
  }

  .ysc-gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto 4rem;
  }

  .ysc-gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .ysc-gallery__large { height: 350px; }
  .ysc-gallery__stack {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    gap: 0.75rem;
    font-size: 1.05rem;
    color: var(--ysc-text);
  }

  .ysc-social-bullet {
    font-size: 1.25rem;
    color: var(--ysc-primary);
    width: 24px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    padding-top: 2px;
  }

  .ysc-social-objective {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1.5rem;
    background: #fff8ef;
    border-radius: 12px;
    border: 1px dashed #ef7d22;
  }

  .ysc-social-obj-icon {
    font-size: 1.5rem;
    color: #ef7d22;
    flex-shrink: 0;
    padding-top: 2px;
  }

  .ysc-social-objective p {
    font-size: 0.95rem;
    color: #6c4622;
    margin: 0;
  }

  /* ── 5. CTA Final ── */
  .ysc-final-cta {
    padding: 5rem 1rem;
    background: var(--ysc-white);
  }

  .ysc-final-cta__inner {
    text-align: center;
    background: var(--ysc-white);
    border: 1px solid rgba(47, 111, 178, 0.15);
    box-shadow: 0 18px 45px rgba(47, 111, 178, 0.08);
    padding: 4rem 2rem;
    border-radius: var(--ysc-radius);
    max-width: 1100px;
    margin: 0 auto;
  }

  .ysc-final-cta__text {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--ysc-primary-dark);
  }

  /* ── Sub-pages (Events, Training, Results, Partners) ── */
  .ysc-page {
    background: var(--ysc-white);
  }

  .ysc-page-hero {
    padding: 4rem 1rem 3rem;
    background: var(--ysc-bg-alt);
    text-align: center;
  }

  .ysc-page-hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 0.75rem;
  }

  .ysc-page-hero p {
    font-size: 1.1rem;
    color: var(--ysc-text-light);
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .ysc-hero-img {
    width: 100%;
    max-width: 1000px;
    height: 340px;
    object-fit: cover;
    border-radius: var(--ysc-radius);
    display: block;
    margin: 0 auto;
  }

  .ysc-page-section {
    padding: 4rem 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .ysc-page-section--alt {
    background: var(--ysc-bg-alt);
    max-width: 100%;
    padding: 4rem 1rem;
  }

  .ysc-page-section--alt .ysc-page-section__inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .ysc-page-section__header {
    margin-bottom: 2.5rem;
  }

  .ysc-page-section__header h2 {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 0.5rem;
  }

  .ysc-page-section__header p {
    font-size: 1rem;
    color: var(--ysc-text-light);
  }

  .ysc-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .ysc-cards-grid--two {
    grid-template-columns: repeat(2, 1fr);
  }

  .ysc-card {
    background: var(--ysc-white);
    padding: 2rem;
    border-radius: var(--ysc-radius);
    border: 1px solid #e1ecf8;
    box-shadow: var(--ysc-shadow);
  }

  .ysc-card h3 {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 1rem;
  }

  .ysc-card p {
    font-size: 0.95rem;
    color: var(--ysc-text);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .ysc-card ul {
    padding-left: 1.2rem;
    margin: 0;
  }

  .ysc-card li {
    font-size: 0.95rem;
    color: var(--ysc-text);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .ysc-photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .ysc-photo-grid img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .ysc-join-hero { flex-direction: column; }
    .ysc-join-hero__image-col { height: 400px; }
    .ysc-join-hero__content-col { padding: 3rem 2rem; }
    .ysc-form-grid { grid-template-columns: 1fr; }
    .ysc-field--full { grid-column: span 1; }
    .ysc-private__cards { grid-template-columns: 1fr; }
    .ysc-gallery__large { height: 300px; }
    .ysc-testimonial { flex-direction: column; text-align: center; padding: 2rem; }
    .ysc-testimonial__avatar-wrap { width: 100px; height: 100px; }
    .ysc-social-content { padding: 2rem 1.5rem; }
    .ysc-cards-grid { grid-template-columns: 1fr; }
    .ysc-cards-grid--two { grid-template-columns: 1fr; }
    .ysc-photo-grid { grid-template-columns: 1fr; }
    .ysc-gallery__stack { grid-template-columns: 1fr; }
  }
`;

const events = [
  {
    title: "Stage de perfectionnement (gymnastique)",
    date: "15 - 20 juin 2026",
    location: "Stade de Kégué",
    description:
      "Travail technique, souplesse et préparation aux compétitions avec un encadrement renforcé.",
  },
  {
    title: "Tournoi amical de boxe éducative",
    date: "05 juillet 2026",
    location: "Dojo Youth Sports Club",
    description: "Rencontres encadrées pour développer discipline, respect et maîtrise de soi.",
  },
  {
    title: "Journée portes ouvertes",
    date: "24 août 2026",
    location: "Youth Sports Club",
    description: "Essais gratuits, démonstrations et inscriptions sur place pour toutes les familles.",
  },
];

const eventsGallery = [
  {
    src: galleryLarge,
    alt: "Démonstration de gymnastique du Youth Sports Club",
  },
  {
    src: galleryC,
    alt: "Entraînement de gymnastique récent",
  },
  {
    src: galleryD,
    alt: "Séance de boxe éducative",
  },
  {
    src: galleryE,
    alt: "Préparation physique et stretching",
  },
  {
    src: galleryA,
    alt: "Séance collective du Youth Sports Club",
  },
  {
    src: galleryB,
    alt: "Photo de groupe des athlètes du club",
  },
];

const resultsHighlights = [
  {
    title: "Championnats nationaux 2025",
    detail: "5 médailles remportées dont 2 en or et 1 en argent.",
  },
  {
    title: "Gala régional 2024",
    detail: "Prix du club le plus prometteur et mention spéciale pour la formation.",
  },
  {
    title: "Compétitions scolaires",
    detail: "8 podiums en catégories juniors avec une progression continue.",
  },
];

const partners = [
  {
    title: "Établissements scolaires",
    detail: "Collèges et lycées de Lomé qui orientent des jeunes vers nos programmes.",
  },
  {
    title: "Structures sportives",
    detail: "Clubs amis et fédérations locales pour l'organisation d'événements partagés.",
  },
  {
    title: "Entreprises solidaires",
    detail: "Soutien financier ou matériel pour nos bourses sportives et projets sociaux.",
  },
];

// ─── Join Club Page ─────────────────────────────────────────────────────────

export const JoinClubPage = () => {
  const defaultDate = new Date().toISOString().slice(0, 10);
  const [formData, setFormData] = useState({
    athleteLastName: "",
    athleteFirstName: "",
    dob: "",
    sex: "",
    nationality: "",
    school: "",
    classLevel: "",
    address: "",
    parentName: "",
    parentRelation: "",
    parentPhone: "",
    parentEmail: "",
    level: "",
    ageCategory: "",
    discipline: "",
    scholarship: "",
    scholarshipType: "",
    paymentMode: "",
    agreementName: "",
    agreementDate: defaultDate,
    signature: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "scholarship" && value !== "yes") {
        next.scholarshipType = "";
      }
      if (name === "parentName" && !prev.agreementName) {
        next.agreementName = value;
      }
      return next;
    });
  };

  const getAgeCategory = (dob) => {
    if (!dob) return "";
    const birthYear = new Date(dob).getFullYear();
    const age = 2026 - birthYear;
    if (age <= 6) return "4-6";
    if (age <= 9) return "7-9";
    if (age <= 11) return "10-11";
    if (age <= 14) return "12-14";
    if (age <= 17) return "15-17";
    return "18+";
  };

  useEffect(() => {
    const autoCategory = getAgeCategory(formData.dob);
    if (autoCategory && !formData.ageCategory) {
      setFormData((prev) => ({ ...prev, ageCategory: autoCategory }));
    }
  }, [formData.dob, formData.ageCategory]);

  const formatDate = (value) => {
    if (!value) return "";
    return value.split("-").reverse().join("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    try {
      const levelLabel = {
        debutant: "Débutant",
        "1an": "1 an",
        "2ans": "2 ans",
        "3ansplus": "3 ans et +",
      }[formData.level];
      const ageLabel = {
        "4-6": "4–6 (Éveil)",
        "7-9": "7–9 (Benjamin)",
        "10-11": "10–11 (Minime)",
        "12-14": "12–14 (Cadet)",
        "15-17": "15–17 (Junior)",
        "18+": "18+ (Senior)",
      }[formData.ageCategory];
      const scholarshipLabel =
        formData.scholarship === "yes" ? "Oui" : formData.scholarship === "no" ? "Non" : "";
      const scholarshipTypeLabel = {
        bourse50: "Bourse 50 % sur la mensualité",
        "entrainement-gratuit": "Entraînement gratuit",
      }[formData.scholarshipType];
      const paymentLabel = {
        seance: "Paiement par séance",
        mensuel: "Paiement mensuel",
        forfait: "Forfait saison complète",
      }[formData.paymentMode];

      const safeValue = (value) => (value ? value : "-");
      const sexLabel =
        formData.sex === "M" ? "Masculin" : formData.sex === "F" ? "Féminin" : "";
      const whatsappMessage = [
        "Bonjour Youth Sports Club,",
        "",
        "Nouvelle demande d'inscription 2026",
        `Nom: ${safeValue(formData.athleteLastName)}`,
        `Prénoms: ${safeValue(formData.athleteFirstName)}`,
        `Date de naissance: ${safeValue(formatDate(formData.dob))}`,
        `Sexe: ${safeValue(sexLabel)}`,
        `Nationalité: ${safeValue(formData.nationality)}`,
        `Établissement scolaire: ${safeValue(formData.school)}`,
        `Classe: ${safeValue(formData.classLevel)}`,
        `Adresse: ${safeValue(formData.address)}`,
        "",
        "Parent / tuteur légal",
        `Nom et prénoms: ${safeValue(formData.parentName)}`,
        `Lien avec l'enfant: ${safeValue(formData.parentRelation)}`,
        `Téléphone: ${safeValue(formData.parentPhone)}`,
        `Email: ${safeValue(formData.parentEmail)}`,
        "",
        "Informations sportives",
        `Niveau / ancienneté: ${safeValue(levelLabel)}`,
        `Catégorie d'âge: ${safeValue(ageLabel)}`,
        `Discipline: ${safeValue(formData.discipline)}`,
        "",
        "Programme YSC",
        `Athlète boursier: ${safeValue(scholarshipLabel)}`,
        `Catégorie de bourse: ${safeValue(scholarshipTypeLabel)}`,
        "",
        "Paiement",
        `Mode choisi: ${safeValue(paymentLabel)}`,
        "",
        "Engagement financier",
        `Nom et prénoms: ${safeValue(formData.agreementName || formData.parentName)}`,
        `Date: ${safeValue(formatDate(formData.agreementDate))}`,
        `Signature: ${safeValue(formData.signature || formData.agreementName)}`,
      ].join("\n");

      const whatsappNumber = "+22891534885";
      const whatsappDigits = whatsappNumber.replace(/\D/g, "");
      const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, "_blank");
      setSubmissionMessage("Demande envoyée sur WhatsApp.");
    } catch (error) {
      setSubmissionMessage("❌ Impossible d'ouvrir WhatsApp. Réessayez ou contactez le club.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{scoped}</style>
      {/* ── 1. HERO SPLIT ─────────────────────────────────────────────────── */}
      <section className="ysc-join-hero">
        {/* Left: image with floating stat chips */}
        <div className="ysc-join-hero__image-col">
          <img
            src={championImg}
            alt="Champions du Youth Sports Club"
            className="ysc-join-hero__img"
          />
          {/* Floating trust chips anchored on the photo */}
          <div className="ysc-chip ysc-chip--topleft"> +100 membres actifs</div>
          <div className="ysc-chip ysc-chip--bottomright"> Suivi personnalisé</div>
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
            Recevez un encadrement sportif d'excellence — un suivi pédagogique, sécurisé et adapté à
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
            <FeatureRow
              icon={<FontAwesomeIcon icon={faPersonRunning} />}
              text="Programme sur mesure"
            />
            <FeatureRow
              icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
              text="Progression mesurable"
            />
            <FeatureRow icon={<FontAwesomeIcon icon={faUsers} />} text="Communauté bienveillante" />
          </ul>
        </div>
      </section>

      {/* ── 2. REGISTRATION FORM ──────────────────────────────────────────── */}
      <section id="registration-form" className="ysc-form-section" aria-labelledby="form-heading">
        <div className="ysc-form-section__inner">
          <div className="ysc-form-header">
            <Badge>Inscription gratuite</Badge>
            <h2 id="form-heading" className="ysc-form-heading">
              Rejoindre le club
            </h2>
          </div>

          <form className="ysc-form" onSubmit={handleSubmit}>
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">1. Informations du gymnaste</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label htmlFor="athleteLastName">Nom</label>
                  <input
                    id="athleteLastName"
                    name="athleteLastName"
                    type="text"
                    value={formData.athleteLastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="athleteFirstName">Prénoms</label>
                  <input
                    id="athleteFirstName"
                    name="athleteFirstName"
                    type="text"
                    value={formData.athleteFirstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="dob">Date de naissance</label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="ysc-field">
                  <label>Sexe</label>
                  <div className="ysc-radio-group">
                    <label className="ysc-radio-item">
                      <input
                        type="radio"
                        name="sex"
                        value="M"
                        checked={formData.sex === "M"}
                        onChange={handleInputChange}
                        required
                      />
                      M
                    </label>
                    <label className="ysc-radio-item">
                      <input
                        type="radio"
                        name="sex"
                        value="F"
                        checked={formData.sex === "F"}
                        onChange={handleInputChange}
                        required
                      />
                      F
                    </label>
                  </div>
                </div>
                <div className="ysc-field">
                  <label htmlFor="nationality">Nationalité</label>
                  <input
                    id="nationality"
                    name="nationality"
                    type="text"
                    value={formData.nationality}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="school">Établissement scolaire</label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    value={formData.school}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="classLevel">Classe</label>
                  <input
                    id="classLevel"
                    name="classLevel"
                    type="text"
                    value={formData.classLevel}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="address">Adresse complète</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">2. Coordonnées du parent / tuteur légal</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label htmlFor="parentName">Nom &amp; Prénoms</label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="parentRelation">Lien avec l'enfant</label>
                  <input
                    id="parentRelation"
                    name="parentRelation"
                    type="text"
                    value={formData.parentRelation}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="parentPhone">Téléphone (WhatsApp)</label>
                  <input
                    id="parentPhone"
                    name="parentPhone"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="parentEmail">Email</label>
                  <input
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">3. Informations sportives</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label>Niveau / ancienneté</label>
                  <div className="ysc-radio-group">
                    {[
                      { value: "debutant", label: "Débutant" },
                      { value: "1an", label: "1 an" },
                      { value: "2ans", label: "2 ans" },
                      { value: "3ansplus", label: "3 ans et +" },
                    ].map((option) => (
                      <label className="ysc-radio-item" key={option.value}>
                        <input
                          type="radio"
                          name="level"
                          value={option.value}
                          checked={formData.level === option.value}
                          onChange={handleInputChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="ysc-field">
                  <label>Catégorie d'âge</label>
                  <div className="ysc-radio-group">
                    {[
                      { value: "4-6", label: "4–6 (Éveil)" },
                      { value: "7-9", label: "7–9 (Benjamin)" },
                      { value: "10-11", label: "10–11 (Minime)" },
                      { value: "12-14", label: "12–14 (Cadet)" },
                      { value: "15-17", label: "15–17 (Junior)" },
                      { value: "18+", label: "18+ (Senior)" },
                    ].map((option) => (
                      <label className="ysc-radio-item" key={option.value}>
                        <input
                          type="radio"
                          name="ageCategory"
                          value={option.value}
                          checked={formData.ageCategory === option.value}
                          onChange={handleInputChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">4. Discipline pratiquée</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <div className="ysc-radio-group">
                    {[
                      { value: "Gymnastique", label: "Gymnastique" },
                      { value: "Boxe", label: "Boxe" },
                    ].map((option) => (
                      <label className="ysc-radio-item" key={option.value}>
                        <input
                          type="radio"
                          name="discipline"
                          value={option.value}
                          checked={formData.discipline === option.value}
                          onChange={handleInputChange}
                          required
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">5. Saison sportive 2026</h3>
              <p className="ysc-form-hint">
                Du 10 janvier 2026 au 5 décembre 2026. Durée des séances : 2 heures.
              </p>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">6. Statut social – Programme YSC</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label>L'athlète est-il boursier ?</label>
                  <div className="ysc-radio-group">
                    {[
                      { value: "yes", label: "Oui" },
                      { value: "no", label: "Non" },
                    ].map((option) => (
                      <label className="ysc-radio-item" key={option.value}>
                        <input
                          type="radio"
                          name="scholarship"
                          value={option.value}
                          checked={formData.scholarship === option.value}
                          onChange={handleInputChange}
                          required
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
                {formData.scholarship === "yes" && (
                  <div className="ysc-field">
                    <label>Catégorie de bourse (décision du club)</label>
                    <div className="ysc-radio-group">
                      {[
                        { value: "bourse50", label: "Bourse 50 % sur la mensualité" },
                        { value: "entrainement-gratuit", label: "Entraînement gratuit" },
                      ].map((option) => (
                        <label className="ysc-radio-item" key={option.value}>
                          <input
                            type="radio"
                            name="scholarshipType"
                            value={option.value}
                            checked={formData.scholarshipType === option.value}
                            onChange={handleInputChange}
                            required={formData.scholarship === "yes"}
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">7. Modalités financières</h3>
              <p className="ysc-form-hint">
                Séance enfant : 7 000 FCFA · Séance adulte : 5 000 FCFA · Mensualité : 20 000 FCFA ·
                Forfait saison complète : 180 000 FCFA · Forfait fratrie (3 enfants et +) : 15 000
                FCFA / mois par enfant.
              </p>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">8. Mode de paiement</h3>
              <p className="ysc-form-hint">Choix obligatoire à l'inscription pour les non boursiers.</p>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <div className="ysc-radio-group">
                    {[
                      { value: "seance", label: "Paiement par séance" },
                      { value: "mensuel", label: "Paiement mensuel" },
                      { value: "forfait", label: "Forfait saison complète" },
                    ].map((option) => (
                      <label className="ysc-radio-item" key={option.value}>
                        <input
                          type="radio"
                          name="paymentMode"
                          value={option.value}
                          checked={formData.paymentMode === option.value}
                          onChange={handleInputChange}
                          required
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title">10. Engagement financier</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label htmlFor="agreementName">Nom et prénoms du parent / tuteur</label>
                  <input
                    id="agreementName"
                    name="agreementName"
                    type="text"
                    value={formData.agreementName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="agreementDate">Date</label>
                  <input
                    id="agreementDate"
                    name="agreementDate"
                    type="date"
                    value={formData.agreementDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="ysc-field">
                  <label htmlFor="signature">Signature (nom complet)</label>
                  <input
                    id="signature"
                    name="signature"
                    type="text"
                    value={formData.signature}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <label className="ysc-checkbox-field">
              <input type="checkbox" required />
              <span className="ysc-checkbox-text">
                J'accepte d'être contacté via WhatsApp et j'autorise le traitement de ces données.
              </span>
            </label>

            <button type="submit" className="ysc-btn ysc-btn--primary ysc-btn--full" disabled={isSubmitting}>
              <span>{isSubmitting ? "Envoi de la demande..." : "Envoyé ma demande d'inscription"}</span>
              <span className="ysc-btn__arrow" aria-hidden="true">
                →
              </span>
            </button>

            {submissionMessage && <p className="ysc-form-note">{submissionMessage}</p>}
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
          <article className="ysc-info-card ysc-info-card--objectives">
            <div className="ysc-info-card__icon-badge" aria-hidden="true">
              <i className="ti ti-target-arrow"></i>
            </div>
            <h3>Objectifs</h3>
            <ul>
              {[
                { icon: "ti-chart-line", text: "Progression technique accélérée" },
                { icon: "ti-adjustments-horizontal", text: "Programme adapté à l'âge et au niveau" },
                { icon: "ti-brain", text: "Préparation physique et mentale ciblée" },
                { icon: "ti-mood-smile", text: "Développement de la confiance en soi" },
              ].map(({ icon, text }) => (
                <li key={text}>
                  <span className="ysc-info-card__li-badge">
                    <i className={`ti ${icon}`} aria-hidden="true"></i>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </article>

          <article className="ysc-info-card ysc-info-card--modalities">
            <div className="ysc-info-card__icon-badge" aria-hidden="true">
              <i className="ti ti-clipboard-list"></i>
            </div>
            <h3>Modalités</h3>
            <ul>
              {[
                { icon: "ti-home-move", text: "Cours privés à domicile disponibles pour toutes nos disciplines" },
                { icon: "ti-map-pin", text: "À domicile ou en extérieur selon vos préférences" },
                { icon: "ti-award", text: "Encadrement par des coachs certifiés" },
                { icon: "ti-calendar-time", text: "Flexibilité horaire — week-end inclus" },
              ].map(({ icon, text }) => (
                <li key={text}>
                  <span className="ysc-info-card__li-badge">
                    <i className={`ti ${icon}`} aria-hidden="true"></i>
                  </span>
                  {text}
                </li>
              ))}
              <li>
                <span className="ysc-info-card__li-badge">
                  <i className="ti ti-phone" aria-hidden="true"></i>
                </span>
                Contact rapide :{" "}
                <a href="tel:+22891534885" className="ysc-tel-link">
                  +228 91 53 48 85
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

      </section>

      {/* ── 4. SOCIAL PROGRAM ── section FRÈRE */}
      <section className="ysc-social-section" aria-labelledby="social-heading">
        <div className="ysc-social-section__inner">
          <div className="ysc-social-header">
            <SectionLabel>Engagement</SectionLabel>
            <h2 id="social-heading" className="ysc-social-heading">
              Programme social YSC
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
                <span className="ysc-social-bullet">
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </span>
                <span>
                  <strong>Bourse de 50 %</strong> sur la mensualité
                </span>
              </li>
              <li>
                <span className="ysc-social-bullet">
                  <FontAwesomeIcon icon={faChildReaching} />
                </span>
                <span>
                  <strong>Entraînement gratuit</strong> possible pour les enfants issus de familles
                  en difficulté
                </span>
              </li>
              <li>
                <span className="ysc-social-bullet">
                  <FontAwesomeIcon icon={faVanShuttle} />
                </span>
                <span>
                  <strong>Aides spécifiques</strong> selon les besoins (transport, accompagnement)
                </span>
              </li>
            </ul>

            <div className="ysc-social-objective">
              <span className="ysc-social-obj-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faHeartPulse} />
              </span>
              <p>
                <strong>Objectif :</strong> permettre à chaque enfant motivé de pratiquer la
                gymnastique, quelles que soient les conditions sociales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA FINAL ── */}
      <section className="ysc-final-cta">
        <div className="ysc-final-cta__inner">
          <p className="ysc-final-cta__text">Prêt à passer au niveau supérieur ?</p>
          <a href="#registration-form" onClick={scrollToForm} className="ysc-btn ysc-btn--primary">
            <span>Réserver une séance privée</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
};

// ─── Events Page ─────────────────────────────────────────────────────────────

export const EventsPage = () => (
  <>
    <style>{scoped}</style>

    <section className="ysc-page-hero">
      <SectionLabel>Agenda</SectionLabel>
      <h1>Événements</h1>
      <p>Stages, rencontres et compétitions pour toute la communauté Youth Sports Club.</p>
      <img src={galleryLarge} alt="Événement sportif du club" className="ysc-hero-img" />
    </section>

    <div className="ysc-page-section--alt">
      <div className="ysc-page-section__inner">
        <div className="ysc-page-section__header">
          <h2>Calendrier à venir</h2>
          <p>Les prochains temps forts pour les athlètes, familles et partenaires.</p>
        </div>
        <div className="ysc-cards-grid">
          {events.map((event) => (
            <article className="ysc-card" key={event.title}>
              <h3>{event.title}</h3>
              <p>
                <strong>Date :</strong> {event.date}
              </p>
              <p>
                <strong>Lieu :</strong> {event.location}
              </p>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>

    <div className="ysc-page-section">
      <div className="ysc-page-section__header">
        <h2>Images récentes</h2>
        <p>Des souvenirs d'entraînements, démonstrations et compétitions.</p>
      </div>
      <div className="ysc-photo-grid">
        {eventsGallery.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.alt} />
        ))}
      </div>
    </div>
  </>
);

// ─── Training Sessions Page ─────────────────────────────────────────────────

export const TrainingSessionsPage = () => (
  <>
    <style>{scoped}</style>

    <section className="ysc-page-hero">
      <SectionLabel>Disciplines</SectionLabel>
      <h1>Entraînements</h1>
      <p>Des séances adaptées à chaque âge, chaque niveau et chaque objectif sportif.</p>
      <img src={galleryA} alt="Séance d'entraînement encadrée" className="ysc-hero-img" />
    </section>

  </>
);

// ─── Results Page ───────────────────────────────────────────────────────────

export const ResultsPage = () => (
  <>
    <style>{scoped}</style>

    <section className="ysc-page-hero">
      <SectionLabel>Palmarès</SectionLabel>
      <h1>Résultats &amp; palmarès</h1>
      <p>Une progression constante portée par la rigueur et l'esprit d'équipe.</p>
      <img src={championImg} alt="Athlètes du club récompensés" className="ysc-hero-img" />
    </section>

    <div className="ysc-page-section--alt">
      <div className="ysc-page-section__inner">
        <div className="ysc-page-section__header">
          <h2>Moments clés</h2>
          <p>Quelques repères récents qui illustrent la dynamique du club.</p>
        </div>
        <div className="ysc-cards-grid">
          {resultsHighlights.map((result) => (
            <article className="ysc-card" key={result.title}>
              <h3>{result.title}</h3>
              <p>{result.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </>
);

// ─── Partners Page ──────────────────────────────────────────────────────────

export const PartnersPage = () => (
  <>
    <style>{scoped}</style>

    <section className="ysc-page-hero">
      <SectionLabel>Réseau</SectionLabel>
      <h1>Partenaires</h1>
      <p>Ils soutiennent le Youth Sports Club et partagent notre vision éducative.</p>
      <img src={galleryB} alt="Partenaires et membres du club" className="ysc-hero-img" />
    </section>

    <div className="ysc-page-section--alt">
      <div className="ysc-page-section__inner">
        <div className="ysc-page-section__header">
          <h2>Nos collaborations</h2>
          <p>Un réseau local engagé pour la jeunesse et le développement sportif.</p>
        </div>
        <div className="ysc-cards-grid">
          {partners.map((partner) => (
            <article className="ysc-card" key={partner.title}>
              <h3>{partner.title}</h3>
              <p>{partner.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </>
);
