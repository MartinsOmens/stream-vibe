const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between my-5">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
