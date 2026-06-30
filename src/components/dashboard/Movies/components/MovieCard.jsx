import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { genreMap } from "../../../../utils/genreMap";
import { useMyList } from "../../../../context/MyListContext";

export default function MovieCard({ movie, mediaType }) {
  const { saveMovie, removeMovie, isSaved } = useMyList();

  const saved = isSaved(movie.id);

  const genres = movie.genre_ids
    ?.map((id) => genreMap[id])
    .filter(Boolean)
    .join(" • ");

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (saved) {
      removeMovie(movie.id);
    } else {
      saveMovie({
        ...movie,
        media_type: mediaType,
      });
    }
  };

  return (
    <Link
      to={`/dashboard/my-movies/${movie.id}`}
      className="group block overflow-hidden rounded-3xl bg-[#161616] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title || movie.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Save Button */}
        <button
          onClick={handleSave}
          className={`absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
            saved
              ? "bg-[#E50000] shadow-lg shadow-red-500/40"
              : "bg-black/50 hover:bg-black/70"
          }`}
        >
          <Icon
            icon={saved ? "solar:heart-bold" : "solar:heart-outline"}
            width={22}
            className="text-white"
          />
        </button>

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E50000] shadow-xl transition-transform duration-300 hover:scale-110">
            <Icon
              icon="solar:play-bold"
              width={22}
              className="ml-1 text-white"
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-1 font-semibold text-white">
          {movie.title || movie.name}
        </h3>

        <p className="mt-2 line-clamp-1 text-sm text-gray-400">{genres}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-300">
            {(movie.release_date || movie.first_air_date)?.slice(0, 4)}
          </span>

          <span className="flex items-center gap-1 text-sm font-medium text-yellow-400">
            <Icon icon="solar:star-bold" width={16} />
            {movie.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
