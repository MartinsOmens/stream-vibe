import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

const CastSection = ({ cast }) => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-(--color-secondary) p-6">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Top Cast</h2>

        {/* custom navigation buttons */}
        <div className="flex gap-2">
          <button className="cast-prev flex h-10 w-10 items-center justify-center rounded-full bg-(--color-dark) hover:bg-zinc-700">
            <ChevronLeft size={18} />
          </button>

          <button className="cast-next flex h-10 w-10 items-center justify-center rounded-full bg-(--color-dark) hover:bg-zinc-700">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        navigation={{
          prevEl: ".cast-prev",
          nextEl: ".cast-next",
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {cast.map((actor) => (
          <SwiperSlide key={actor.id}>
            <div className="group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={actor.name}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 text-sm font-semibold">
                {actor.name}
              </h3>

              <p className="text-xs text-zinc-400">
                {actor.character}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastSection;