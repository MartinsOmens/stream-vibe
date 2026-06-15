export default function AppearanceSettings({ darkMode }) {
  return (
    <div className="rounded-xl bg-[#1a1a1a] p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">Appearance</h2>

      <label className="flex items-center justify-between">
        <span className="text-gray-300">Dark Mode</span>

        <input type="checkbox" defaultChecked={darkMode} />
      </label>
    </div>
  );
}
