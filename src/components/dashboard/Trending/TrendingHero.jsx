export default function TrendingHero({ movie }) {
  return (
    <div
      className="
        relative mb-10
        overflow-hidden
        rounded-2xl
      "
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="
          h-[400px]
          w-full
          object-cover
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black via-black/40
          to-transparent
        "
      />

      <div
        className="
          absolute bottom-0
          p-8
        "
      >
        <span
          className="
            rounded-full
            bg-[#E50000]
            px-3 py-1
            text-sm
          "
        >
          #1 Trending
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white">{movie.title}</h2>

        <p className="mt-2 text-gray-300">
          ⭐ {movie.rating} • {movie.year} • {movie.type}
        </p>
      </div>
    </div>
  );
}
