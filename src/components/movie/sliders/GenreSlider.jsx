import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import GenreCard from "../cards/GenreCard";
import SliderButtons from "../../ui/SliderButtons";

const GenreSlider = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="flex justify-end mb-6">
        <SliderButtons prevRef={prevRef} nextRef={nextRef} />
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        speed={600}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <GenreCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GenreSlider;
