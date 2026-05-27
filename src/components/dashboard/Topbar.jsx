import { Icon } from "@iconify/react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800">

      {/* Search */}
      <div className="flex items-center bg-[#1A1A1A] px-3 py-2 rounded-xl w-1/2">
        <Icon icon="mdi:magnify" width="20" className="text-gray-400" />
        <input
          placeholder="Search movies..."
          className="bg-transparent w-full ml-2 outline-none text-sm"
        />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#E50000] rounded-full flex items-center justify-center">
          U
        </div>
      </div>

    </div>
  );
}