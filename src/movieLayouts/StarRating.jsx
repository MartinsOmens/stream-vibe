import { Icon } from "@iconify/react";

const StarRating = ({ rating = 0 }) => {
  const normalized = Math.max(0, Math.min(5, rating));

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        if (index + 1 <= Math.floor(normalized)) {
          return (
            <Icon
              key={index}
              icon="mdi:star"
              width={14}
              className="text-red-500"
            />
          );
        }

        if (normalized % 1 !== 0 && index === Math.floor(normalized)) {
          return (
            <Icon
              key={index}
              icon="mdi:star-half-full"
              width={14}
              className="text-red-500"
            />
          );
        }

        return (
          <Icon
            key={index}
            icon="mdi:star-outline"
            width={14}
            className="text-zinc-600"
          />
        );
      })}

      <span className="ml-1 text-sm text-white">{normalized.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
