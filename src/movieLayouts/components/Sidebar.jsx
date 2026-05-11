import { Calendar, Globe, Star } from "lucide-react";
import StarRating from "./StarRating";

const Sidebar = () => {
  return (
    <div className="h-fit space-y-6 rounded-3xl border border-zinc-800 bg(--color-dark) p-6">
      {/* RELEASE */}
      <div>
        <div className="mb-2 flex items-center gap-2 text-zinc-400">
          <Calendar size={16} />

          <span className="text-sm">Released Year</span>
        </div>

        <h3 className="text-2xl font-bold">2022</h3>
      </div>

      {/* LANGUAGES */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-zinc-400">
          <Globe size={16} />

          <span className="text-sm">Available Languages</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {["English", "Hindi", "Tamil", "Telugu", "Kannada"].map((lang) => (
            <span
              key={lang}
              className="rounded-lg border border-zinc-800 bg(--color-secondary) px-3 py-1 text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* RATINGS */}
      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Ratings</h3>

        <div className="space-y-3">
          <div className="rounded-xl border border-zinc-800 bg(--color-secondary) p-4">
            <div className="flex items-center justify-between">
              <span>IMDb</span>

              <StarRating rating={4.5} />

            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg(--color-secondary) p-4">
            <div className="flex items-center justify-between">
              <span>Streamvibe</span>

             <StarRating rating={4.4} />
            </div>
          </div>
        </div>
      </div>

      {/* GENRES */}
      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Genres</h3>

        <div className="flex flex-wrap gap-2">
          {["Action", "Adventure","Drama", "Horror"].map((genre) => (
            <span
              key={genre}
              className="rounded-lg border border-zinc-800 bg(--color-secondary) px-3 py-1 text-sm"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* DIRECTOR */}
      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Director</h3>

        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg(--color-secondary)p-3">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
            alt=""
            className="h-14 w-14 rounded-xl object-cover"
          />

          <div>
            <h4 className="font-medium">Rishab Shetty</h4>

            <p className="text-xs text-zinc-500">From India</p>
          </div>
        </div>
      </div>

      {/* MUSIC */}
      <div>
        <h3 className="mb-3 text-sm text-zinc-400">Music</h3>

        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg(--color-secondary) p-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
            alt=""
            className="h-14 w-14 rounded-xl object-cover"
          />

          <div>
            <h4 className="font-medium">B. Ajaneesh Loknath</h4>

            <p className="text-xs text-zinc-500">Music Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
