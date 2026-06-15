
import { useEffect, useState } from "react";

export const useMovies = (fetchFunction) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchFunction();
      setMovies(data);
    }

    loadMovies();
  }, [fetchFunction]);

  return movies;
};