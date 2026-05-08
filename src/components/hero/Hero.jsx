import HeroContent from "./HeroContent";

import homeBanner from "../../assets/home/home-banner.png";

import ExperienceSection from "../home/experience/ExperienceSection";
import PricingPanel from "../home/pricing/PricingPanel";
import FaqSection from "../home/FAQ/FaqSection";
import CTASection from "../home/CTA/CTASection";
import CategorySection from "../home/categories/CategorySection";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image (FULL WIDTH) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeBanner})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/10 via-[#141414]/30 via-[#141414]/60 to-[#141414]" />
        {/* CONTENT CONTAINER (CENTERED) */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex flex-col">
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="md:mt-10">
              <HeroContent />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <CategorySection />
        <ExperienceSection />
        <FaqSection />
        <PricingPanel />
        <CTASection />
      </div>
    </section>
  );
};

export default Hero;
