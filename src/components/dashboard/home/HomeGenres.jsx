import { useState } from "react";

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

const HomeGenres = ({ selectedGenre, setSelectedGenre }) => {
  return (
    <div className="w-full flex justify-between gap-4 overflow-x-auto scrollbar-hide">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          className={`px-6 py-3 rounded-2xl whitespace-nowrap transition
            ${
              selectedGenre === genre
                ? "bg-red-600 text-white"
                : "bg-gray-500 text-black"
            }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default HomeGenres;