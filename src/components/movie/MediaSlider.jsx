import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import MovieCard from "./MovieCard";
import SliderButtons from "../ui/SliderButtons";
import MediaCard from "./MediaCard";

const MediaSlider = ({ data, prevClass, nextClass }) => {
  return (
    <>
      <div className="flex justify-end mb-10">
        <SliderButtons prevClass={prevClass} nextClass={nextClass} />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MediaCard item={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MediaSlider;
