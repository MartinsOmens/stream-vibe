import {
  favoriteMovies,
  watchHistory,
  watchLater,
} from "./myListData";

export default function MyListPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-white">
        My List
      </h1>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">
          Favorites
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {favoriteMovies.map((movie) => (
            <div
              key={movie.id}
              className="rounded-2xl bg-[#161616] p-5 text-white"
            >
              {movie.title}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">
          Watch Later
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {watchLater.map((movie) => (
            <div
              key={movie.id}
              className="rounded-2xl bg-[#161616] p-5 text-white"
            >
              {movie.title}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">
          Watch History
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {watchHistory.map((movie) => (
            <div
              key={movie.id}
              className="rounded-2xl bg-[#161616] p-5 text-white"
            >
              {movie.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}