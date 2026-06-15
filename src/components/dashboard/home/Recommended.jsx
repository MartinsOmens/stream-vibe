import MovieCard from "./MovieCard";
import { recommendedMovies } from "./movieData";
import { fetchPopularMovies } from "../../../api/tmdb";
import { useMovies } from "../../../hooks/dashboard/useMovies.js";


export default function Recommended() {
  const movies = useMovies(fetchPopularMovies);
  if (!movies.length) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Popular Movies </h2>

        <button className="text-[#E50000]">View All</button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            image={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
            title={movie.title}
            subtitle={`${movie.genre} • ⭐ ${movie.rating}`}
          />
        ))}
      </div>
    </section>
  );
}
