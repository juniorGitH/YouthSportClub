import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/rejoindre">Rejoindre le club</Link>
        <Link to="/evenements">Événements</Link>
        <Link to="/resultats">Résultats</Link>
        <Link to="/entrainements">Entraînements</Link>
        <Link to="/partenaires">Partenaires</Link>
      </div>
      <p>Youth Sports Club (YSC) • Lomé • Sport, bien-être et excellence</p>
    </footer>
  );
};

export default Footer;
