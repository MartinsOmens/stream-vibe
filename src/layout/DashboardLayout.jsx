import { Outlet } from "react-router-dom";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Navbar */}
      <DashboardNavbar />

      {/* Dashboard Body */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="px-6 py-3">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
