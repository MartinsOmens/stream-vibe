const CTAButton = ({ children }) => {
  return (
    <button className=" bg-[#E50914] hover:bg-[#f6121d] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
      {children}
    </button>
  );
};

export default CTAButton;
