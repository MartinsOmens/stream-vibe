import { Icon } from "@iconify/react";

export default function TrendingCard({ movie }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        bg-[#1a1a1a]
        transition-all
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

          <Icon icon="mdi:trending-up" width={20} className="text-[#E50000]" />
        </div>

        <div className="mt-3 flex justify-between text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>{movie.rating} ⭐</span>
        </div>
      </div>
    </div>
  );
}
