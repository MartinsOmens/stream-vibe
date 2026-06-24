import React, { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import MovieGrid from "./components/MovieGrid";
import useMovies from "../../../hooks/useMovies";
import {
  fetchTrendingShows,
  fetchPopularShows,
  fetchTopRatedShows,
  fetchAiringTodayShows,
  fetchOnTheAirShows,
} from "../../../api/tmdb";

const showCategories = [
  "All",
  "Trending Shows",
  "Popular Shows",
  "Top Rated Shows",
  "Airing Today",
  "Currently Airing",
];

const categoryFetchers = {
  All: fetchPopularShows,
  "Trending Shows": fetchTrendingShows,
  "Popular Shows": fetchPopularShows,
  "Top Rated Shows": fetchTopRatedShows,
  "Airing Today": fetchAiringTodayShows,
  "Currently Airing": fetchOnTheAirShows,
};

const ShowsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const fetcher = categoryFetchers[activeCategory];

  const { data: shows, loading } = useMovies(fetcher);

  const filteredMovies = useMemo(() => {
    if (!search.trim()) return shows;

    return shows.filter((show) =>
      (show.name || show.title).toLowerCase().includes(search.toLowerCase()),
    );
  }, [shows, search]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-white">Shows</h1>

        <p className="mt-2 text-gray-400">
          Discover trending, popular and upcoming shows.
        </p>
      </div>

      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Categories */}
      <FilterTabs
        categories={showCategories}
        active={activeCategory}
        onSelect={handleCategoryChange}
      />

      {/* Movies */}
      <MovieGrid movies={filteredMovies} />
    </div>
  );
};

export default ShowsPage;
