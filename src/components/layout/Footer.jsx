import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
      title: "Shows",
      links: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
  ];

  const socialIcons = ["mdi:facebook", "mdi:twitter", "mdi:linkedin"];

  return (
    <footer className="px-6 md:px-16 py-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
        {/* Footer Columns */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-white font-medium mb-6">{section.title}</h3>

            <ul className="space-y-4">
              {section.links.map((link) => (
                <li
                  key={link}
                  className="text-white/50 hover:text-white transition cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Links */}
        <div>
          <h3 className="text-white font-medium mb-6">Connect With Us</h3>
          <div className="flex gap-3">
            {socialIcons.map((icon, index) => (
              <button
                key={index}
                className="w-11 h-11 rounded-lg  bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300"
              >
                <Icon icon={icon} width={16} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/40">
        <p>©2026 StreamVibe, All Rights Reserved</p>

        <div className="flex flex-wrap gap-6">
          <p className="hover:text-white transition cursor-pointer">
            Terms of Use
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
