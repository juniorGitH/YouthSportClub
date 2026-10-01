import React from "react";
import { Link } from "react-router-dom";
import { linesOf, paragraphsOf, pipeRows, usePageBlocks } from "./usePageContent";
import historyTeamImage from "../images/WhatsApp Image 2026-05-16 at 16.18.39.jpeg";
import figCertifiedImage from "../images/WhatsApp Image 2026-05-16 at 16.12.14 (1).jpeg";
import stapsImageOne from "../images/WhatsApp Image 2026-05-19 at 11.58.31.jpeg";
import stapsImageTwo from "../images/WhatsApp Image 2026-05-19 at 12.32.39.jpeg";
import combatImageOne from "../images/WhatsApp Image 2026-04-10 at 22.00.43 (1)-Bswh1-OT.jpeg";
import combatImageTwo from "../images/WhatsApp Image 2026-05-22 at 15.06.55.jpeg";
import combatImageThree from "../images/WhatsApp Image 2026-05-22 at 15.07.50.jpeg";
import prepImage from "../images/WhatsApp Image 2026-05-22 at 15.20.21 (1).jpeg";

/* images de secours pour les coachs */
const coachFallbacks = {
  "coaches-fig": figCertifiedImage,
  "coaches-staps-1": stapsImageOne,
  "coaches-staps-2": stapsImageTwo,
  "coaches-combat-1": combatImageOne,
  "coaches-combat-2": combatImageTwo,
  "coaches-combat-3": combatImageThree,
  "coaches-prep": prepImage,
  intro: historyTeamImage,
};

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
  const { block } = usePageBlocks("a-propos");
  const img = (key) => block(key).image || coachFallbacks[key];

  const intro = block("intro");
  const introParts = paragraphsOf(intro.text);
  const performance = block("performance");
  const performanceLines = linesOf(performance.text);
  const performanceIntro = performanceLines[0] || "";
  const palmares = pipeRows(performanceLines.slice(1).join("\n")).map((row) => ({
    label: row.label,
    detail: row.value,
  }));

  const history = block("history");
  const historyLines = linesOf(history.text);
  const historyIntro = historyLines[0]?.includes("|") ? "" : historyLines[0] || "";
  const timeline = pipeRows(historyLines.filter((line) => line.includes("|")).join("\n") || historyLines.slice(historyIntro ? 1 : 0).join("\n"))
    .map((row) => ({ year: row.label, event: row.value }));

  const axesBlock = block("axes");
  const axesLines = linesOf(axesBlock.text);
  const axesIntro = axesLines[0]?.includes("|") ? "" : axesLines[0] || "";
  const axes = (axesIntro ? axesLines.slice(1) : axesLines).map((line, index) => {
    const parts = line.split("|").map((part) => part.trim());
    return {
      num: String(index + 1).padStart(2, "0"),
      title: parts[0] || "",
      desc: parts[1] || "",
      disciplines: (parts[2] || "").split(",").map((item) => item.trim()).filter(Boolean),
    };
  });

  const coachesIntro = block("coaches-intro");
  const socialBlock = block("social");
  const socialLines = linesOf(socialBlock.text);
  const socialIntro = socialLines[0]?.includes("|") ? "" : socialLines[0] || "";
  const social = pipeRows((socialIntro ? socialLines.slice(1) : socialLines).join("\n")).map((row) => ({
    label: row.label,
    desc: row.value,
  }));

  const contact = block("contact");
  const contactLines = linesOf(contact.text);
  const contactIntro = contactLines[0]?.includes("|") ? "" : contactLines[0] || "";
  const contactRows = pipeRows((contactIntro ? contactLines.slice(1) : contactLines).join("\n"));
  const cta = block("cta");

  return (
    <>
      <style>{scoped}</style>

      {/* ══ PRÉSENTATION ══ */}
      <section className="section">
        <div className="section-header">
          <h2>{intro.title}</h2>
          {introParts[0] && <p>{introParts[0]}</p>}
        </div>
        <div className="about-intro-layout">
          <p className="about-intro-text">{introParts[1] || introParts[0] || ""}</p>
          <div className="about-team-image-wrap">
            <img
              src={img("intro")}
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
          <h2>{performance.title}</h2>
          <p>{performanceIntro}</p>
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
          <h2>{history.title}</h2>
          <p>{historyIntro || "Les grandes étapes du Youth Sports Club depuis sa fondation."}</p>
        </div>
        <div className="about-timeline">
          {timeline.map((t, i) => (
            <div className="about-tl-item" key={`${t.year}-${i}`}>
              <div className="about-tl-year">{t.year}</div>
              <div className="about-tl-event">{t.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ AXES ══ */}
      <section className="section">
        <div className="section-header">
          <h2>{axesBlock.title}</h2>
          <p>{axesIntro}</p>
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
          <h2>{coachesIntro.title}</h2>
          <p>{coachesIntro.text}</p>
        </div>
        <div className="grid two-columns">
          <div className="about-coach-card">
            <img src={img("coaches-fig")} alt="Coachs certifiés FIG" className="about-coach-image" loading="lazy" />
            <h3>{block("coaches-fig").title}</h3>
            <p>{block("coaches-fig").text}</p>
          </div>
          <div className="about-coach-card">
            <div className="about-coach-gallery">
              <img src={img("coaches-staps-1")} alt="Diplômés STAPS – photo 1" className="about-coach-gallery-image" loading="lazy" />
              <img src={img("coaches-staps-2")} alt="Diplômés STAPS – photo 2" className="about-coach-gallery-image" loading="lazy" />
            </div>
            <h3>{block("coaches-staps-1").title}</h3>
            <p>{block("coaches-staps-1").text}</p>
          </div>
          <div className="about-coach-card">
            <div className="about-coach-gallery">
              <img src={img("coaches-combat-1")} alt="Sports de combat – photo 1" className="about-coach-gallery-image" loading="lazy" />
              <img src={img("coaches-combat-2")} alt="Sports de combat – photo 2" className="about-coach-gallery-image" loading="lazy" />
              <img src={img("coaches-combat-3")} alt="Sports de combat – photo 3" className="about-coach-gallery-image" loading="lazy" />
            </div>
            <h3>{block("coaches-combat-1").title}</h3>
            <p>{block("coaches-combat-1").text}</p>
          </div>
          <div className="about-coach-card">
            <img src={img("coaches-prep")} alt="Préparation physique" className="about-coach-image" loading="lazy" />
            <h3>{block("coaches-prep").title}</h3>
            <p>{block("coaches-prep").text}</p>
          </div>
        </div>
      </section>

      {/* ══ ENGAGEMENT SOCIAL ══ */}
      <section className="section">
        <div className="section-header">
          <h2>{socialBlock.title}</h2>
          <p>{socialIntro}</p>
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
          <h2>{contact.title}</h2>
          <p>{contactIntro}</p>
        </div>
        <div className="about-contact-grid">
          {contactRows.map((row) => {
            const isPhone = /téléphone|telephone/i.test(row.label);
            const isEmail = /email|mail/i.test(row.label);
            return (
              <div className="about-contact-card" key={row.label}>
                <h3>{row.label}</h3>
                <p>
                  {isPhone
                    ? row.value.split("/").map((part, index, all) => {
                        const phone = part.trim();
                        const digits = phone.replace(/[^\d+]/g, "");
                        return (
                          <span key={phone}>
                            <a href={`tel:${digits}`}>{phone}</a>
                            {index < all.length - 1 ? " / " : ""}
                          </span>
                        );
                      })
                    : isEmail
                      ? <a href={`mailto:${row.value}`}>{row.value}</a>
                      : row.value.split(",").map((part, index) => (
                          <span key={part}>{index > 0 ? <br /> : null}{part.trim()}</span>
                        ))}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section">
        <div className="wide">
          <div className="about-cta">
            <h2>{cta.title}</h2>
            <p>{cta.text}</p>
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