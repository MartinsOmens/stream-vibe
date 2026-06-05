import { Play } from "lucide-react";
export default function SeriesCard({ series }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-black/50 transition hover:-translate-y-1">
      <img
        src={series.image}
        alt={series.title}
        className="h-72 w-full object-cover "
      />

      <div className="p-5">
        <h3 className="font-semibold text-white">{series.title}</h3>
        <p className="mt-2 text-sm text-gray-400">{series.genre}</p>

        <div className="mt-4 flex justify-between text-sm">
          <span>{series.seasons} Seasons</span>

          <span>⭐ {series.rating}</span>
        </div>

        <span className="mt-4 inline-block rounded-full bg-[#E50000] px-3 py-1.5 text-xs text-white ">
          {series.status}
        </span>
      </div>
    </div>
  );
}

