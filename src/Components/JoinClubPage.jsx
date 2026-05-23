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
import { useLocation } from "react-router-dom";
import videoSrc from "url:../images/cours-prive.mp4";
import galleryA from "../images/472902518_601111642868247_3421823822486160063_n.jpg";
import championImg from "../images/chamipon.jpeg";
import galleryLarge from "../images/Screenshot 2026-05-17 124137.png";
import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import testimonialImg from "../images/WhatsApp Image 2026-05-16 at 17.46.33.jpeg";
import { Badge, FeatureRow, scoped, SectionLabel } from "./Pages";

// ─── CSS supplémentaire spécifique à ce fichier ────────────────────────────
// (les styles de base viennent de Pages.jsx via <style>{scoped}</style>)

const extraScoped = `
  .ysc-form-section__inner {
    max-width: 1100px;
  }

  .ysc-form-split {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 2.5rem;
    align-items: start;
  }

  /* ── Formulaire multi-blocs ── */
  .ysc-form-block {
    margin-bottom: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid #e8f0fb;
  }

  .ysc-form-block:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .ysc-form-section-title {
    font-size: 1rem;
    font-weight: 800;
    color: var(--ysc-primary-dark);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .ysc-form-section-title::before {
    content: attr(data-num);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background: var(--ysc-primary);
    color: #fff;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 800;
    flex-shrink: 0;
  }

  .ysc-form-hint {
    font-size: 0.88rem;
    color: var(--ysc-text-light);
    line-height: 1.55;
    background: #f3f8ff;
    border-left: 3px solid var(--ysc-primary);
    border-radius: 0 8px 8px 0;
    padding: 0.75rem 1rem;
    margin: 0;
  }

  /* ── Grille formulaire 2 colonnes ── */
  .ysc-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .ysc-form-grid .ysc-field--full {
    grid-column: 1 / -1;
  }

  /* ── Radio group amélioré (wrap pour listes longues) ── */
  .ysc-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.5rem;
    margin-top: 0.5rem;
  }

  .ysc-radio-item {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    cursor: pointer;
    font-size: 0.93rem;
    color: var(--ysc-text);
  }

  .ysc-radio-item input[type="radio"] {
    accent-color: var(--ysc-primary);
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  /* ── Checkbox ── */
  .ysc-checkbox-field {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    cursor: pointer;
  }

  .ysc-checkbox-field input[type="checkbox"] {
    accent-color: var(--ysc-primary);
    width: 18px;
    height: 18px;
    margin-top: 2px;
    flex-shrink: 0;
    cursor: pointer;
  }

  .ysc-checkbox-text {
    font-size: 0.9rem;
    color: var(--ysc-text);
    line-height: 1.5;
  }

  /* ── Submit ── */
  .ysc-btn--full { width: 100%; }

  .ysc-submit-area {
    margin-top: 2rem;
  }

  .ysc-form-note {
    text-align: center;
    font-size: 0.82rem;
    color: var(--ysc-text-light);
    margin-top: 1rem;
  }

  /* ── Témoignage ── */
  .ysc-testimonial-wrapper--form {
    margin: 0;
  }

  .ysc-testimonial--form {
    flex-direction: column;
    text-align: center;
    padding: 2.25rem;
  }

  .ysc-testimonial--form .ysc-testimonial__avatar-wrap {
    width: 96px;
    height: 96px;
    margin: 0 auto 1.25rem;
  }

  .ysc-testimonial--form .ysc-testimonial__quote {
    font-size: 1.1rem;
  }

  /* ── Programme social ── */
  .ysc-social-objective {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem;
    background: #fff8ef;
    border-radius: 12px;
    border: 1px dashed #ef7d22;
  }

  .ysc-social-obj-icon {
    font-size: 1.4rem;
    color: #ef7d22;
    flex-shrink: 0;
    padding-top: 3px;
  }

  .ysc-social-objective p {
    font-size: 0.95rem;
    color: #6c4622;
    margin: 0;
    line-height: 1.55;
  }

  /* ── CTA final ── */
  .ysc-final-cta {
    padding: 5rem 1rem;
    background: var(--ysc-white);
  }

  .ysc-final-cta__inner {
    text-align: center;
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

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .ysc-form-split {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 700px) {
    .ysc-form-grid {
      grid-template-columns: 1fr;
    }
    .ysc-form-grid .ysc-field--full {
      grid-column: 1;
    }
  }
`;

// ─── Helpers ───────────────────────────────────────────────────────────────

