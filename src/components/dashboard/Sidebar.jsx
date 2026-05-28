import { Icon } from "@iconify/react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };
  return (
    <div className="w-20 md:w-64 bg-[#141414] border-r border-gray-800 flex flex-col items-center md:items-start p-4 space-y-8">
      <h1 className="text-[#E50000] font-bold text-xl hidden md:block">
        StreamX
      </h1>

      <nav className="space-y-6 text-gray-300 w-full">
        <SidebarItem icon="mdi:home" label="Home" />
        <SidebarItem icon="mdi:movie" label="Movies" />
        <SidebarItem icon="mdi:television" label="Series" />
        <SidebarItem icon="mdi:heart" label="My List" />
        <SidebarItem icon="mdi:trending-up" label="Trending" />
        <SidebarItem icon="mdi:cog" label="Settings" />
      </nav>

      <button
        onClick={handleLogout}
        className="mt-6 bg-[#E50000] hover:bg-[#C40000] text-white px-4 py-2 rounded-xl w-full"
      >
        Logout
      </button>
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:text-[#E50000] transition">
      <Icon icon={icon} width="22" />
      <span className="hidden md:block">{label}</span>
    </div>
  );
}
