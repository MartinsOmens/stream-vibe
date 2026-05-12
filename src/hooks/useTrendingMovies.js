import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/tmdb";

const useTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();

        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return { movies, loading };
};

export default useTrendingMovies;