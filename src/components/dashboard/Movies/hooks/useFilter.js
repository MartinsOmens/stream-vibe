import { useMemo } from "react";

export function useMovieFilter(movies, search, category) {
    
  return useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ? true : movie.category === category;

      return matchesSearch && matchesCategory;
    });

  }, [movies, search, category]);
}
