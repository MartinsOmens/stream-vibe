import MovieCard from "./HomeMovieCard";
import { trendingMovies } from "../../../data/dashboard/heroMovies";

const Trending = () => {
  return (
    <div className="flex gap-6 overflow-x-auto scrollbar-hide">
      {trendingMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Trending;