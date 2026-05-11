import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import TopGenreCard from "../cards/TopGenreCard";
import SliderButtons from "../../ui/SliderButtons";

const TopGenreSlider = ({ data }) => {
  return (
    <>
      <div className="flex justify-end mb-6">
        <SliderButtons prevClass="top-prev" nextClass="top-next" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".top-prev",
          nextEl: ".top-next",
        }}
        spaceBetween={20}
        speed={600}
        grabCursor={true}
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
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <TopGenreCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopGenreSlider;
