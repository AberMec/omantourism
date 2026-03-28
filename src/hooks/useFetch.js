import { useState, useEffect } from "react";

/**
 * useFetch — generic data fetching hook.
 * Ready for use once the backend API is deployed.
 *
 * @param {string|null} url - The endpoint to fetch (null = skip)
 * @param {RequestInit} options - Fetch options (method, headers, body, etc.)
 * @returns {{ data, loading, error, refetch }}
 */
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(url, {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, trigger]);

  const refetch = () => setTrigger((t) => t + 1);

  return { data, loading, error, refetch };
}

export default useFetch;
