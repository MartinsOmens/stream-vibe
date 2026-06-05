import MovieCard from "./MovieCard";
import EmptyState from "./EmptyState";

export default function MovieGrid({ movies }) {
  if (!movies.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
