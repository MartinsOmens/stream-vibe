import { continueWatching } from "./movieData";

export default function ContinueWatching() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Continue Watching</h2>

        <button className="text-[#E50000]">View All</button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {continueWatching.map((movie) => (
          <div
            key={movie.id}
            className="overflow-hidden rounded-3x bg-[#141414] rounded-md"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-white">{movie.title}</h3>

              <p className="mt-1 text-sm text-gray-400">{movie.duration}</p>

              <div className="mt-4 h-2 rounded-full bg-gray-700">
                <div
                  className="h-full rounded-full bg-red-500 transition-all duration-300"
                  style={{
                    width: `${movie.progress}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-400">
                {movie.progress}% watched
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
