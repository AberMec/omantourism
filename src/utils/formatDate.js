/**
 * Format a date string or Date object into a readable format.
 * @param {string|Date} date
 * @param {string} locale - default 'en-OM'
 * @returns {string}
 */
export function formatDate(date, locale = "en-OM") {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format a date to a short form: e.g., "26 Mar 2026"
 */
export function formatDateShort(date) {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Returns today's date as an ISO string (YYYY-MM-DD) — useful for date input min values.
 */
export function todayISO() {
  return new Date().toISOString().split("T")[0];
}
