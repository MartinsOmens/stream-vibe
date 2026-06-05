"use client";

import { useState } from "react";

import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import MovieGrid from "./components/MovieGrid";

import { movies, movieCategories,} from "./myMovies";

import { useMovieFilter } from "./hooks/useFilter";

export default function MyMoviesSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredMovies = useMovieFilter( movies, search, activeCategory );

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Movies
        </h1>

        <p className="mt-2 text-gray-400">
          Discover trending, popular and upcoming movies.
        </p>
      </div>

      {/* Search */}

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      {/* Categories */}

      <FilterTabs
        categories={movieCategories}
        active={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* Grid */}

      <MovieGrid
        movies={filteredMovies}
      />
    </div>
  );
}