const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5030/api";
const MEDIA_BASE = API_URL.endsWith("/api") ? API_URL.slice(0, -4) : API_URL;

const readError = async (response, fallback) => {
  try {
    const data = await response.json();
    if (data?.message) return data.message;
    if (typeof data?.title === "string") return data.title;
  } catch {
    /* réponse non JSON */
  }
  if (response.status === 401 || response.status === 403) {
    return "Session expirée ou accès refusé. Reconnectez-vous à l’administration.";
  }
  return fallback;
};

const request = async (path, options = {}, fallbackError = "Une erreur est survenue.") => {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, options);
  } catch {
    throw new Error("Impossible de joindre le serveur. Vérifiez que l’API est démarrée (port 5030).");
  }
  if (!response.ok) throw new Error(await readError(response, fallbackError));
  if (response.status === 204) return null;
  return response.json();
};

/** Corrige les URLs média (relatives, absolues, ou doublées par erreur). */
export const resolveMediaUrl = (url = "") => {
  if (!url || typeof url !== "string") return "";
  let value = url.trim();
  if (!value) return "";

  // Cas observé : http://localhost:5030http://localhost:5030/uploads/...
  while (/^https?:\/\/[^/]+https?:\/\//i.test(value)) {
    value = value.replace(/^https?:\/\/[^/]+/i, "");
  }

  const uploadsMatch = value.match(/\/uploads\/[^\s?#]+/);
  if (uploadsMatch) return `${MEDIA_BASE}${uploadsMatch[0]}`;

  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/")) return `${MEDIA_BASE}${value}`;
  return value;
};

export const api = {
  async login(email, password) {
    const data = await request("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }, "Connexion impossible.");
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
  getEvents() {
    return request("/events", {}, "Événements indisponibles.");
  },
  createEvent(event) {
    return request("/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...this.authHeaders() },
      body: JSON.stringify(event),
    }, "Impossible de créer l'événement.");
  },
  updateEvent(id, event) {
    return request(`/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...this.authHeaders() },
      body: JSON.stringify({ ...event, id }),
    }, "Impossible de modifier l'événement.");
  },
  deleteEvent(id) {
    return request(`/events/${id}`, {
      method: "DELETE",
      headers: this.authHeaders(),
    }, "Impossible de supprimer l'événement.");
  },
  getContent(page) {
    return request(`/content/${encodeURIComponent(page)}`, {}, "Contenu indisponible.");
  },
  saveContent(page, key, value) {
    return request("/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...this.authHeaders() },
      body: JSON.stringify({ page, key, value }),
    }, "Impossible d'enregistrer le contenu.");
  },
  deleteContent(page, key) {
    const params = new URLSearchParams({ key });
    return request(`/content/${encodeURIComponent(page)}?${params}`, {
      method: "DELETE",
      headers: this.authHeaders(),
    }, "Impossible de supprimer ce contenu.");
  },
  async uploadPhoto(file) {
    if (!file) throw new Error("Aucun fichier sélectionné.");
    const body = new FormData();
    const filename = file.name || `photo-${Date.now()}.jpg`;
    body.append("file", file, filename);
    const data = await request("/media/photos", {
      method: "POST",
      headers: this.authHeaders(),
      body,
    }, "Impossible d'importer la photo.");
    // Toujours reconstruire depuis le chemin relatif pour éviter les URLs doublées
    const relative = data.path || data.url || "";
    return resolveMediaUrl(relative);
  },
};
