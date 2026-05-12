const MediaCard = ({ item }) => {
  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;

  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden h-full flex flex-col">
      {/* Image */}
      <img
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={title}
        className="w-full h-[320px] object-cover"
      />

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h2 className="text-white font-semibold line-clamp-1">{title}</h2>

        <div className="flex justify-between items-center text-sm text-gray-400 mt-auto">
          <span>⭐ {item.vote_average?.toFixed(1)}</span>

          <span>{date ? date.split("-")[0] : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
