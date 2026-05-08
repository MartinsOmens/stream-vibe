import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../../data/faqs";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const safeFaqs = Array.isArray(faqs) ? faqs : [];
  const left = safeFaqs.slice(0, 4);
  const right = safeFaqs.slice(4);

  const renderItem = (item, index) => {
    const isOpen = openIndex === index;

    return (
      <div key={item.id}>
        <button
          onClick={() => toggle(index)}
          className="w-full flex items-center justify-between py-6 text-left group"
        >
          <div className="flex items-center gap-4">
            <span className="bg-[#1F1F1F] text-white px-3 py-1.5 rounded-md text-xs tracking-wide">
              {item.id}
            </span>

            <h3 className="text-white text-lg md:text-xl font-medium group-hover:text-white/80 transition">
              {item.question}
            </h3>
          </div>

          {/* Plus icon */}
          <motion.span
            key={isOpen ? "minus" : "plus"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white font-semibold md:text-2xl  sm:text-base tracking-wide"
          >
            {isOpen ? "-" : "+"}
          </motion.span>
        </button>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1], // Netflix-like easing
              }}
              className="overflow-hidden"
            >
              <div className="pb-6 pl-14 pr-4">
                <p className="text-white/60 leading-relaxed max-w-xl">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#E50914]/70 to-transparent" />
      </div>
    );
  };

  return (
    <section className=" px-6 md:px-16 py-12">
      <div className="mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-white/50 max-w-lg text-sm md:text-base">
            Everything you need to know about StreamVibe. Can't find the answer?
            Reach out to our support team.
          </p>
        </div>

        <button className="bg-[#E50914] hover:bg-[#f6121d] text-white px-5 py-2.5 rounded-md font-medium transition">
          Ask a Question
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-x-16">
        <div>{left.map((item, i) => renderItem(item, i))}</div>

        <div>{right.map((item, i) => renderItem(item, i + left.length))}</div>
      </div>
    </section>
  );
};

export default FaqSection;
