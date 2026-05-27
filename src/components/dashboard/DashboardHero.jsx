import { Icon } from "@iconify/react";

export default function DashboardHero() {
  return (
    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1524985069026-dd778a71c7b4)"
      }}>

      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 space-y-3">

        <h1 className="text-3xl md:text-5xl font-bold">
          Featured Movie Title
        </h1>

        <p className="text-gray-300 max-w-md text-sm">
          A thrilling cinematic experience with action, drama, and adventure.
        </p>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 bg-[#E50000] px-4 py-2 rounded-xl hover:bg-[#C40000]">
            <Icon icon="mdi:play" width="20" />
            Play
          </button>

          <button className="border border-gray-500 px-4 py-2 rounded-xl hover:border-white">
            My List
          </button>

        </div>

      </div>
    </div>
  );
}