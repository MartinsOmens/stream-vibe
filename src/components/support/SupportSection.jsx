import ContactForm from "../support/ContactForm";

import MovieGrid from "../support/MovieGrid";

const SupportSection = () => {
  return (
    <div className="min-h-screentext-white px-4 py-12 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Welcome to our <br /> support page!
          </h1>

          <p className="text-gray-400 max-w-md">
            We're here to help you with any problems you may be having with our
            product.
          </p>

          <div className="mt-5">
            <MovieGrid />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-(--color-primary) border border-white/20 rounded-md p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default SupportSection;