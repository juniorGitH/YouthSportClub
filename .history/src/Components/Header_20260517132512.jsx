import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// Renamed asset to remove spaces/parentheses for compatibility
import logoClub from "../images/logo-2.png";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/rejoindre", label: "Rejoindre" },
  { to: "/evenements", label: "Événements" },
  { to: "/entrainements", label: "Entraînements" },
  { to: "/a-propos", label: "À propos" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = location.pathname === "/" && isAtTop;

  return (
    <header className={`site-header ${isTransparent ? "transparent" : ""}`}>
      <NavLink to="/" className="brand" onClick={() => setIsMenuOpen(false)}>
        <img className="brand-logo" src={logoClub} alt="Logo Youth Sports Club" />
        <span>Youth Sports Club</span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Ouvrir le menu"
      >
        ☰
      </button>

      <nav className={`site-nav ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
