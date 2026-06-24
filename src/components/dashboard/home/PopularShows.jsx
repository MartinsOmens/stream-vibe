import { useMovies } from "../../../hooks/dashboard/useMovies";
import MovieCard from "./MovieCard";
import { fetchPopularShows } from "../../../api/tmdb";
import { useNavigate } from "react-router-dom";
import { genreMap } from "../../../utils/genreMap";

export default function RecentlyAdded() {
  const navigate = useNavigate();
  const movies = useMovies(fetchPopularShows);

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
        <h2 className="text-2xl font-bold text-white">Popular Shows</h2>

        <button
          onClick={() => navigate("/dashboard/my-shows")}
          className="relative px-5 py-2.5  text-[#E50000] font-medium bg-transparent border-2 border-[#E50000] rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-[#E50000] hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E50000] focus:ring-offset-2 cursor-pointer"
        >
          View All
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {movies.slice(0, 4).map((movie) => {
          const genre =
            movie.genre_ids?.length > 0
              ? genreMap[movie.genre_ids[0]]
              : "Movie";

          return (
            <MovieCard
              key={movie.id}
              image={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
              title={movie.name}
              subtitle={movie.first_air_date?.split("-")[0]}
              rating={`${genre} • ⭐ ${movie.vote_average.toFixed(1)}`}
            />
          );
        })}
      </div>
    </section>
  );
}
