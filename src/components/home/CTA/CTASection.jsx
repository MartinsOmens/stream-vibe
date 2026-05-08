import CTAButton from "../CTA/CTAButton";
import { trialCard } from "../../../assets";

const CTASection = () => {
  return (
    <section className=" py-12">
      <div className="relative overflow-hidden  borderborder-white/10 px-8 py-16 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trialCard})` }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Start your free trial today!
          </h2>

          <p className="text-white/60 leading-relaxed text-base">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>

        {/* Button */}
        <div className="relative z-10">
          <CTAButton>Start a Free Trial</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
