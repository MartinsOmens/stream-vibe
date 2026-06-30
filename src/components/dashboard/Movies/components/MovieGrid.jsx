import MovieCard from "./MovieCard";
import EmptyState from "./EmptyState";

export default function MovieGrid({ movies, mediaType }) {
  if (!movies.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          mediaType={mediaType}
        />
      ))}
    </div>
  );
}