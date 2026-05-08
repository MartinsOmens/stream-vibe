import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import CategoryCard from "./CategoryCard";
import { movieCategories } from "../../../data/movieCategories";

const CategorySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl  font-semibold text-white mb-2 leading-snug">
            Explore our wide variety of categories
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-6">
            Whether you're looking for a comedy, drama, or documentary
          </p>
        </div>

        <div className="flex space-x-10 bg-[#0f0f0f] border border-white/20 p-2 rounded-md">
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous categories"
            className="rounded-md bg-[#1a1a1a] p-2 text-white/20"
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            ref={nextRef}
            type="button"
            aria-label="Next categories"
            className="rounded-md bg-[#1a1a1a] p-2 text-white/20"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>

      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={2}
          speed={600}
          grabCursor={true}
          // loop = {movieCategories.length <= 5}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {movieCategories.map((cat) => (
            <SwiperSlide key={cat.id ?? cat.name}>
              <CategoryCard {...cat} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default CategorySection;
