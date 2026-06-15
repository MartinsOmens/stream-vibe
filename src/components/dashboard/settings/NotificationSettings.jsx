export default function NotificationSettings({ enabled }) {
  return (
    <div className="rounded-xl bg-[#1a1a1a] p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">Notifications</h2>

      <label className="flex items-center justify-between">
        <span className="text-gray-300">Email Notifications</span>

        <input type="checkbox" defaultChecked={enabled} />
      </label>
    </div>
  );
}
