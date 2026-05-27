const movies = [
  { id: 1, title: "Movie 1" },
  { id: 2, title: "Movie 2" },
  { id: 3, title: "Movie 3" },
  { id: 4, title: "Movie 4" },
  { id: 5, title: "Movie 5" },
];

export default function MovieRow({ title }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[160px] h-[220px] bg-[#1A1A1A] rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
              className="w-full h-40 object-cover"
            />
            <div className="p-2 text-sm">{movie.title}</div>
          </div>
        ))}

      </div>
    </div>
  );
}