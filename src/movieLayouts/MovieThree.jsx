import { useParams } from "react-router-dom";
import { banners } from "../data/banners";

import HeroSection from "./components/HeroSection";
import DescriptionCard from "./components/DescriptionCard";
import CastSection from "./components/CastSection";
import ReviewsSection from "./components/ReviewsSection";
import Sidebar from "./components/Sidebar";
import CTASection from "../components/home/CTA/CTASection";
import SeasonDetails from "./components/SeasonDetials";

const MovieThree = () => {
  const { id } = useParams();

  const movie = banners.find((item) => item.id == id);

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* HERO */}
        <HeroSection movie={movie} />

        {/* MAIN CONTENT */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:col-span-8">
            <SeasonDetails />

            <DescriptionCard movie={movie} />

            <CastSection />

            <ReviewsSection />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <Sidebar />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default MovieThree;
