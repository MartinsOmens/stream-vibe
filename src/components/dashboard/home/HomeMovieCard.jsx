import {Star} from "lucide-react"
const HomeMovieCard = ({ movie }) => {
  return (
    <div className="min-w-[220px]">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-[300px] object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-white text-lg font-medium">{movie.title}</h3>

        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="text-gray-400">{movie.year}</span>

          <span className="text-yellow-400 flex items-center gap-1">
            <Star />
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeMovieCard;
