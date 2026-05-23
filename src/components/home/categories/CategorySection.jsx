import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GenreWrapper from "../../movie/movies/GenreWrapper";

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
            Whether you're looking for a action, comedy, drama, or horror
          </p>
        </div>
      </div>
      <section className="mb-16">
        <GenreWrapper />
      </section>
    </section>
  );
};

export default CategorySection;
