export default function FilterTabs({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-5 py-2.5 text-sm transition
            ${
              active === category
                ? "bg-[#E50000] text-white"
                : "bg-[#1A1A1A] text-gray-400"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
