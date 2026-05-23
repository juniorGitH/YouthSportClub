import galleryB from "../images/WhatsApp Image 2026-05-16 at 17.46.30.jpeg";
import { scoped, SectionLabel } from "./Pages";

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
