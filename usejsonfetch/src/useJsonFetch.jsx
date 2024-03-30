import { useState, useEffect } from 'react';

function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (e) {
        setError(e);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [data, loading, error];
}

export default useJsonFetch;
