import { Play } from "lucide-react";

export default function MovieCard({ movie }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-[#161616]">
      <div className="relative overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110 "
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100 ">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E50000]">
            <Play size={20} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-white">{movie.title}</h3>

        <p className="mt-2 text-sm text-gray-400">{movie.genre}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{movie.year}</span>

          <span className="text-yellow-400">⭐ {movie.rating}</span>
        </div>
      </div>
    </div>
  );
}
