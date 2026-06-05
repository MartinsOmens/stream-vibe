import SeriesCard from "./SeriesCard";

export default function SeriesGrid({
  series,
}) {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {series.map((item) => (
        <SeriesCard
          key={item.id}
          series={item}
        />
      ))}
    </div>
  );
}