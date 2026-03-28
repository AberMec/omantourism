/**
 * Calculate the average rating from an array of review scores.
 * @param {number[]} ratings - Array of numeric rating values
 * @returns {string} - Average formatted to 1 decimal place
 */
export function calculateRating(ratings = []) {
  if (!ratings.length) return "0.0";
  const sum = ratings.reduce((acc, r) => acc + r, 0);
  return (sum / ratings.length).toFixed(1);
}

/**
 * Generate star display string (e.g., "★★★★☆") from a rating.
 * @param {number} rating - 0 to 5
 * @returns {string}
 */
export function starsFromRating(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}
