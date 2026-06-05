import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import {
  movieBanner1,
  movieBanner2,
  movieBanner3,
} from "../../../assets";

export const banners = [
  {
    id: 1,
    image: movieBanner1,
    title: "Avengers: Endgame",
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and restore balance to the universe.",
  },
  {
    id: 2,
    image: movieBanner2,
    title: "Kantara",
    description:
      "A fiery young man clashes with an unflinching forest officer in a South Indian village where spirituality, fate and folklore rule the lands.",
  },
  {
    id: 3,
    image: movieBanner3,
    title: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  },
];

const HeroBanner = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-[60vh] min-h-112.5 lg:h-[75vh]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="max-w-xs text-center sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                  <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
                    {banner.title}
                  </h1>

                  <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7 lg:text-lg">
                    {banner.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
                    {/* Play Button */}
                    <button
                      onClick={() => navigate(`/movie/${banner.id}`)}
                      className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:px-7 sm:py-4"
                    >
                      <Icon icon="mdi:play" width={18} />
                      Play Now
                    </button>

                    {/* Add */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-md transition hover:bg-gray-500 hover:text-black sm:h-12 sm:w-12">
                      <Icon icon="mdi:plus" width={18} />
                    </button>

                    {/* Like */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-md transition hover:bg-gray-500 hover:text-black sm:h-12 sm:w-12">
                      <Icon icon="mdi:thumb-up" width={18} />
                    </button>

                    {/* Volume */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-md transition hover:bg-gray-500 hover:text-black sm:h-12 sm:w-12">
                      <Icon icon="mdi:volume-high" width={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-30 hidden items-center justify-between bg-black/20 px-6 py-4 backdrop-blur-xl md:flex">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-white transition hover:bg-white hover:text-black"
          >
            <Icon icon="mdi:chevron-left" width={22} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-white transition hover:bg-white hover:text-black"
          >
            <Icon icon="mdi:chevron-right" width={22} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroBanner;