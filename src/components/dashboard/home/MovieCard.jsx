import { Play } from "lucide-react";

export default function MovieCard({ image, title, subtitle }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
          <button className="flex h-14  w-14 items-center justify-center rounded-full bg-[#E50000]">
            <Play size={22} />
          </button>
        </div>
      </div>

      <h4 className="mt-3 font-semibold text-white">{title}</h4>

      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}
