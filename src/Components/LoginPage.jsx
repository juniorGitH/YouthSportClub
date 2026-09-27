import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../api";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.login(form.email, form.password);
      navigate(location.state?.from || "/admin", { replace: true });
    } catch (reason) {
      setError(reason.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <p className="ysc-section-label">Espace équipe</p>
        <h1>Connexion</h1>
        <p className="auth-intro">Accédez à l’administration du site Youth Sports Club.</p>
        <form onSubmit={submit} className="auth-form">
          <label>
            Adresse e-mail
            <input
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </label>
          <label>
            Mot de passe
            <input
              type="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
            />
          </label>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="btn btn-primary auth-submit" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
