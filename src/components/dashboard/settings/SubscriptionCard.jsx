export default function SubscriptionCard({ plan }) {
  return (
    <div
      className="
        rounded-xl
        border border-[#E50000]
        bg-[#1a1a1a]
        p-6
      "
    >
      <h2 className="text-xl font-semibold text-white">Subscription</h2>

      <p className="mt-4 text-gray-400">Current Plan</p>

      <p className="text-2xl font-bold text-[#E50000]">{plan}</p>

      <button
        className="
          mt-6 rounded-lg
          bg-[#E50000]
          px-4 py-3
          text-white
        "
      >
        Upgrade Plan
      </button>
    </div>
  );
}
