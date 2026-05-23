const DescriptionCard = ({ movie }) => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg(--color-dark) p-6">
      <h2 className="mb-4 text-lg font-semibold">Description</h2>

      <p className="leading-8 text-zinc-400">{movie.overview}</p>
    </div>
  );
};

export default DescriptionCard;
