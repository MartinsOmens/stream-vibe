// src/movieLayouts/movieOne/MovieOne.jsx

import { useParams } from "react-router-dom";
import { banners } from "../data/banners";

import HeroSection from "./components/HeroSection";
import DescriptionCard from "./components/DescriptionCard";
import CastSection from "./components/CastSection";
import ReviewsSection from "./components/ReviewsSection";
import Sidebar from "./components/Sidebar";
import CTASection from "../components/home/CTA/CTASection";
const MovieTwo = () => {
  const { id } = useParams();

  const movie = banners.find((item) => item.id == id);

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* HERO */}
        <HeroSection movie={movie} />

        {/* CONTENT */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* LEFT */}
          <div className="space-y-6 lg:col-span-2">
            <DescriptionCard movie={movie} />

            <CastSection />

            <ReviewsSection />
          </div>

          {/* RIGHT */}
          <Sidebar />
        </div>

        <CTASection />
      </div>
    </div>
  );
};

export default MovieTwo;
