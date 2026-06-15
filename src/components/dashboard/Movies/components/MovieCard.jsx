import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { genreMap } from "../../../../utils/genreMap";

export default function MovieCard({ movie }) {
  const genres = movie.genre_ids
    ?.map((id) => genreMap[id])
    .filter(Boolean)
    .join(" • ");

  return (
    <Link
      to={`/dashboard/my-movies/${movie.id}`}
      className="group block overflow-hidden rounded-3xl bg-[#161616] transition hover:shadow-lg hover:shadow-black/40"
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E50000]">
            <Play size={20} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-white">{movie.title}</h3>

        <p className="mt-2 text-sm text-gray-400">{genres}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-white">
            {movie.release_date?.slice(0, 4)}
          </span>

          <span className="text-yellow-400">
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
