import React from "react";
import ComparePlans from "./ComparePlans";
import PricingPanel from "../home/pricing/PricingPanel";
import CTASection from "../home/CTA/CTASection";

const SubscriptionPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <PricingPanel />
      <ComparePlans />
      <CTASection/>
    </div>
  );
};

export default SubscriptionPage;
