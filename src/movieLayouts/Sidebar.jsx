import { Icon } from "@iconify/react";
import StarRating from "./StarRating";
const Sidebar = ({ movie, director, directorInfo, music, musicInfo }) => {
  return (
    <div className="h-fit space-y-6 rounded-3xl border border-zinc-800 bg-(--color-dark) p-6">
      {/* RELEASE YEAR */}
      <div>
        <div className="mb-2 flex items-center gap-2 text-zinc-400">
          <Icon icon="mdi:calendar" width={16} />
        </div>

        <h3 className="text-2xl font-bold">
          {movie.release_date?.split("-")[0]}
        </h3>
      </div>

      {/* LANGUAGES */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-zinc-400">
          <Icon icon="mdi:earth" width={16} />
          <span className="text-sm">Available Languages</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {movie.spoken_languages?.map((lang) => (
            <span
              key={lang.english_name}
              className="rounded-lg border border-zinc-800 bg-(--color-secondary) px-3 py-1 text-sm"
            >
              {lang.english_name}
            </span>
          ))}
        </div>
      </div>

      {/* RATINGS */}
      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Ratings</h3>

        {/* TMDB Rating */}
        <div className="rounded-xl border border-zinc-800 bg-(--color-secondary) p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">TMDB</span>

            <StarRating rating={movie.vote_average / 2} />
          </div>
        </div>

        {/* Optional: Popularity (bonus UI metric) */}
        <div className="mt-3 rounded-xl border border-zinc-800 bg-(--color-secondary) p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Popularity</span>

            <span className="text-sm text-zinc-300">
              {Math.round(movie.popularity)}
            </span>
          </div>
        </div>
      </div>

      {/* GENRES */}
      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Genres</h3>

        <div className="flex flex-wrap gap-2">
          {movie.genres?.map((genre) => (
            <span
              key={genre.id}
              className="rounded-lg border border-zinc-800 bg-(--color-secondary) px-3 py-1 text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>

      {/* DIRECTOR */}
      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Director</h3>

        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-(--color-secondary) p-3">
          <img
            src={
              directorInfo?.profile_path
                ? `https://image.tmdb.org/t/p/w500${directorInfo.profile_path}`
                : "https://via.placeholder.com/300x300"
            }
            className="h-14 w-14 rounded-xl object-cover"
          />

          <div>
            <h4 className="font-medium">{director?.name}</h4>
            <p className="text-xs text-zinc-500">Director</p>
          </div>
        </div>
      </div>

      {/* MUSIC */}

      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Music</h3>

        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-(--color-secondary) p-3">
          <img
            src={
              music?.profile_path
                ? `https://image.tmdb.org/t/p/w500${music.profile_path}`
                : music?.profile_path
                  ? `https://image.tmdb.org/t/p/w500${music.profile_path}`
                  : "https://via.placeholder.com/200"
            }
            alt={music?.name}
            className="h-14 w-14 rounded-xl object-cover"
          />

          <div>
            <h4 className="font-medium">{music?.name || "Unknown"}</h4>

            <p className="text-xs text-zinc-500">Music Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
