import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { mainLogo } from "../../assets/index";
import { auth } from "../../firebase/firebase";

import Sidebar from "./Sidebar";

export default function DashboardNavbar() {
  const [open, setOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const user = auth.currentUser;

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-[#141414] border-b border-gray-800 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden text-white"
            >
              <Icon icon="solar:hamburger-menu-outline" width={26} />
            </button>

            {/* Logo */}
            <Link to="/">
              <img
                src={mainLogo}
                alt="Logo"
                width="100"
                className="h-8 object-contain"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-[#1A1A1A] px-3 py-2 rounded-xl w-1/2">
            <Icon icon="mdi:magnify" width="20" className="text-gray-400" />

            <input
              placeholder="Search movies..."
              className="bg-transparent w-full ml-2 outline-none text-sm text-white"
            />
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            {/* Notification */}
            <button className="relative text-gray-300 hover:text-white transition">
              <Icon icon="mi:notification" width={22} />
            </button>

            {/* Profile */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-3 rounded-xl p-2 hover:bg-[#1a1a1a] transition">
                {/* Avatar */}
                <div className="h-10 w-10 rounded-full bg-[#E50000] flex items-center justify-center font-semibold text-white">
                  {user?.displayName?.charAt(0) || "U"}
                </div>

                {/* User Info */}
                <div className="hidden text-left md:block">
                  <h4 className="text-sm font-medium text-white">
                    {user?.displayName || "User"}
                  </h4>

                  <p className="text-xs text-gray-400">{user?.email}</p>
                </div>

                <Icon
                  icon="solar:alt-arrow-down-outline"
                  width={18}
                  className="hidden md:block text-gray-400"
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-[110%] w-56 rounded-2xl border border-[#262626] bg-[#1a1a1a] p-2 shadow-2xl transition-all duration-300 ${
                  open
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-2"
                }`}
              >
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm hover:bg-[#222] transition">
                  <Icon icon="solar:user-outline" width={20} />
                  Profile
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm hover:bg-[#222] transition">
                  <Icon icon="solar:settings-outline" width={20} />
                  Settings
                </button>

                <hr className="my-2 border-[#2a2a2a]" />

                <Link
                  to="/login"
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 transition"
                >
                  <Icon icon="solar:logout-2-outline" width={20} />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-[#141414] border-r border-gray-800 transform transition-transform duration-300 lg:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <img src={mainLogo} alt="Logo" width="100" />

          <button onClick={() => setDrawerOpen(false)} className="text-white">
            <Icon icon="mdi:close" width={24} />
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar mobile />
      </div>
    </>
  );
}