const getAgeCategory = (dob) => {
  if (!dob) return "";
  const age = 2026 - new Date(dob).getFullYear();
  if (age <= 6)  return "4-6";
  if (age <= 9)  return "7-9";
  if (age <= 11) return "10-11";
  if (age <= 14) return "12-14";
  if (age <= 17) return "15-17";
  return "18+";
};

const formatDate = (value) =>
  value ? value.split("-").reverse().join("/") : "";

const safeVal = (v) => (v ? v : "-");

// ─── Join Club Page ─────────────────────────────────────────────────────────

export const JoinClubPage = () => {
  const defaultDate = new Date().toISOString().slice(0, 10);
  const location = useLocation();

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

  // ── Sync age category when dob changes ──
  useEffect(() => {
    const autoCategory = getAgeCategory(formData.dob);
    if (autoCategory) {
      setFormData((prev) => ({ ...prev, ageCategory: autoCategory }));
    }
  }, [formData.dob]);

  // ── Scroll to form from URL hash ──
  useEffect(() => {
    if (location.hash === "#registration-form") {
      document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "scholarship" && value !== "yes") next.scholarshipType = "";
      if (name === "parentName" && !prev.agreementName)  next.agreementName = value;
      return next;
    });
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
      }[formData.level] || "-";

      const ageLabel = {
        "4-6":  "4–6 (Éveil)",
        "7-9":  "7–9 (Benjamin)",
        "10-11":"10–11 (Minime)",
        "12-14":"12–14 (Cadet)",
        "15-17":"15–17 (Junior)",
        "18+":  "18+ (Senior)",
      }[formData.ageCategory] || "-";

      const sexLabel =
        formData.sex === "M" ? "Masculin" : formData.sex === "F" ? "Féminin" : "-";

      const scholarshipLabel =
        formData.scholarship === "yes" ? "Oui" : formData.scholarship === "no" ? "Non" : "-";

      const scholarshipTypeLabel = {
        bourse50: "Bourse 50 % sur la mensualité",
        "entrainement-gratuit": "Entraînement gratuit",
      }[formData.scholarshipType] || "-";

      const paymentLabel = {
        seance:  "Paiement par séance",
        mensuel: "Paiement mensuel",
        forfait: "Forfait saison complète",
      }[formData.paymentMode] || "-";

      const lines = [
        "Bonjour Youth Sports Club,",
        "",
        "── Nouvelle demande d'inscription 2026 ──",
        "",
        "Gymnaste",
        `Nom : ${safeVal(formData.athleteLastName)}`,
        `Prénoms : ${safeVal(formData.athleteFirstName)}`,
        `Date de naissance : ${safeVal(formatDate(formData.dob))}`,
        `Sexe : ${sexLabel}`,
        `Nationalité : ${safeVal(formData.nationality)}`,
        `Établissement : ${safeVal(formData.school)}`,
        `Classe : ${safeVal(formData.classLevel)}`,
        `Adresse : ${safeVal(formData.address)}`,
        "",
        "Parent / tuteur légal",
        `Nom : ${safeVal(formData.parentName)}`,
        `Lien : ${safeVal(formData.parentRelation)}`,
        `Téléphone : ${safeVal(formData.parentPhone)}`,
        `Email : ${safeVal(formData.parentEmail)}`,
        "",
        "Informations sportives",
        `Niveau : ${levelLabel}`,
        `Catégorie d'âge : ${ageLabel}`,
        `Discipline : ${safeVal(formData.discipline)}`,
        "",
        "Programme YSC",
        `Boursier : ${scholarshipLabel}`,
        `Type de bourse : ${scholarshipTypeLabel}`,
        "",
        "Paiement",
        `Mode : ${paymentLabel}`,
        "",
        "Engagement financier",
        `Signataire : ${safeVal(formData.agreementName || formData.parentName)}`,
        `Date : ${safeVal(formatDate(formData.agreementDate))}`,
        `Signature : ${safeVal(formData.signature || formData.agreementName)}`,
      ];

      const url = `https://wa.me/22891534885?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank");
      setSubmissionMessage("✅ Demande envoyée sur WhatsApp.");
    } catch {
      setSubmissionMessage("❌ Impossible d'ouvrir WhatsApp. Réessayez ou contactez le club.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  // ── Radio field helper ──
  const RadioGroup = ({ name, options, required = false }) => (
    <div className="ysc-radio-group">
      {options.map(({ value, label }) => (
        <label className="ysc-radio-item" key={value}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={formData[name] === value}
            onChange={handleInputChange}
            required={required}
          />
          {label}
        </label>
      ))}
    </div>
  );

  return (
    <>
      {/* styles importés du fichier Pages + styles spécifiques à ce composant */}
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
          <div className="ysc-chip ysc-chip--topleft">+100 membres actifs</div>
          <div className="ysc-chip ysc-chip--bottomright">Suivi personnalisé</div>
        </div>

        <div className="ysc-join-hero__content-col">
          <SectionLabel>Inscriptions</SectionLabel>
          <h1 className="ysc-join-hero__title">
            Rejoignez le<br />
            <em>Youth Sports Club</em>
          </h1>
          <p className="ysc-join-hero__desc">
            Recevez un encadrement sportif d'excellence — un suivi pédagogique, sécurisé et adapté
            à tous les niveaux.
          </p>

          <div className="ysc-qualif-block">
            <Badge>Encadrement Qualifié</Badge>
            <p className="ysc-qualif-text">
              Licence STAPS · Diplôme FIG Niveau 1 · Certifications boxe éducative, fitness et
              cross-training
            </p>
          </div>

          <ul className="ysc-benefits-strip" aria-label="Avantages">
            <FeatureRow icon={<FontAwesomeIcon icon={faPersonRunning} />} text="Programme sur mesure" />
            <FeatureRow icon={<FontAwesomeIcon icon={faArrowTrendUp} />}  text="Progression mesurable" />
            <FeatureRow icon={<FontAwesomeIcon icon={faUsers} />}         text="Communauté bienveillante" />
          </ul>
        </div>
      </section>

      {/* ─── 2. FORMULAIRE D'INSCRIPTION ───────────────────────────────── */}
      <section id="registration-form" className="ysc-form-section" aria-labelledby="form-heading">
        <div className="ysc-form-section__inner">

          <div className="ysc-form-header">
            <Badge>Inscription gratuite</Badge>
            <h2 id="form-heading" className="ysc-form-heading">Rejoindre le club</h2>
          </div>

          <div className="ysc-form-split">
            <form className="ysc-form" onSubmit={handleSubmit} noValidate>

            {/* ── Bloc 1 : Gymnaste ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="1">Informations du gymnaste</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label htmlFor="athleteLastName">Nom</label>
                  <input
                    id="athleteLastName" name="athleteLastName" type="text"
                    value={formData.athleteLastName} onChange={handleInputChange} required
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="athleteFirstName">Prénoms</label>
                  <input
                    id="athleteFirstName" name="athleteFirstName" type="text"
                    value={formData.athleteFirstName} onChange={handleInputChange} required
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="dob">Date de naissance</label>
                  <input
                    id="dob" name="dob" type="date"
                    value={formData.dob} onChange={handleInputChange} required
                  />
                </div>

                <div className="ysc-field">
                  <label>Sexe</label>
                  <RadioGroup
                    name="sex"
                    required
                    options={[
                      { value: "M", label: "Masculin" },
                      { value: "F", label: "Féminin" },
                    ]}
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="nationality">Nationalité</label>
                  <input
                    id="nationality" name="nationality" type="text"
                    value={formData.nationality} onChange={handleInputChange}
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="school">Établissement scolaire</label>
                  <input
                    id="school" name="school" type="text"
                    value={formData.school} onChange={handleInputChange}
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="classLevel">Classe</label>
                  <input
                    id="classLevel" name="classLevel" type="text"
                    value={formData.classLevel} onChange={handleInputChange}
                  />
                </div>

                <div className="ysc-field ysc-field--full">
                  <label htmlFor="address">Adresse complète</label>
                  <textarea
                    id="address" name="address" rows={3}
                    value={formData.address} onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* ── Bloc 2 : Parent / tuteur ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="2">Parent / tuteur légal</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label htmlFor="parentName">Nom &amp; Prénoms</label>
                  <input
                    id="parentName" name="parentName" type="text"
                    value={formData.parentName} onChange={handleInputChange} required
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="parentRelation">Lien avec l'enfant</label>
                  <input
                    id="parentRelation" name="parentRelation" type="text"
                    placeholder="Père, Mère, Tuteur…"
                    value={formData.parentRelation} onChange={handleInputChange}
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="parentPhone">Téléphone (WhatsApp)</label>
                  <input
                    id="parentPhone" name="parentPhone" type="tel"
                    placeholder="+228 90 00 00 00"
                    value={formData.parentPhone} onChange={handleInputChange} required
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="parentEmail">Email</label>
                  <input
                    id="parentEmail" name="parentEmail" type="email"
                    value={formData.parentEmail} onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* ── Bloc 3 : Informations sportives ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="3">Informations sportives</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label>Niveau / ancienneté</label>
                  <RadioGroup
                    name="level"
                    options={[
                      { value: "debutant",  label: "Débutant" },
                      { value: "1an",       label: "1 an" },
                      { value: "2ans",      label: "2 ans" },
                      { value: "3ansplus",  label: "3 ans et +" },
                    ]}
                  />
                </div>

                <div className="ysc-field">
                  <label>Catégorie d'âge</label>
                  <RadioGroup
                    name="ageCategory"
                    options={[
                      { value: "4-6",   label: "4–6 (Éveil)" },
                      { value: "7-9",   label: "7–9 (Benjamin)" },
                      { value: "10-11", label: "10–11 (Minime)" },
                      { value: "12-14", label: "12–14 (Cadet)" },
                      { value: "15-17", label: "15–17 (Junior)" },
                      { value: "18+",   label: "18+ (Senior)" },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* ── Bloc 4 : Discipline ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="4">Discipline pratiquée</h3>
              <div className="ysc-field">
                <RadioGroup
                  name="discipline"
                  required
                  options={[
                    { value: "Gymnastique", label: "Gymnastique" },
                    { value: "Boxe",        label: "Boxe" },
                    { value: "Fitness",     label: "Fitness" },
                  ]}
                />
              </div>
            </div>

            {/* ── Bloc 5 : Saison ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="5">Saison sportive 2026</h3>
              <p className="ysc-form-hint">
                Du 10 janvier 2026 au 5 décembre 2026. Durée des séances : 2 heures.
              </p>
            </div>

            {/* ── Bloc 6 : Statut social ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="6">Statut social – Programme YSC</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label>L'athlète est-il boursier ?</label>
                  <RadioGroup
                    name="scholarship"
                    required
                    options={[
                      { value: "yes", label: "Oui" },
                      { value: "no",  label: "Non" },
                    ]}
                  />
                </div>

                {formData.scholarship === "yes" && (
                  <div className="ysc-field">
                    <label>Catégorie de bourse (décision du club)</label>
                    <RadioGroup
                      name="scholarshipType"
                      required
                      options={[
                        { value: "bourse50",             label: "Bourse 50 % sur la mensualité" },
                        { value: "entrainement-gratuit", label: "Entraînement gratuit" },
                      ]}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* ── Bloc 7 : Modalités financières (info) ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="7">Modalités financières</h3>
              <p className="ysc-form-hint">
                Séance enfant : 7 000 FCFA · Séance adulte : 5 000 FCFA · Mensualité : 20 000 FCFA ·
                Forfait saison complète : 180 000 FCFA · Forfait fratrie (3 enfants et +) :
                15 000 FCFA / mois par enfant.
              </p>
            </div>

            {/* ── Bloc 8 : Mode de paiement ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="8">Mode de paiement</h3>
              <p className="ysc-form-hint" style={{ marginBottom: "1rem" }}>
                Choix obligatoire à l'inscription pour les non-boursiers.
              </p>
              <div className="ysc-field">
                <RadioGroup
                  name="paymentMode"
                  required
                  options={[
                    { value: "seance",  label: "Paiement par séance" },
                    { value: "mensuel", label: "Paiement mensuel" },
                    { value: "forfait", label: "Forfait saison complète" },
                  ]}
                />
              </div>
            </div>

            {/* ── Bloc 9 : Engagement financier ── */}
            <div className="ysc-form-block">
              <h3 className="ysc-form-section-title" data-num="9">Engagement financier</h3>
              <div className="ysc-form-grid">
                <div className="ysc-field">
                  <label htmlFor="agreementName">Nom et prénoms du parent / tuteur</label>
                  <input
                    id="agreementName" name="agreementName" type="text"
                    value={formData.agreementName} onChange={handleInputChange} required
                  />
                </div>

                <div className="ysc-field">
                  <label htmlFor="agreementDate">Date</label>
                  <input
                    id="agreementDate" name="agreementDate" type="date"
                    value={formData.agreementDate} onChange={handleInputChange} required
                  />
                </div>

                <div className="ysc-field ysc-field--full">
                  <label htmlFor="signature">Signature (nom complet)</label>
                  <input
                    id="signature" name="signature" type="text"
                    value={formData.signature} onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* ── Consentement + bouton ── */}
            <label className="ysc-checkbox-field">
              <input type="checkbox" required />
              <span className="ysc-checkbox-text">
                J'accepte d'être contacté via WhatsApp et j'autorise le traitement de ces données.
              </span>
            </label>

            <div className="ysc-submit-area">
              <button
                type="submit"
                className="ysc-btn ysc-btn--primary ysc-btn--full"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande d'inscription"}
                </span>
                <span aria-hidden="true">→</span>
              </button>

              {submissionMessage && (
                <p className="ysc-form-note">{submissionMessage}</p>
              )}

              <p className="ysc-form-note">
                🔒 Vos données sont confidentielles et ne seront jamais partagées.
              </p>
            </div>

            </form>

            <div className="ysc-testimonial-wrapper ysc-testimonial-wrapper--form" aria-label="Témoignage client">
              <figure className="ysc-testimonial ysc-testimonial--form">
                <div className="ysc-testimonial__avatar-wrap">
                  <img
                    src={testimonialImg}
                    alt="Cora-CW, Piper-Beckett et Mosa"
                    className="ysc-testimonial__avatar"
                  />
                </div>
                <div>
                  <span className="ysc-testimonial__stars" aria-label="5 étoiles">★★★★★</span>
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
          </div>
        </div>
      </section>

      {/* ─── 3. COURS PRIVÉS ───────────────────────────────────────────── */}
      <section className="ysc-private" aria-labelledby="private-heading">
        <div className="ysc-private__intro">
          <SectionLabel>Cours privés</SectionLabel>
          <h2 id="private-heading" className="ysc-private__title">
            Développez votre<br />
            <em>plein potentiel</em>
          </h2>
          <p className="ysc-private__subtitle">
            Séances individuelles adaptées à chaque objectif, niveau et rythme de vie.
          </p>
        </div>

        <div className="ysc-video-hero" aria-label="Vidéo de présentation des cours privés">
          <video className="ysc-video-hero__vid" src={videoSrc} autoPlay muted loop playsInline />
          <div className="ysc-video-hero__overlay" aria-hidden="true">
            <p className="ysc-video-hero__tagline">
              Coaching individuel · Tous niveaux · À domicile ou en extérieur
            </p>
          </div>
        </div>

        <div className="ysc-private__cards">
          <article className="ysc-info-card ysc-info-card--objectives">
            <div className="ysc-info-card__icon-badge" aria-hidden="true">
              <i className="ti ti-target-arrow"></i>
            </div>
            <h3>Objectifs</h3>
            <ul>
              {[
                { icon: "ti-chart-line",            text: "Progression technique accélérée" },
                { icon: "ti-adjustments-horizontal", text: "Programme adapté à l'âge et au niveau" },
                { icon: "ti-brain",                 text: "Préparation physique et mentale ciblée" },
                { icon: "ti-mood-smile",             text: "Développement de la confiance en soi" },
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
                { icon: "ti-home-move",     text: "Cours privés à domicile disponibles pour toutes nos disciplines" },
                { icon: "ti-map-pin",       text: "À domicile ou en extérieur selon vos préférences" },
                { icon: "ti-award",         text: "Encadrement par des coachs certifiés" },
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
                <a href="tel:+22891534885" className="ysc-tel-link">+228 91 53 48 85</a>
              </li>
            </ul>
          </article>
        </div>

        <div className="ysc-gallery" aria-label="Galerie photos des cours privés">
          <div className="ysc-gallery__large">
            <img src={galleryLarge} alt="Séance privée en action" />
          </div>
          <div className="ysc-gallery__stack">
            <img src={galleryA} alt="Entraînement individuel" />
            <img src={galleryB} alt="Coach et athlète en séance" />
          </div>
        </div>

        <div className="ysc-testimonial-wrapper" aria-label="Témoignage client">
          <figure className="ysc-testimonial">
            <div className="ysc-testimonial__avatar-wrap">
              <img
                src={testimonialImg}
                alt="Cora-CW, Piper-Beckett et Mosa"
                className="ysc-testimonial__avatar"
              />
            </div>
            <div>
              <span className="ysc-testimonial__stars" aria-label="5 étoiles">★★★★★</span>
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

      {/* ─── 4. PROGRAMME SOCIAL ── section frère ──────────────────────── */}
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
                <span><strong>Bourse de 50 %</strong> sur la mensualité</span>
              </li>
              <li>
                <span className="ysc-social-bullet">
                  <FontAwesomeIcon icon={faChildReaching} />
                </span>
                <span>
                  <strong>Entraînement gratuit</strong> possible pour les enfants issus de
                  familles en difficulté
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

      {/* ─── 5. CTA FINAL ── section frère ────────────────────────────── */}
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