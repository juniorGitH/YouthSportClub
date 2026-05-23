import championImg from "../images/chamipon.jpeg";
import { scoped, SectionLabel } from "./Pages";

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
