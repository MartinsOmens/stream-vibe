import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderButtons = ({ prevClass, nextClass }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        className={`${prevClass} w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white hover:bg-red-600 transition`}
      >
        <FaArrowLeft size={16} />
      </button>

      <button
        className={`${nextClass} w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white hover:bg-red-600 transition`}
      >
        <FaArrowRight size={16} />
      </button>
    </div>
  );
};

export default SliderButtons;