import GenreSlider from "../sliders/GenreSlider";
import TopGenreSlider from "../sliders/TopGenreSlider";
import TrendingSlider from "../sliders/TrendingSlider";

import SectionHeader from "../SectionHeader";

import {
  genres,
  topGenres,
  trendingMovies,
  newRelease,
  mustWatch,
} from "../../../data/moviesData";

import {
  trendingShows,
  newReleaseShows,
  mustWatchShows,
} from "../../../data/shows";
import NewReleaseSlider from "../sliders/NewReleaseSlider";
import TrendingShowSlider from "../shows/showSliders/TrendingShowSliders";
import NewReleaseShowSlider from "../shows/showSliders/NewReleaseShowSlider";
import MustWatchShowSlider from "../shows/showSliders/MustWatchShowSlider";
import CTASection from "../../home/CTA/CTASection";

const MoviesWrapper = () => {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <button className="bg-red-600 px-4 py-2 rounded-lg text-sm mb-10">
          Movies
        </button>

        <section className="mb-16">
          <SectionHeader title="Our Genres" />
          <GenreSlider data={genres} />
        </section>

        <section className="mb-16">
          <SectionHeader title="Popular Top 10 In Genres" />
          <TopGenreSlider data={topGenres} />
        </section>

        <section className="mb-16">
          <SectionHeader title="Trending Now" />
          <TrendingSlider data={trendingMovies} />
        </section>

        <section className="mb-16">
          <SectionHeader title="New Releases" />
          <NewReleaseSlider data={newRelease} />
        </section>

        <section className="mb-16">
          <SectionHeader title="Must - Watch Movies" />
          <NewReleaseSlider data={mustWatch} />
        </section>
      </div>

      {/* ----------SHOWS----------- */}
      <div className="max-w-7xl mx-auto mt-10">
        <button className="bg-red-600 px-4 py-2 rounded-lg text-sm my-10">
          SHOWS
        </button>

        <section className="mb-16">
          <SectionHeader title="Our Genres" />
          <GenreSlider data={genres} />
        </section>

        <section className="mb-16">
          <SectionHeader title="Popular Top 10 In Genres" />
          <TopGenreSlider data={topGenres} />
        </section>

        <section className="mb-16">
          <SectionHeader title="Trending Shows Now" />
          <TrendingShowSlider data={trendingShows} />
        </section>

        <section className="mb-16">
          <SectionHeader title="New Released Shows" />
          <NewReleaseShowSlider data={newReleaseShows} />
        </section>

        <section className="mb-16">
          <SectionHeader title="Must-Watch Shows" />
          <MustWatchShowSlider data={mustWatchShows} />
        </section>

        <CTASection />
      </div>
    </div>
  );
};

export default MoviesWrapper;
