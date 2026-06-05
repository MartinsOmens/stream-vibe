"use client";

import { useState } from "react";

import SeriesHero from "./components/SeriesHero";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ContinueWatchingSeries from "./components/ContinueWatchingSeries";
import SeriesGrid from "./components/SeriesGrid";

import { genres, series } from "./seriesData";

import { useSeriesFilter } from "./hooks/useSeriesFilter";

export default function SeriesPage() {
  const [search, setSearch] = useState("");

  const [activeGenre, setActiveGenre] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredSeries = useSeriesFilter(series, search, activeGenre, status);

  return (
    <div className="space-y-10">
      <SeriesHero />

      <SearchBar value={search} onChange={setSearch} />

      <FilterBar
        genre={activeGenre}
        setGenre={setActiveGenre}
        status={status}
        setStatus={setStatus}
      />

      <ContinueWatchingSeries />

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Popular Series</h2>
        <SeriesGrid series={filteredSeries} />
      </section>
    </div>
  );
}
