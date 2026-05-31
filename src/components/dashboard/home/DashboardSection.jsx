
import HeroBanner from "./HeroBanner";
import HomeGenres from "./HomeGenres";
import Trending from "./Trending";

export default function DashboardSection() {
  return (
    <div className="flex bg-[#141414] text-white">
      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="px-4 py-2">
          {/* Hero */}
          <HeroBanner />

          {/* Genres */}
          <section className="mt-10">
            <HomeGenres />
          </section>

          {/* Trending */}
          <section className="mt-12">
            <Trending />
          </section>
        </div>
      </main>
    </div>
  );
}
