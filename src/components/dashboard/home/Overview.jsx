import { useState } from "react";

import HeroBanner from "./HeroBanner";


import Recommended from "./PopularMovies";
import RecentlyAdded from "./PopularShows";
export default function Overview() {
  const [selectedGenre, setSelectedGenre] = useState("Trending");

  return (
    <div className="flex bg-[#141414] text-white">
      <main className="flex-1 overflow-hidden">
        <div className="px-4 py-2">
          <HeroBanner />
          <div className="space-y-14 px-4 py-8">
            <Recommended />
            <RecentlyAdded />
          </div>
        </div>
      </main>
    </div>
  );
}
