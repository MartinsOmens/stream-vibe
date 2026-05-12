import { Play, Plus, ThumbsUp, Volume2 } from "lucide-react";

const HeroSection = ({ movie }) => {
  return (
    <section className="relative h-[70vh] overflow-hidden rounded-3xl">
      {/* BACKDROP IMAGE */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="mb-10 text-5xl font-bold">{movie.title}</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-md bg-red-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-red-700">
              <Play size={18} fill="white" />
              Play Now
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
              <Plus size={18} />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
              <ThumbsUp size={18} />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
              <Volume2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
