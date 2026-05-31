const genres = [
  "Trending",
  "Adventure",
  "Action",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
];

const HomeGenres = () => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
      {genres.map((genre, index) => (
        <button
          key={genre}
          className="bg-[#E50000] text-white px-6 py-3 rounded-2xl whitespace-nowrap transition"
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default HomeGenres;
