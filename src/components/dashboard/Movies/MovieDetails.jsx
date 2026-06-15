import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchMovieVideos,
  fetchWatchProviders,
} from "../../../api/tmdb";

import useMovies from "../../../hooks/useMovies";

const MovvieDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: movie, loading } = useMovies(() => fetchMovieDetails(id));

  const { data: credits } = useMovies(() => fetchMovieCredits(id));
  const { data: reviews } = useMovies(() => fetchMovieReviews(id));
  const { data: videos } = useMovies(() => fetchMovieVideos(id));
  const { data: providers } = useMovies(() => fetchWatchProviders(id));

  const director = credits?.crew?.find((person) => person.job === "Director");

  const trailer =
    videos?.find(
      (video) =>
        video.site === "YouTube" && video.type === "Trailer" && video.official,
    ) ||
    videos?.find(
      (video) => video.site === "YouTube" && video.type === "Trailer",
    );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div className="max-w-xl rounded-3xl bg-[#1f1f1f] p-10 text-white shadow-lg shadow-black/20">
          <h1 className="text-3xl font-bold">Movie not found</h1>
          <p className="mt-4 text-gray-400">
            The requested movie does not exist in the mock dataset.
          </p>
          <button
            onClick={() => navigate("/dashboard/my-movies")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E50000] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <ArrowLeft size={18} /> Back to Movies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <button
          onClick={() => navigate("/dashboard/my-movies")}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-4 py-2 text-sm text-white transition hover:bg-[#2b2b2b]"
        >
          <ArrowLeft size={16} /> Back to Movies
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-[#1f1f1f] p-6 shadow-xl shadow-black/20">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.title}
                className="h-[420px] w-full rounded-3xl object-cover object-center"
              />

              {/* ------------MOVIE CONTENTS ------------ */}

              <div className="space-y-4">
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.22em] text-gray-400">
                  <span>
                    {movie.genres?.map((genre) => genre.name).join(" • ")}
                  </span>
                  <span>{movie.release_date?.slice(0, 4)}</span>
                  <span>{movie.runtime} min</span>
                </div>

                <div>
                  <h1 className="text-4xl font-bold">{movie.title}</h1>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-300">
                    {movie.overview}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase text-gray-400">Rating</p>

                    <p className="mt-2 text-xl font-bold text-yellow-400">
                      ⭐ {movie.vote_average?.toFixed(1)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase text-gray-400">Runtime</p>

                    <p className="mt-2 text-xl font-bold">{movie.runtime}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase text-gray-400">Director</p>

                    <p className="mt-2 font-semibold">
                      {director?.name || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* -------Trailer section ----------- */}
            {trailer && (
              <div className="mt-8 rounded-3xl bg-[#1f1f1f] p-6 shadow-xl shadow-black/20">
                <h2 className="mb-4 text-2xl font-semibold">Watch Trailer</h2>

                <div className="aspect-video overflow-hidden rounded-2xl">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            {/* ---------movie reviews */}

            {reviews?.results?.length > 0 && (
              <div className="rounded-3xl bg-[#1f1f1f] p-6 shadow-xl shadow-black/20">
                <h2 className="mb-4 text-2xl font-semibold">Reviews</h2>

                <div className="space-y-4">
                  {reviews.results.slice(0, 3).map((review) => (
                    <div
                      key={review.id}
                      className="rounded-3xl border border-white/10 bg-[#1a1a1a] p-5"
                    >
                      <p className="font-semibold text-white">
                        {review.author}
                      </p>

                      <p className="mt-2 text-sm text-gray-300">
                        {review.content.length > 250
                          ? `${review.content.slice(0, 250)}...`
                          : review.content}
                      </p>
                    </div>
                  ))}
                  
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6 rounded-3xl bg-[#1f1f1f] p-6 shadow-xl shadow-black/20">
            <div>
              <h2 className="text-xl font-semibold">Cast</h2>
              <ul className="mt-4 space-y-3 text-gray-300">
                {credits?.cast?.slice(0, 10).map((actor) => (
                  <li
                    key={actor.id}
                    className="flex items-center gap-3 rounded-2xl bg-[#111111] p-3"
                  >
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : "/avatar-placeholder.png"
                      }
                      alt={actor.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <span>{actor.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">More details</h2>
              <div className="mt-4 space-y-3 text-gray-300">
                <div className="rounded-2xl bg-[#111111] px-4 py-4">
                  <p className="text-sm text-gray-400">Language</p>
                  <p>{movie.original_language?.toUpperCase()}</p>
                </div>
                <div className="rounded-2xl bg-[#111111] px-4 py-4">
                  <p className="text-sm text-gray-400">Maturity</p>
                  <p>{movie.adult ? "18+" : "PG"}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Available On</h2>

              {providers?.NG?.flatrate?.length ? (
                providers.NG.flatrate.map((provider) => (
                  <div
                    key={provider.provider_id}
                    className="rounded-xl bg-[#111111] px-4 py-3 mb-2"
                  >
                    {provider.provider_name}
                  </div>
                ))
              ) : (
                <p className="text-gray-400">
                  No streaming providers available in your region.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovvieDetails;
