import { FaArrowRight } from "react-icons/fa";

const GenreCard = ({ title, image }) => {
  return (
    <div className="min-w-55 bg-[#1a1a1a] rounded-xl p-3 cursor-pointer group hover:bg-[#111] transition">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-1 mb-3">
        {image.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={title}
            className="w-full h-17.5 object-cover rounded-md"
          />
        ))}
      </div>

      {/* Title */}
      <div className="flex justify-between items-center">
        <h3 className="text-white text-sm font-medium">{title}</h3>
        <span className="text-gray-400 group-hover:translate-x-1 transition">
          <FaArrowRight size={14} />
        </span>
      </div>
    </div>
  );
};

export default GenreCard;
