import MovieCard from "./MovieCard";
import { recommendedMovies } from "./movieData";

export default function Recommended() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recommended For You
        </h2>

        <button className="text-[#E50000]">
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {recommendedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.image}
            title={movie.title}
            subtitle={`${movie.genre} • ⭐ ${movie.rating}`}
          />
        ))}
      </div>
    </section>
  );
}