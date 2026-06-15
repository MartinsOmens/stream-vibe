export default function SecuritySettings() {
  return (
    <div className="rounded-xl bg-[#1a1a1a] p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Security
      </h2>

      <button
        className="
          rounded-lg
          border border-gray-700
          px-4 py-3
          text-white
        "
      >
        Enable Two-Factor Authentication
      </button>
    </div>
  );
}