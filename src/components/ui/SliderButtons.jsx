import { Icon } from "@iconify/react";

const SliderButtons = ({ prevClass, nextClass }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        className={`${prevClass} w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white hover:bg-red-600 transition`}
      >
        <Icon icon="mdi:arrow-left" width={16} />
      </button>

      <button
        className={`${nextClass} w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white hover:bg-red-600 transition`}
      >
        <Icon icon="mdi:arrow-right" width={16} />
      </button>
    </div>
  );
};

export default SliderButtons;
