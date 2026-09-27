import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { api } from "../api";
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
  const [auth, setAuth] = useState(() => api.getAuth());

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const logout = () => {
    api.logout();
    setAuth(null);
    setIsMenuOpen(false);
  };

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
        {auth ? (
          <button type="button" className="nav-auth nav-auth--logout" onClick={logout}>
            Déconnexion
          </button>
        ) : (
          <NavLink to="/connexion" className="nav-auth" onClick={() => setIsMenuOpen(false)}>
            Connexion
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
