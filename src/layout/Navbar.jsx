import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-xl font-bold text-[#E50000]">
          StreamVibe
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 px-6 py-2 rounded-full text-white bg-white/5 backdrop-blur">
          <Link className="hover:text-[#E50000] transition" to="/">
            Home
          </Link>
          <Link className="hover:text-[#E50000] transition" to="/movies">
            Movies & Shows
          </Link>
          <Link className="hover:text-[#E50000] transition" to="/support">
            Support
          </Link>
          <Link className="hover:text-[#E50000] transition" to="/subscriptions">
            Subscriptions
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4 text-white">
          {/* Buttons (sm and above) */}
          <div className="hidden sm:flex gap-6">
            <Link
              to="/signup"
              className="px-4 py-2 rounded-md border border-white/40 hover:border-[#E50000] hover:text-[#E50000] transition"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-[#E50000] text-white font-semibold shadow-md hover:bg-[#C40000] hover:scale-105 hover:shadow-lg transition"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? (
              <Icon icon="mdi:close" width={20} />
            ) : (
              <Icon icon="mdi:menu" width={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg px-6 py-6 space-y-5 text-white transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link
          className="block text-lg hover:text-[#E50000] "
          onClick={() => setOpen(false)}
          to="/"
        >
          Home
        </Link>
        <Link
          className="block text-lg hover:text-[#E50000] "
          onClick={() => setOpen(false)}
          to="/movies"
        >
          Movies & Shows
        </Link>
        <Link
          className="block text-lg hover:text-[#E50000] "
          onClick={() => setOpen(false)}
          to="/support"
        >
          Support
        </Link>
        <Link
          className="block text-lg hover:text-[#E50000] "
          onClick={() => setOpen(false)}
          to="/subscriptions"
        >
          Subscriptions
        </Link>

        {/* Auth Buttons */}
        <div className="pt-4 flex flex-col gap-3">
          <Link
            to="/signup"
            className="w-full p-2 text-center rounded-md border border-white/30 hover:border-[#E50000] hover:text-[#E50000] transition"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="w-full p-2 text-center rounded-md bg-[#E50000] text-white font-semibold shadow-md hover:bg-[#C40000] hover:scale-[1.02] transition"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
