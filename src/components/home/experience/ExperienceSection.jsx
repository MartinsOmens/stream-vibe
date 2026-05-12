import {
  Smartphone,
  TabletSmartphone,
  Tv,
  Laptop,
  Gamepad2,
  Headset,
} from "lucide-react";

const devices = [
  {
    title: "Smartphones",
    icon: Smartphone,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    title: "Tablet",
    icon: TabletSmartphone,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    title: "Smart TV",
    icon: Tv,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    title: "Laptops",
    icon: Laptop,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    title: "Gaming Consoles",
    icon: Gamepad2,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    title: "VR Headsets",
    icon: Headset,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-6 py-12 text-white sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-snug">
          We Provide you streaming experience across various devices.
        </h2>
        <p className="text-sm md:text-base text-gray-400 leading-6">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="relative bg-[#0f0f13] border border-white/5 rounded-xl p-6 overflow-hidden 
                hover:border-red-500/30 transition duration-300 group"
              >
                {/* 🔴 Glow effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 blur-3xl opacity-70 group-hover:opacity-100 transition"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl 
                      bg-white/5 text-red-500 ring-1 ring-white/5 
                      group-hover:bg-red-500/10 transition">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;