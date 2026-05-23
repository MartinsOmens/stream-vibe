import { Icon } from "@iconify/react";

export default function SocialAuth({ icon, label }) {
  return (
    <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-600 py-3 transition-all duration-300 hover:translate-y-0.5 hover:bg-gray-500 hover:text-white">
      <Icon icon={icon} width={18} />
      <span className="font-medium">{label}</span>
    </button>
  );
}
