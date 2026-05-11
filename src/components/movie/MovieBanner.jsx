import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  Play,
  Plus,
  ThumbsUp,
  Volume2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { banners } from "../../data/banners";
import { useNavigate } from "react-router-dom";

const MovieBanner = () => {
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
          pagination={{
            clickable: true,
            el: ".banner-pagination",
            bulletClass: "swiper-pagination-bullet banner-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active banner-bullet-active",
          }}
          className="h-[650px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative h-[650px] w-full">
                {/* Background Image */}
                <img
                  src={banner.image}
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
                      {banner.description}
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      {/* Play Button */}
                      <button 
                    
                      onClick={() => navigate(`/movie/${banner.id}`)}
                      className="flex items-center gap-2 rounded-md bg-red-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-red-700">
                        <Play size={18} fill="white" />
                        Play Now
                      </button>

                      {/* Icon Buttons */}
                      <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                        <Plus size={18} />
                      </button>

                      <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                        <ThumbsUp size={18} />
                      </button>

                      <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                        <Volume2 size={18} />
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
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button className="banner-next absolute bottom-10 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-md bg-black/60 text-white transition duration-300 hover:bg-white hover:text-black">
          <ChevronRight size={24} />
        </button>

        {/* Pagination */}
        <div className="banner-pagination absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" />
      </div>

      {/* Swiper Pagination Styles */}
      <style>
        {`
          .banner-bullet {
            width: 24px;
            height: 3px;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.3);
            opacity: 1;
            transition: all 0.3s ease;
          }

          .banner-bullet-active {
            background: #ef4444;
          }
        `}
      </style>
    </section>
  );
};

export default MovieBanner;