import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMovies from "../../hooks/useMovies";
import { fetchBannerMovies } from "../../api/tmdb";
import { useNavigate } from "react-router-dom";
import { bannerPagination } from "../../config/swiper/bannerPagination";

const MovieBanner = () => {
  const { data: banners, loading } = useMovies(fetchBannerMovies);
  const navigate = useNavigate();
  return (
    <section className="w-full px-4 py-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".banner-prev",
            nextEl: ".banner-next",
          }}
          pagination={bannerPagination}
          className="h-[650px]"
        >
          {banners.slice(0, 5).map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative h-162.5 w-full">
                {/* Background Image */}
                <img
                  src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
                  alt={banner.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end justify-center pb-28">
                  <div className="max-w-3xl px-6 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                      {banner.title}
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
                      {banner.overview}
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      {/* Play Button */}
                      <button
                        onClick={() => navigate(`/movie/${banner.id}`)}
                        className="flex items-center gap-2 rounded-md bg-red-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-red-700"
                      >
                        <Icon
                          icon="mdi:play"
                          width={18}
                          className="text-white"
                        />
                        Play Now
                      </button>

                      {/* Icon Buttons */}
                      <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                        <Icon
                          icon="mdi:plus"
                          width={18}
                          className="text-white"
                        />
                      </button>

                      <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                        <Icon
                          icon="mdi:thumb-up"
                          width={18}
                          className="text-white"
                        />
                      </button>

                      <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                        <Icon
                          icon="mdi:volume-high"
                          width={18}
                          className="text-white"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left Arrow */}
        <button className="banner-prev absolute bottom-10 left-6 z-20 flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white transition duration-300 hover:bg-white hover:text-black">
          <Icon icon="mdi:chevron-left" width={24} />
        </button>

        {/* Right Arrow */}
        <button className="banner-next absolute bottom-10 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white transition duration-300 hover:bg-white hover:text-black">
          <Icon icon="mdi:chevron-right" width={24} />
        </button>

        {/* Pagination */}
        <div className="banner-pagination absolute bottom-14 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2" />
      </div>
    </section>
  );
};

export default MovieBanner;
