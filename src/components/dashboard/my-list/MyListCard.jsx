import { Icon } from "@iconify/react";

export default function MyListCard({ movie }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        bg-[#1a1a1a]
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white">{movie.title}</h3>

          <button>
            <Icon icon="mdi:heart" className="text-[#E50000]" width={22} />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>{movie.rating} ⭐</span>
        </div>

        <p className="mt-2 text-xs text-gray-500">{movie.type}</p>
      </div>
    </div>
  );
}
