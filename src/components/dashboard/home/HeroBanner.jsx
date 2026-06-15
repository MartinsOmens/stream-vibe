import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { fetchBannerMovies } from "../../../api/tmdb";
import { useMovies } from "../../../hooks/dashboard/useMovies.js";

const HeroBanner = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const movies = useMovies(fetchBannerMovies);

  if (!movies.length) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="w-full px-4 py-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, el: ".banner-pagination" }}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          className="h-[420px] md:h-[520px]"
        >
          {movies.slice(0, 5).map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative h-full w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/40 to-black/10" />

                <div className="absolute inset-0 flex items-end pb-20">
                  <div className="max-w-3xl px-6 text-left">
                    <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                      {movie.title || movie.name}
                    </h2>
                    <p className="mb-6 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
                      {movie.overview}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        className="flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-red-700"
                      >
                        <Icon icon="mdi:play" width={16} />
                        Play
                      </button>

                      <button className="flex h-10 w-10 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                        <Icon icon="mdi:plus" width={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          className="absolute bottom-8 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-md bg-black/60 text-white transition duration-300 hover:bg-white/50 hover:text-black"
        >
          <Icon icon="mdi:chevron-left" width={20} />
        </button>

        <button
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          className="absolute bottom-8 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-md bg-black/60 text-white transition duration-300 hover:bg-white/50 hover:text-black"
        >
          <Icon icon="mdi:chevron-right" width={20} />
        </button>

        <div className="banner-pagination absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2" />
      </div>
    </section>
  );
};

export default HeroBanner;
