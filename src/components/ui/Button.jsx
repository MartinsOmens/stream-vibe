import { Icon } from "@iconify/react";
const Button = ({ text }) => {
  return (
    <button className="bg-[#E50000] hover:bg-[#C40000] transition px-6 py-3 rounded-lg font-semibold">
      <Icon icon="mdi:play" width="20" className="inline mr-2" />
      {text}
    </button>
  );
};

export default Button;
