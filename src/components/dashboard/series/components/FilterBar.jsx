export default function FilterBar({ genre, setGenre, status, setStatus }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Genre */}

      <div className="flex flex-col gap-2">
        <label className=" text-sm font-medium text-gray-400">
          Genre
        </label>

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="h-12 min-w-45 rounded-xl border border-[#2A2A2A] bg-[#181818] px-4 text-white outline-none">
          <option value="All">All Genres</option>

          <option value="Drama">Drama</option>

          <option value="Sci-Fi">Sci-Fi</option>

          <option value="Action">Action</option>

          <option value="Comedy">Comedy</option>

          <option value="Crime">Crime</option>
        </select>
      </div>

      {/* Status */}

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-400">
          Status
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-12 min-w-45 rounded-xl border border-[#2A2A2A] bg-[#181818] px-4 text-white outline-none">
          <option value="All">All Status</option>

          <option value="Ongoing">Ongoing</option>

          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}
