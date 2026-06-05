import { Play } from "lucide-react";
import { continueWatchingSeries } from "../seriesData";

export default function ContinueWatchingSeries() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold">
        Continue Watching
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {continueWatchingSeries.map((show) => (
          <div
            key={show.id}
            className="group overflow-hidden rounded-xl bg-[#1A1A1A]"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={show.image}
                alt={show.title}
                className="
                  h-48
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-black/50
                  opacity-0
                  transition-all duration-300
                  group-hover:opacity-100
                "
              >
                <button
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-full bg-[#E50000] t
                    shadow-lg
                    transition-transform duration-300
                    group-hover:scale-100 scale-75
                  "
                >
                  <Play
                    size={24}
                    className="ml-1 text-white"
                  />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold">
                {show.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {show.episode}
              </p>

              <div className="mt-4 h-1.5 rounded-full bg-gray-700">
                <div
                  className="h-full rounded-full bg-red-600"
                  style={{
                    width: `${show.progress}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-400">
                {show.progress}% watched
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}