// src/pages/MovieDetails.jsx

import {
  Star,
  Play,
  Volume2,
  Plus,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Film,
  Globe,
} from "lucide-react";

import { useParams } from "react-router-dom";
import { banners } from "../data/banners";

const castData = [
  {
    name: "Rishab Shetty",
    role: "Lead Actor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    name: "Sapthami Gowda",
    role: "Actress",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    name: "Kishore",
    role: "Forest Officer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
  {
    name: "Achyuth Kumar",
    role: "Supporting",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400",
  },
  {
    name: "Pramod Shetty",
    role: "Supporting",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
  },
];

const reviews = [
  {
    name: "Aniket Roy",
    rating: 4.5,
    review:
      "This movie was recommended to me by a very dear friend who went for the movie by herself.",
  },
  {
    name: "Swaraj",
    rating: 5,
    review:
      "A refreshing promise that leads to the local tribal essence and emotional storytelling.",
  },
];

const MovieDetails = () => {
  const { id } = useParams();

  // Find selected movie
  const movie = banners.find((item) => item.id == id);

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800">
          {/* Background Image */}
          <img
            src={movie.image}
            alt={movie.title}
            className="h-[550px] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                {movie.title}
              </h1>

              <p className="mb-8 text-sm leading-7 text-zinc-300 md:text-base">
                {movie.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-red-700">
                  <Play size={18} fill="white" />
                  Play Now
                </button>

                <button className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                  <Plus size={20} />
                </button>

                <button className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/60 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black">
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="space-y-6 lg:col-span-2">
            {/* DESCRIPTION */}
            <div className="rounded-3xl border border-zinc-800 bg-[#121212] p-6">
              <h2 className="mb-4 text-xl font-semibold">Description</h2>

              <p className="leading-8 text-zinc-400">
                {movie.description}
              </p>
            </div>

            {/* CAST */}
            <div className="rounded-3xl border border-zinc-800 bg-[#121212] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Cast</h2>

                <div className="flex items-center gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-zinc-700">
                    <ChevronLeft size={18} />
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-zinc-700">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {castData.map((actor, index) => (
                  <div
                    key={index}
                    className="min-w-[150px] rounded-2xl bg-zinc-900 p-3 transition hover:bg-zinc-800"
                  >
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="mb-4 h-40 w-full rounded-xl object-cover"
                    />

                    <h3 className="font-medium">{actor.name}</h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      {actor.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEWS */}
            <div className="rounded-3xl border border-zinc-800 bg-[#121212] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Reviews</h2>

                <button className="rounded-xl border border-zinc-700 px-4 py-2 text-sm transition hover:bg-zinc-800">
                  + Add Your Review
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{review.name}</h3>

                        <p className="text-xs text-zinc-500">
                          From India
                        </p>
                      </div>

                      <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1">
                        <Star
                          size={14}
                          className="fill-red-500 text-red-500"
                        />

                        <span className="text-sm">
                          {review.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-zinc-400">
                      {review.review}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="h-fit space-y-6 rounded-3xl border border-zinc-800 bg-[#121212] p-6">
            {/* RELEASE YEAR */}
            <div>
              <div className="mb-2 flex items-center gap-2 text-zinc-400">
                <Calendar size={16} />

                <span className="text-sm">Released Year</span>
              </div>

              <h3 className="text-2xl font-bold">2022</h3>
            </div>

            {/* LANGUAGES */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-zinc-400">
                <Globe size={16} />

                <span className="text-sm">
                  Available Languages
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "English",
                  "Hindi",
                  "Tamil",
                  "Telugu",
                  "Kannada",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* RATINGS */}
            <div>
              <h3 className="mb-3 text-sm text-zinc-400">
                Ratings
              </h3>

              <div className="space-y-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                  <div className="flex items-center justify-between">
                    <span>IMDb</span>

                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-red-500 text-red-500"
                      />

                      <span>8.5</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                  <div className="flex items-center justify-between">
                    <span>Streamvibe</span>

                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-red-500 text-red-500"
                      />

                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GENRES */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-zinc-400">
                <Film size={16} />

                <span className="text-sm">Genres</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Action", "Adventure", "Drama"].map(
                  (genre) => (
                    <span
                      key={genre}
                      className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm"
                    >
                      {genre}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* DIRECTOR */}
            <div>
              <h3 className="mb-3 text-sm text-zinc-400">
                Director
              </h3>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
                  alt=""
                  className="h-14 w-14 rounded-xl object-cover"
                />

                <div>
                  <h4 className="font-medium">
                    Rishab Shetty
                  </h4>

                  <p className="text-xs text-zinc-500">
                    Director
                  </p>
                </div>
              </div>
            </div>

            {/* MUSIC */}
            <div>
              <h3 className="mb-3 text-sm text-zinc-400">
                Music
              </h3>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
                  alt=""
                  className="h-14 w-14 rounded-xl object-cover"
                />

                <div>
                  <h4 className="font-medium">
                    B. Ajaneesh Loknath
                  </h4>

                  <p className="text-xs text-zinc-500">
                    Music Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRENDING MOVIES */}
        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-bold">
            Trending Movies
          </h2>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {banners.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[320px] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    Action • Adventure
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;