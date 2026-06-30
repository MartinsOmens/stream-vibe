import MovieCard from "../Movies/components/MovieCard";


export default function MyListGrid({ movies }) {
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
  
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}
