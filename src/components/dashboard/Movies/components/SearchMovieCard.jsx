import { Link } from "react-router-dom";

export default function SearchMovieCard({ movie }) {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group block overflow-hidden rounded-3xl bg-[#161616] transition hover:shadow-lg hover:shadow-black/40"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={movie.title || movie.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="p-5">
          <h3 className="font-semibold text-white">{movie.title || movie.name}</h3>

          <p className="mt-2 text-sm text-gray-300 line-clamp-3">
            {movie.overview || "No description available."}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">{movie.release_date?.slice(0,4) || "-"}</span>
            <span className="text-yellow-400">⭐ {movie.vote_average?.toFixed(1) || "-"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
