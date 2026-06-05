import { useMemo } from "react";

export function useSeriesFilter(series, search, genre, status) {
  return useMemo(() => {
    return series.filter((show) => {
      const matchesSearch = show.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre = genre === "All" ? true : show.genre === genre;

      const matchesStatus = status === "All" ? true : show.status === status;

      return matchesSearch && matchesGenre && matchesStatus;
    });
  }, [series, search, genre, status]);
}
