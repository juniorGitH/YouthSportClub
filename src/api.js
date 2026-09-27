const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5030/api";

export const api = {
  async login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Connexion impossible.");
    localStorage.setItem("ysc_auth", JSON.stringify(data));
    return data;
  },
  logout() {
    localStorage.removeItem("ysc_auth");
  },
  getAuth() {
    try {
      return JSON.parse(localStorage.getItem("ysc_auth") || "null");
    } catch {
      return null;
    }
  },
  authHeaders() {
    const auth = this.getAuth();
    return auth?.token ? { Authorization: `Bearer ${auth.token}` } : {};
  },
  async getEvents() {
    const response = await fetch(`${API_URL}/events`);
    if (!response.ok) throw new Error("Événements indisponibles.");
    return response.json();
  },
  async createEvent(event) {
    const response = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...this.authHeaders() },
      body: JSON.stringify(event),
    });
    if (!response.ok) throw new Error("Impossible de créer l'événement.");
    return response.json();
  },
  async updateEvent(id, event) {
    const response = await fetch(`${API_URL}/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...this.authHeaders() },
      body: JSON.stringify({ ...event, id }),
    });
    if (!response.ok) throw new Error("Impossible de modifier l'événement.");
    return response.json();
  },
  async deleteEvent(id) {
    const response = await fetch(`${API_URL}/events/${id}`, {
      method: "DELETE",
      headers: this.authHeaders(),
    });
    if (!response.ok) throw new Error("Impossible de supprimer l'événement.");
  },
  async getContent(page) {
    const response = await fetch(`${API_URL}/content/${encodeURIComponent(page)}`);
    if (!response.ok) throw new Error("Contenu indisponible.");
    return response.json();
  },
  async saveContent(page, key, value) {
    const response = await fetch(`${API_URL}/content`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...this.authHeaders() },
      body: JSON.stringify({ page, key, value }),
    });
    if (!response.ok) throw new Error("Impossible d'enregistrer le contenu.");
    return response.json();
  },
  async deleteContent(page, key) {
    const response = await fetch(`${API_URL}/content/${encodeURIComponent(page)}/${encodeURIComponent(key)}`, {
      method: "DELETE", headers: this.authHeaders(),
    });
    if (!response.ok) throw new Error("Impossible de supprimer ce contenu.");
  },
  async uploadPhoto(file) {
    const body = new FormData();
    body.append("file", file);
    const response = await fetch(`${API_URL}/media/photos`, {
      method: "POST", headers: this.authHeaders(), body,
    });
    if (!response.ok) throw new Error("Impossible d'importer la photo.");
    const data = await response.json();
    const baseUrl = API_URL.endsWith("/api") ? API_URL.slice(0, -4) : API_URL;
    return `${baseUrl}${data.url}`;
  },
};
