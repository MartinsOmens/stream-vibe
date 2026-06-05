import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search series..."
        className="h-14 w-full rounded-2xl border border-black/20 bg-[#1A1A1A] pl-12 pr-4 text-gray-200 outline-none "
      />
    </div>
  );
}
