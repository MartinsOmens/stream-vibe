import { FaPlay } from "react-icons/fa";
const Button = ({ text }) => {
  return (
    <button className="bg-[#E50000] hover:bg-[#C40000] transition px-6 py-3 rounded-lg font-semibold">
      <FaPlay className="inline mr-2" />
      {text}
    </button>
  );
};

export default Button;
