export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search movies..."
      className="w-full rounded-2xl border border-black/20 bg-[#1A1A1A] px-5 py-4 text-white outline-none focus:border-[#E50000] "
    />
  );
}
