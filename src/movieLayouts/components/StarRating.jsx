// src/components/StarRating.jsx

import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        // FULL STAR
        if (index + 1 <= Math.floor(rating)) {
          return (
            <Star
              key={index}
              size={14}
              className="fill-red-500 text-red-500"
            />
          );
        }

        // HALF STAR
        if (
          rating % 1 !== 0 &&
          index === Math.floor(rating)
        ) {
          return (
            <StarHalf
              key={index}
              size={14}
              className="fill-red-500 text-white"
            />
          );
        }

        // EMPTY STAR
        return (
          <Star
            key={index}
            size={14}
            className="text-zinc-600"
          />
        );
      })}

      <span className="ml-1 text-sm text-white">
        {rating}
      </span>
    </div>
  );
};

export default StarRating;