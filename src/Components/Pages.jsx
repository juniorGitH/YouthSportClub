// ─── Shared styles & helpers ────────────────────────────────────────────────

export const Badge = ({ children }) => <span className="ysc-badge">{children}</span>;

export const SectionLabel = ({ children }) => <p className="ysc-section-label">{children}</p>;

export const FeatureRow = ({ icon, text }) => (
  <li className="ysc-feature-row">
    <span className="ysc-feature-icon" aria-hidden="true">
      {icon}
    </span>
    <span>{text}</span>
  </li>
);

export const scoped = `
  /* -- Variables & Utilities -- */
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

  /* -- General -- */
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

  /* -- 1. Hero Split -- */
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

  /* -- 2. Form Section -- */
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

  /* -- 3. Private Section -- */
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

  /* -- 4. Social Section -- */
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

  /* -- 5. CTA Final -- */
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

  /* -- Sub-pages (Events, Training, Results, Partners) -- */
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

  /* -- Responsive -- */
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
