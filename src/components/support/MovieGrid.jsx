import {movies} from "../../data/movies";

const MovieGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 border border-white/20 rounded-xl">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl "
        >
          <img
            src={movie.image}
            alt={movie.title}
            width={20}
            className="w-full h-40 object-cover hover:scale-105 transition duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;