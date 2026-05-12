import { useEffect, useState } from "react";

const useGenreMovies = (fetchFunction) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchFunction();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [fetchFunction]);

  return { movies, loading };
};

export default useGenreMovies;