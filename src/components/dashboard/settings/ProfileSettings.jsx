export default function ProfileSettings({ user }) {
  return (
    <div className="rounded-xl bg-[#1a1a1a] p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">Profile</h2>

      <div className="space-y-4">
        <input
          type="text"
          defaultValue={user.name}
          className="
            w-full rounded-lg
            border border-gray-700
            bg-[#141414]
            p-3 text-white
          "
        />

        <input
          type="email"
          defaultValue={user.email}
          className="
            w-full rounded-lg
            border border-gray-700
            bg-[#141414]
            p-3 text-white
          "
        />
      </div>
    </div>
  );
}
