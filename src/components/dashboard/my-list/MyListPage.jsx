import MyListGrid from "./MyListGrid";
import EmptyList from "./EmptyList";
import { myListData } from "./myListData";

export default function MyList() {
  const movies = myListData;

  return (
    <section className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">My List</h1>

        <p className="mt-2 text-gray-400">Your saved movies and series.</p>
      </div>

      {movies.length > 0 ? <MyListGrid movies={movies} /> : <EmptyList />}
    </section>
  );
}
