import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { useRef } from "react";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import {
  movieBanner1,
  movieBanner2,
  movieBanner3,
  movieBanner4,
} from "../../../assets";

const banners = [
  {
    id: 1,
    image: movieBanner1,
    title: "How To Train Your Dragon",
    description:
      "As an ancient threat endangers both Vikings and dragons alike, the friendship between Hiccup and Toothless becomes the key to forging a new future.",
  },
  {
    id: 2,
    image: movieBanner2,
    title: "Avengers Endgame",
    description:
      "The remaining Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  },
  {
    id: 3,
    image: movieBanner3,
    title: "The Batman",
    description:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 4,
    image: movieBanner4,
    title: "Dune Part Two",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
  },
];

const HeroBanner = () => {
  const swiperRef = useRef();
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
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-105 sm:h-130 lg:h-155"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background */}
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

              {/* Center Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-4xl">
                  <h1 className="text-4xl font-black text-white sm:text-6xl lg:text-7xl">
                    {banner.title}
                  </h1>

                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base lg:text-lg">
                    {banner.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {/* Play Button */}
                    <button
                      onClick={() => navigate(`/movie/${banner.id}`)}
                      className="flex items-center gap-2 rounded-md bg-red-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-red-700"
                    >
                      <Icon icon="mdi:play" width={18} className="text-white" />
                      Play Now
                    </button>

                    {/* Icon Buttons */}
                    <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-gray-500 hover:text-black">
                      <Icon icon="mdi:plus" width={18} className="text-white" />
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-gray-500 hover:text-black">
                      <Icon
                        icon="mdi:thumb-up"
                        width={18}
                        className="text-white"
                      />
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-gray-500 hover:text-black">
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
        <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-gray-800 bg-black/30 px-6 py-4 backdrop-blur-xl">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-white transition hover:bg-white hover:text-black"
          >
            <Icon icon="mdi:chevron-left" width={22} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/60  text-white transition hover:bg-white hover:text-black"
          >
            <Icon icon="mdi:chevron-right" width={22} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
