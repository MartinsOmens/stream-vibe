import TrendingCard from "./TrendingCard";

export default function TrendingGrid({ movies }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      {movies.map((movie) => (
        <TrendingCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
