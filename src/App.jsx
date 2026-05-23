import React, { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ConditionsGeneralesUtilisation from "./Components/ConditionsGeneralesUtilisation";
import PolitiqueProtectionDonneesPersonnelles from "./Components/PolitiqueProtectionDonneesPersonnelles";
import { EventsPage } from "./Components/EventsPage";
import { JoinClubPage } from "./Components/JoinClubPage";
import { PartnersPage } from "./Components/PartnersPage";
import { ResultsPage } from "./Components/ResultsPage";
import { TrainingSessionsPage } from "./Components/TrainingSessionsPage";
import "./styles.css";

const Layout = ({ children }) => (
  <div id="main">
    <Header />
    <main className="page-content">{children}</main>
    <Footer />
  </div>
);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => (
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/a-propos"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route path="/disciplines" element={<Navigate to="/entrainements" replace />} />
      <Route path="/cours-prives" element={<Navigate to="/rejoindre" replace />} />
      <Route
        path="/rejoindre"
        element={
          <Layout>
            <JoinClubPage />
          </Layout>
        }
      />
      <Route path="/tarifs" element={<Navigate to="/rejoindre" replace />} />
      <Route
        path="/evenements"
        element={
          <Layout>
            <EventsPage />
          </Layout>
        }
      />
      <Route
        path="/resultats"
        element={
          <Layout>
            <ResultsPage />
          </Layout>
        }
      />
      <Route
        path="/entrainements"
        element={
          <Layout>
            <TrainingSessionsPage />
          </Layout>
        }
      />
      <Route
        path="/partenaires"
        element={
          <Layout>
            <PartnersPage />
          </Layout>
        }
      />
      <Route path="/contact" element={<Navigate to="/a-propos" replace />} />
      <Route
        path="/politique-confidentialite"
        element={
          <Layout>
            <PolitiqueProtectionDonneesPersonnelles />
          </Layout>
        }
      />
      <Route
        path="/conditions-utilisation"
        element={
          <Layout>
            <ConditionsGeneralesUtilisation />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;
