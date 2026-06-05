import MovieCard from "./MovieCard";
import { recentlyAdded } from "./movieData";

export default function RecentlyAdded() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recently Added
        </h2>

        <button className="text-[#E50000]">
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {recentlyAdded.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.image}
            title={movie.title}
            subtitle={movie.year}
          />
        ))}
      </div>
    </section>
  );
}