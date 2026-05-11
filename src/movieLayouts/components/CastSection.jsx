// src/movieLayouts/movieOne/components/CastSection.jsx

import { ChevronLeft, ChevronRight } from "lucide-react";

import { movieData } from "../../data/layout";

const CastSection = () => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-(--color-secondary) p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Cast</h2>

        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-dark) hover:bg-zinc-700">
            <ChevronLeft size={18} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-dark) hover:bg-zinc-700">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {movieData.map((actor, index) => (
          <div key={index} className="min-w-[120px]">
            <img
              src={actor.image}
              alt={actor.name}
              className="mb-3 h-32 w-full rounded-xl object-cover"
            />

            <p className="text-sm font-medium">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastSection;
