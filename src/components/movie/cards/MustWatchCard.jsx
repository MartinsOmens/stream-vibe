import { FaClock, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import StarRating from "../../../movieLayouts/components/StarRating";

const MustWatchCard = ({ title, image, duration, views, rating }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-[280px] object-cover rounded-xl"
      />

      <div className="flex items-center justify-between mt-4">
        {/* Duration */}
        <div className="flex items-center gap-2 bg-[#111] px-3 py-1 rounded-full text-sm text-gray-300">
          <FaClock />
          <span>{duration}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 bg-[#111] px-3 py-1 rounded-full">
         <StarRating rating={rating}/>

          <span className="text-sm text-gray-400">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default MustWatchCard;
