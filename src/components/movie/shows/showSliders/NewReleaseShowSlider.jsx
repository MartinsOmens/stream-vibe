import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import SliderButtons from "../../../ui/SliderButtons";

import NewReleaseShowsCard from "../showCards/NewReleaseShowsCard";

const NewReleaseShowSlider = ({ data }) => {
  return (
    <>
      <div className="flex justify-end mb-10">
        <SliderButtons prevClass="trend-prev" nextClass="trend-next" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".trend-prev",
          nextEl: ".trend-next",
        }}
        spaceBetween={20}
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
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <NewReleaseShowsCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewReleaseShowSlider;
