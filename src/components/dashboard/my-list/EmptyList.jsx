import { Icon } from "@iconify/react";

export default function EmptyList() {
  return (
    <div className="flex flex-col items-center py-20">
      <Icon
        icon="mdi:heart-outline"
        width={70}
        className="text-gray-600"
      />

      <h2 className="mt-4 text-2xl font-semibold text-white">
        Your List is Empty
      </h2>

      <p className="mt-2 text-gray-500">
        Add movies and series to view them later.
      </p>
    </div>
  );
}