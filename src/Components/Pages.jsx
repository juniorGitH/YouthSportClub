// ─── Assets ────────────────────────────────────────────────────────────────
import {
  faArrowTrendUp,
  faBullseye,
  faChildReaching,
  faHandHoldingDollar,
  faHeartPulse,
  faPersonRunning,
  faUsers,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import videoSrc from "url:../images/Cours privé.mp4";
import videoCta from "url:../images/2coursprivé.mp4";
import championImg from "../images/chamipon.jpeg";
import ensembleImg from "../images/photoensemble.jpeg";
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
    font-size: 1.75rem;
    color: var(--ysc-primary);
    flex-shrink: 0;
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
    gap: 2rem;
    margin-top: 0.5rem;
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

  .ysc-btn__arrow {
    font-size: 1.2rem;
    transition: transform 0.2s;
  }

  .ysc-btn:hover .ysc-btn__arrow {
    transform: translateX(4px);
  }

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
  }

  .ysc-video-hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
    display: flex;
    align-items: flex-end;
    padding: 2rem;
  }

  .ysc-video-hero__tagline {
    color: var(--ysc-white);
    font-weight: 600;
    font-size: 1rem;
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
    list-style: none;
    padding: 0;
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
    align-items: center;
    gap: 1rem;
    font-size: 1.05rem;
    color: var(--ysc-text);
  }
  
  .ysc-social-bullet {
    font-size: 1.25rem;
    color: var(--ysc-primary);
    width: 24px;
    display: flex;
    justify-content: center;
  }
  
  .ysc-social-objective {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: #fff8ef;
    border-radius: 12px;
    border: 1px dashed #ef7d22;
  }
  
  .ysc-social-obj-icon {
    font-size: 1.5rem;
    color: #ef7d22;
  }
  
  .ysc-social-objective p {
    font-size: 0.95rem;
    color: #6c4622;
    margin: 0;
  }

  .ysc-private__cta {
    text-align: center;
    background: var(--ysc-white);
    border: 1px solid rgba(47, 111, 178, 0.15);
    box-shadow: 0 18px 45px rgba(47, 111, 178, 0.08);
    padding: 4rem 2rem;
    border-radius: var(--ysc-radius);
    color: var(--ysc-text);
    max-width: 1100px;
    margin: 4rem auto 0;
    position: relative;
    overflow: visible;
  }

  .ysc-private__cta-video {
    display: none;
  }

  .ysc-private__cta-content {
    position: relative;
    z-index: 1;
  }

  .ysc-private__cta::after {
    display: none;
  }

  .ysc-private__cta-text {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--ysc-primary-dark);
  }

  .ysc-private__cta-note {
    font-size: 0.85rem;
    color: var(--ysc-text-light);
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

export const JoinClubPage = () => {
  const [registrationType, setRegistrationType] = useState("self"); // self | child
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    parentName: "",
    parentPhone: "",
    discipline: "",
    phone: "",
    email: "",
    objective: "",
    objectiveDetails: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Extract property name from id (e.g., 'f-name' -> 'name')
    const field = id.replace("f-", "").replace("-", "P").replace("pName", "parentName").replace("pPhone", "parentPhone");
    
    // Mapping manual fixes for IDs to state keys
    const idMap = {
      "f-name": "name",
      "f-dob": "dob",
      "f-parent-name": "parentName",
      "f-parent-phone": "parentPhone",
      "f-discipline": "discipline",
      "f-phone": "phone",
      "f-email": "email",
      "f-objective": "objective",
      "f-objective-details": "objectiveDetails"
    };

    setFormData(prev => ({
      ...prev,
      [idMap[id] || field]: value
    }));
  };

  const getSportsCategory = (dob) => {
    if (!dob) return "";
    const birthYear = new Date(dob).getFullYear();
    const currentYear = 2026;
    const age = currentYear - birthYear;

    if (age < 6) return "Baby Gym";
    if (age <= 7) return "Eveil";
    if (age <= 9) return "Poussin";
    if (age <= 11) return "Benjamin";
    if (age <= 13) return "Minime";
    if (age <= 15) return "Cadet";
    if (age <= 17) return "Junior";
    return "Senior";
  };

  const category = getSportsCategory(formData.dob);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, dob, parentName, parentPhone, discipline, phone, email, objective } = formData;
    
    // Format date from YYYY-MM-DD to DD/MM/YYYY
    const formattedDob = dob ? dob.split("-").reverse().join("/") : "";
    
    let message = `Bonjour YSC,\n\nNouvelle demande d’inscription :\n\n`;
    message += `Nom : ${name}\n`;
    message += `Date de naissance : ${formattedDob}\n`;
    
    if (registrationType === "child") {
      message += `Parent : ${parentName}\n`;
      message += `Téléphone parent : ${parentPhone}\n`;
    }
    
    message += `Discipline : ${discipline}\n`;
    message += `Téléphone : ${phone}\n`;
    message += `Email : ${email || "Non renseigné"}\n`;
    message += `Objectif : ${objective}\n\n`;
    message += `Merci.`;

    const whatsappUrl = `https://wa.me/22891534885?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
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
            {/* <p className="ysc-form-subheading">
              Complétez le formulaire — notre équipe vous contacte sous 24h via WhatsApp.
            </p> */}
          </div>

          <form className="ysc-form" onSubmit={handleSubmit}>
            <div className="ysc-form-grid">
              <div className="ysc-field">
                <label htmlFor="f-name">
                  {registrationType === "child" ? "Nom complet de l'enfant" : "Nom complet"}
                </label>
                <input
                  id="f-name"
                  type="text"
                  placeholder="Ex : Kofi Mensah"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="ysc-field">
                <label htmlFor="f-dob">Date de naissance</label>
                <input
                  id="f-dob"
                  type="date"
                  required
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                {category && (
                  <span className="ysc-category-label">
                    <FontAwesomeIcon icon={faUsers} size="xs" /> Catégorie : {category}
                  </span>
                )}
              </div>

              <div className="ysc-field ysc-field--full">
                <label htmlFor="f-discipline">Discipline souhaitée</label>
                <select
                  id="f-discipline"
                  value={formData.discipline}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionnez une discipline</option>
                  <option value="Gymnastique">Gymnastique</option>
                  <option value="Boxe">Boxe</option>
                  <option value="Fitness">Fitness</option>
                </select>
              </div>

              <div className="ysc-field">
                <label htmlFor="f-phone">Téléphone (WhatsApp)</label>
                <input
                  id="f-phone"
                  type="tel"
                  placeholder="+228 90 00 00 00"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="ysc-field ysc-field--full">
                <label>Vous inscrivez :</label>
                <div className="ysc-radio-group">
                  <label className="ysc-radio-item">
                    <input
                      type="radio"
                      name="registrationType"
                      value="self"
                      checked={registrationType === "self"}
                      onChange={(e) => setRegistrationType(e.target.value)}
                    />
                    Vous-même
                  </label>
                  <label className="ysc-radio-item">
                    <input
                      type="radio"
                      name="registrationType"
                      value="child"
                      checked={registrationType === "child"}
                      onChange={(e) => setRegistrationType(e.target.value)}
                    />
                    Votre enfant
                  </label>
                </div>
              </div>

              {registrationType === "child" && (
                <>
                  <div className="ysc-field">
                    <label htmlFor="f-parent-name">Nom du parent</label>
                    <input
                      id="f-parent-name"
                      type="text"
                      placeholder="Nom du responsable"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="ysc-field">
                    <label htmlFor="f-parent-phone">Téléphone du parent</label>
                    <input
                      id="f-parent-phone"
                      type="tel"
                      placeholder="+228 90 00 00 00"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}
            </div>

            <label className="ysc-checkbox-field">
              <input type="checkbox" required />
              <span className="ysc-checkbox-text">J’accepte d’être contacté via WhatsApp.</span>
            </label>

            <button type="submit" className="ysc-btn ysc-btn--primary ysc-btn--full">
              <span>Envoyer ma demande d’inscription</span>
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
        <article className="ysc-info-card ysc-info-card--objectives">
          <div className="ysc-info-card__icon-badge" aria-hidden="true">
            <i className="ti ti-target-arrow"></i>
          </div>
          <h3>Objectifs</h3>
          <ul>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-chart-line"></i>
              </span>
              Progression technique accélérée
            </li>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-adjustments-horizontal"></i>
              </span>
              Programme adapté à l'âge et au niveau
            </li>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-brain"></i>
              </span>
              Préparation physique et mentale ciblée
            </li>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-mood-smile"></i>
              </span>
              Développement de la confiance en soi
            </li>
          </ul>
        </article>

        <article className="ysc-info-card ysc-info-card--modalities">
          <div className="ysc-info-card__icon-badge" aria-hidden="true">
            <i className="ti ti-clipboard-list"></i>
          </div>
          <h3>Modalités</h3>
          <ul>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-home-move"></i>
              </span>
              Cours privés à domicile disponibles pour toutes nos disciplines
            </li>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-map-pin"></i>
              </span>
              À domicile ou en extérieur selon vos préférences
            </li>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-award"></i>
              </span>
              Encadrement par des coachs certifiés
            </li>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-calendar-time"></i>
              </span>
              Flexibilité horaire — week-end inclus
            </li>
            <li>
              <span className="ysc-info-card__li-badge">
                <i className="ti ti-phone"></i>
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

      {/* ── 4. SOCIAL PROGRAM ────────────────────────────────────────────── */}
      <section className="ysc-social-section" aria-labelledby="social-heading">
        <div className="ysc-social-section__inner">
          <div className="ysc-social-header">
            <SectionLabel>Engagement</SectionLabel>
            <h2 id="social-heading" className="ysc-social-heading">
              ❤️ PROGRAMME SOCIAL YSC
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

      {/* 3f. Final CTA */}
      <div className="ysc-private__cta">
        <p className="ysc-private__cta-text">Prêt à passer au niveau supérieur ?</p>
        <a href="#registration-form" onClick={scrollToForm} className="ysc-btn ysc-btn--primary">
          <span>Réserver une séance privée</span>
          <span className="ysc-btn__arrow" aria-hidden="true">
            →
          </span>
        </a>
        {/* <p className="ysc-private__cta-note">
          Réponse sous 24h • Première séance découverte offerte
        </p> */}
      </div>
    </section>
  </>
);
};
