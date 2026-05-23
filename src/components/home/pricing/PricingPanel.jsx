import React, { useState } from "react";

const PricingPanel = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = {
    monthly: {
      basic: { price: 9.99, period: "/month" },
      standard: { price: 12.99, period: "/month" },
      premium: { price: 14.99, period: "/month" },
    },
    yearly: {
      basic: { price: 99.99, period: "/year", savings: "Save 17%" },
      standard: { price: 129.99, period: "/year", savings: "Save 17%" },
      premium: { price: 149.99, period: "/year", savings: "Save 17%" },
    },
  };

  const planDetails = {
    basic: {
      name: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      features: ["HD Streaming", "Watch on 1 device", "Basic support"],
    },
    standard: {
      name: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      features: [
        "Full HD Streaming",
        "Watch on 2 devices",
        "Priority support",
        "Exclusive content",
      ],
    },
    premium: {
      name: "Premium Plan",
      description:
        "Access to the widest selection of movies and shows, including all new releases and Offline Viewing.",
      features: [
        "4K + HDR Streaming",
        "Watch on 4 devices",
        "24/7 Premium support",
        "Offline Viewing",
        "All new releases",
      ],
    },
  };

  return (
    <div className="h-max px-6 py-12 text-white sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose the plan that's right for you
          </h1>

          <p className="text-gray-400 text-base mb-8">
            Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences.
            <br />
            Get ready for non-stop entertainment!
          </p>

          {/* Billing Toggle */}
          <div className="relative inline-flex bg-[#111115] border border-white/5 rounded-full p-1 mb-8 overflow-hidden">

            {/* red glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-2xl"></div>

            <button
              onClick={() => setBillingCycle("monthly")}
               aria-pressed={billingCycle === "monthly"}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-red-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingCycle("yearly")}
               aria-pressed={billingCycle === "yearly"}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === "yearly"
                  ? "bg-red-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {Object.keys(planDetails).map((planKey) => {
            const plan = planDetails[planKey];
            const pricing = plans[billingCycle][planKey];

            return (
              <div
                key={planKey}
                className="relative bg-[#0f0f13] border border-white/5 rounded-2xl p-8 overflow-hidden 
                transition-all duration-300 hover:scale-[1.03] hover:border-red-500/30 group"
              >

                {/* red glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 blur-3xl opacity-70 group-hover:opacity-100 transition"></div>

                <div className="relative z-10">

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {plan.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${pricing.price}
                    </span>
                    <span className="text-gray-400">{pricing.period}</span>

                    {pricing.savings && (
                      <span className="block text-red-400 text-sm mt-1">
                        {pricing.savings}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-red-500 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                <div className="flex gap-3 flex-wrap">
                    <button className="w-full py-3 rounded-xl bg-[#141414] text-white font-semibold 
                  transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 ">
                    Start Free Trial
                  </button>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold 
                  transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 ">
                    Choose Plan
                  </button>
                </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default PricingPanel;