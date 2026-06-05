import { movieBanner2 } from "../../../../assets";

export default function SeriesHero() {
  return (
    <section className="relative h-125 overflow-hidden rounded-3xl">
      {/* Background Image */}
      <img
        src={movieBanner2}
        alt="Stranger Things"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="max-w-xl">
          <span className="text-sm font-medium text-red-600">
            Featured Series
          </span>

          <h1 className="mt-4 text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Katara
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7 lg:text-lg">
            A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
          </p>

          <button className="mt-6 rounded-full bg-[#E50000] px-4 py-2 font-medium text-white transition hover:bg-red-600">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}