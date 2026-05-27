import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardHero from "./DashboardHero";
import MovieRow from "./MovieRow";

export default function DashboardSection() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-6 space-y-10 overflow-y-auto">

          {/* Hero Section */}
          <DashboardHero />

          {/* Movie Rows */}
          <MovieRow title="🔥 Trending Now" />
          <MovieRow title="🎬 Action Movies" />
          <MovieRow title="😂 Comedy Picks" />
          <MovieRow title="👽 Sci-Fi World" />
          <MovieRow title="❤️ Romance" />

        </div>
      </div>
    </div>
  );
}