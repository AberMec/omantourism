/**
 * api.js — Centralized API service layer.
 * Base URL will point to the live backend after deployment.
 * Currently returns mock/local data for frontend development.
 */

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

/**
 * Generic fetch wrapper with JSON handling and error throwing.
 */
async function request(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message || `Request failed: ${res.status}`);
  }

  return res.json();
}

/* ===== ADVENTURES ===== */
export const adventuresAPI = {
  getAll: () => request("/adventures"),
  getById: (id) => request(`/adventures/${id}`),
};

/* ===== BOOKINGS ===== */
export const bookingsAPI = {
  create: (payload) =>
    request("/bookings", { method: "POST", body: JSON.stringify(payload) }),
  getMyBookings: (token) =>
    request("/bookings/me", { headers: { Authorization: `Bearer ${token}` } }),
};

/* ===== AIRPORT PICKUP ===== */
export const pickupAPI = {
  create: (payload) =>
    request("/pickup", { method: "POST", body: JSON.stringify(payload) }),
};

/* ===== CONTACT ===== */
export const contactAPI = {
  send: (payload) =>
    request("/contact", { method: "POST", body: JSON.stringify(payload) }),
};

/* ===== AUTH (post-deployment) ===== */
export const authAPI = {
  login: (credentials) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
  register: (data) =>
    request("/auth/register", { method: "POST", body: JSON.stringify(data) }),
  logout: () => request("/auth/logout", { method: "POST" }),
};

export default { adventuresAPI, bookingsAPI, pickupAPI, contactAPI, authAPI };
