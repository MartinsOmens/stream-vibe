import SectionHeader from "../SectionHeader";
import CTASection from "../../home/CTA/CTASection";
import GenreWrapper from "../movies/GenreWrapper";
import PopularSection from "../../../sections/movies/PopularSection";
import TrendingSection from "../../../sections/movies/TrendingSection";
import UpcomingSection from "../../../sections/movies/UpcomingSection";
import TopRatedSection from "../../../sections/movies/TopRatedSection";
import TrendingShowsSection from "../../../sections/shows/TrendingShowsSection";
import PopularShowsSection from "../../../sections/shows/PopularShowsSection";
import TopRatedShows from "../../../sections/shows/TopRatedShows";
import NewReleaseShows from "../../../sections/shows/NewReleaseShows";

const MoviesWrapper = () => {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <button className="bg-red-600 px-4 py-2 rounded-lg text-sm mb-10">
          Movies
        </button>

        <section className="mb-16">
          <SectionHeader title="Our Genres" />
          <GenreWrapper />
        </section>

        <section className="mb-16">
          <SectionHeader title="Popular Movies" />
          <PopularSection />
        </section>

        <section className="mb-16">
          <SectionHeader title="Trending Movies" />
          <TrendingSection />
        </section>

        <section className="mb-16">
          <SectionHeader title="New Released Movies" />
          <UpcomingSection />
        </section>

        <section className="mb-16">
          <SectionHeader title="Top Rated Movies" />
          <TopRatedSection />
        </section>
      </div>

      {/* ----------SHOWS----------- */}
      <div className="max-w-7xl mx-auto mt-10">
        <button className="bg-red-600 px-4 py-2 rounded-lg text-sm my-10">
          SHOWS
        </button>

        <section className="mb-16">
          <SectionHeader title="Popular Shows" />
          <PopularShowsSection />
        </section>

        <section className="mb-16">
          <SectionHeader title="Trending TV Shows" />
          <TrendingShowsSection />
        </section>

        <section className="mb-16">
          <SectionHeader title="New Released Shows" />
          <NewReleaseShows />
        </section>

        <section className="mb-16">
          <SectionHeader title="Must-Watch Shows" />
          <TopRatedShows />
        </section>

        <CTASection />
      </div>
    </div>
  );
};

export default MoviesWrapper;
