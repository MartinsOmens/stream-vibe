
import { FaClock, FaEye } from "react-icons/fa";

const TrendingShowCard = ({ item }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden p-3">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[280px] object-cover rounded-xl"
      />


      <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FaClock />
          <span>{item.duration}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaEye />
          <span>{item.views}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingShowCard;