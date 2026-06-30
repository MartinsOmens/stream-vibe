"use client";

import { useState } from "react";

import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import MovieGrid from "./components/MovieGrid";

import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchMoviesByGenre,
} from "../../../api/tmdb";

import { useMovieFilter } from "./hooks/useFilter";
import useMovies from "../../../hooks/useMovies";

const movieCategories = [
  "All",
  "Trending",
  "Upcoming",
  "Action",
  "Comedy",
  "Horror",
];

export default function MyMoviesSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [fetcher, setFetcher] = useState(() => fetchPopularMovies);

  const { data: movies, loading } = useMovies(fetcher);

  const categoryMap = {
    All: fetchPopularMovies,
    Trending: fetchTrendingMovies,
    Upcoming: fetchUpcomingMovies,
    Action: () => fetchMoviesByGenre(28),
    Comedy: () => fetchMoviesByGenre(35),
    Horror: () => fetchMoviesByGenre(27),
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    const fetcherFunction = categoryMap[category];

    if (fetcherFunction) {
      setFetcher(() => fetcherFunction);
    }
  };
  const filteredMovies = useMovieFilter(movies, search);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-white">Movies</h1>

        <p className="mt-2 text-gray-400">
          Discover trending, popular and upcoming movies.
        </p>
      </div>

      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Categories */}
      <FilterTabs
        categories={movieCategories}
        active={activeCategory}
        onSelect={handleCategoryChange}
      />

      {/* Movies */}
      <MovieGrid movies={filteredMovies} mediaType="movie" />
    </div>
  );
}
