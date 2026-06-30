import MyListGrid from "./MyListGrid";
import EmptyList from "./EmptyList";
import { useMyList } from "../../../context/MyListContext";

export default function MyList() {
  const { savedMovies } = useMyList();

  const movies = savedMovies.filter((item) => item.media_type === "movie");

  const shows = savedMovies.filter((item) => item.media_type === "tv");

  if (savedMovies.length === 0) {
    return <EmptyList />;
  }

  return (
    <section className="space-y-12 p-6">
      <div>
        <h1 className="text-3xl font-bold text-white">My List</h1>

        <p className="mt-2 text-gray-400">Your saved movies and TV shows.</p>
      </div>

      {movies.length > 0 && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">🎬 Movies</h2>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-gray-300">
              {movies.length}
            </span>
          </div>

          <MyListGrid movies={movies} />
        </div>
      )}

      {shows.length > 0 && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">📺 TV Shows</h2>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-gray-300">
              {shows.length}
            </span>
          </div>

          <MyListGrid movies={shows} />
        </div>
      )}
    </section>
  );
}
