import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Sidebar({ mobile = false }) {
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
      label: "Series",
      path: "/dashboard/my-series",
    },

    {
      icon: "mdi:heart",
      label: "My List",
      path: "/dashboard/my-list",
    },

    {
      icon: "mdi:trending-up",
      label: "Trending",
      path: "/dashboard/trending",
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
        <Link
          to="/dashboard/profile"
          className="
            flex w-full items-center gap-4
            rounded-xl p-3
            text-gray-300
            transition hover:bg-[#1f1f1f]
          "
        >
          {/* Avatar */}
          <div
            className="
              flex h-10 w-10 min-w-[40px]
              items-center justify-center
              rounded-full bg-[#E50000]
              text-white
            "
          >
            <Icon icon="mdi:account" width={22} />
          </div>

          {/* Text */}
          <div>
            <p className="whitespace-nowrap text-sm font-semibold">John Doe</p>

            <p className="whitespace-nowrap text-xs text-gray-500">
              Premium User
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, path }) {
  return (
    <Link
      to={path}
      className="
        flex items-center gap-4
        rounded-xl p-3
        text-gray-300
        transition-all duration-300
        hover:bg-[#1f1f1f]
        hover:text-[#E50000]
      "
    >
      {/* Icon */}
      <div className="min-w-[24px]">
        <Icon icon={icon} width={24} />
      </div>

      {/* Label */}
      <span className="whitespace-nowrap text-sm font-medium">{label}</span>
    </Link>
  );
}
