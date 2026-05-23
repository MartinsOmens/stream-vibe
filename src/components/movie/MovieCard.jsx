const MovieCard = ({ movie }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden h-full flex flex-col">
      
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-3 flex flex-col gap-2 flex-1">
        <h2 className="text-white font-semibold line-clamp-1">
          {movie.title}
        </h2>

        <div className="flex justify-between text-sm text-gray-400 mt-auto">
          <span>⭐ {movie.vote_average?.toFixed(1)}</span>
          <span>{movie.release_date?.split("-")[0]}</span>
        </div>
      </div>

    </div>
  );
};

export default MovieCard;