import { Icon } from "@iconify/react";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

export default function Sidebar({ mobile = false }) {
  const user = auth.currentUser;
  const menuItems = [
    {
      icon: "mdi:home",
      label: "Home",
      path: "/dashboard",
    },
    {
      icon: "mdi:movie",
      label: "Movies",
      path: "/dashboard/my-movies",
    },

    {
      icon: "mdi:television",
      label: "Shows",
      path: "/dashboard/my-shows",
    },
    {
      icon: "mdi:heart",
      label: "My List",
      path: "/dashboard/my-list",
    },

    {
      icon: "mdi:cog",
      label: "Settings",
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside
      className={`
        flex flex-col
        border-r border-gray-800
        bg-[#141414]

        ${
          mobile
            ? "h-full w-full"
            : "hidden lg:flex sticky top-16 h-[calc(100vh-64px)] w-64"
        }
      `}
    >
      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2 p-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            path={item.path}
          />
        ))}
      </nav>

      {/* Bottom Profile */}
      <div className="border-t border-gray-800 p-4">
        <div className="flex w-full items-center gap-4">
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
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, path }) {
  return (
    <NavLink
      to={path}
      end={path === "/dashboard"}
      className={({ isActive }) =>
        `
          flex items-center gap-4
          rounded-xl p-3
          transition-all duration-300
          hover:bg-[#1f1f1f]
          ${
            isActive
              ? "bg-[#1f1f1f] text-[#E50000]"
              : "text-gray-300 hover:text-[#E50000]"
          }
        `
      }
    >
      {/* Icon */}
      <div className="min-w-[24px]">
        <Icon icon={icon} width={24} />
      </div>

      {/* Label */}
      <span className="whitespace-nowrap text-sm font-medium">{label}</span>
    </NavLink>
  );
}
