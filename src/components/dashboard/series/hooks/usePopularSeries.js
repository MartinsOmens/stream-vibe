import { useEffect, useState } from "react";
import { getPopularSeries } from "../../../../api/tmdb";

export default function usePopularSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPopularSeries();

        setSeries(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    series,
    loading,
  };
}