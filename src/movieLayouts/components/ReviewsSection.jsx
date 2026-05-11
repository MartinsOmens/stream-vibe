import { Star } from "lucide-react";
import { movieReviews } from "../../data/layout";
import StarRating from "./StarRating";

const ReviewsSection = () => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-(--color-secondary) p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Reviews</h2>

        <button className="rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800">
          + Add Your Review
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {movieReviews.map((review, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-(--color-secondary) p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{review.name}</h3>

                <p className="text-xs text-zinc-500">From India</p>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1">
                <StarRating rating={review.rating} />
              </div>
            </div>

            <p className="text-sm leading-7 text-zinc-400">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
