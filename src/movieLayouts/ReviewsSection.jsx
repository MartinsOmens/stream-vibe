import { Icon } from "@iconify/react";

import StarRating from "./StarRating";
import { useState } from "react";

const ReviewsSection = ({ reviews }) => {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-(--color-secondary) p-6">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Reviews</h2>

        <button className="rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800">
          + Add Your Review
        </button>
      </div>

      {/* GRID */}
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="cursor-pointer rounded-2xl border border-zinc-800 bg-(--color-secondary) p-5 transition hover:bg-zinc-900"
            onClick={() => setSelectedReview(review)}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{review.author}</h3>
                <p className="text-xs text-zinc-500">TMDB User</p>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1">
                <Icon icon="mdi:star" width={16} className="text-yellow-400" />
                <span className="text-sm">
                  {review.author_details?.rating ?? "N/A"}
                </span>
              </div>
            </div>

            <p className="line-clamp-4 text-sm text-zinc-400">
              {review.content}
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Click to read full review →
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[80vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-zinc-900 p-6">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute right-4 top-4 rounded-full bg-zinc-800 p-2 hover:bg-zinc-700"
            >
              <Icon icon="mdi:close" width={18} />
            </button>

            {/* HEADER */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {selectedReview.author}
                </h3>

                <p className="text-xs text-zinc-500">Full Review</p>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1">
                <Icon icon="mdi:star" width={16} className="text-yellow-400" />
                <span className="text-sm">
                  {selectedReview.author_details?.rating ?? "N/A"}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <p className="whitespace-pre-line text-sm leading-7 text-zinc-300">
              {selectedReview.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
