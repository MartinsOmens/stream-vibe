import { section } from "framer-motion/client";
import React from "react";
import FaqSection from "../home/FAQ/FaqSection";
import CTASection from "../home/CTA/CTASection";
import SupportSection from "./SupportSection";

const SupportPage = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <SupportSection />
      <FaqSection />
      <CTASection />
    </section>
  );
};

export default SupportPage;
