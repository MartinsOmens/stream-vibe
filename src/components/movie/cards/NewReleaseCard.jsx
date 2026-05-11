const NewReleaseCard = ({ item }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden p-3">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[280px] object-cover rounded-xl"
      />
    </div>
  );
};

export default NewReleaseCard;
