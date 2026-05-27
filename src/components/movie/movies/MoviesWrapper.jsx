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
    <main className="min-h-screen w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-8 md:py-10">
        {/* ---------------- MOVIES ---------------- */}
        <button className="bg-red-600 px-4 py-2 rounded-lg text-sm mb-8 md:mb-10">
          Movies
        </button>

        <div className="space-y-12 md:space-y-16">
          <section>
            <SectionHeader title="Our Genres" />
            <GenreWrapper />
          </section>

          <section>
            <SectionHeader title="Popular Movies" />
            <PopularSection />
          </section>

          <section>
            <SectionHeader title="Trending Movies" />
            <TrendingSection />
          </section>

          <section>
            <SectionHeader title="New Released Movies" />
            <UpcomingSection />
          </section>

          <section>
            <SectionHeader title="Top Rated Movies" />
            <TopRatedSection />
          </section>
        </div>

        {/* ---------------- SHOWS ---------------- */}
        <button className="bg-red-600 px-4 py-2 rounded-lg text-sm mt-14 mb-8 md:mb-10">
          Shows
        </button>

        <div className="space-y-12 md:space-y-16">
          <section>
            <SectionHeader title="Popular Shows" />
            <PopularShowsSection />
          </section>

          <section>
            <SectionHeader title="Trending TV Shows" />
            <TrendingShowsSection />
          </section>

          <section>
            <SectionHeader title="New Released Shows" />
            <NewReleaseShows />
          </section>

          <section>
            <SectionHeader title="Must-Watch Shows" />
            <TopRatedShows />
          </section>
        </div>

        <div className="mt-16">
          <CTASection />
        </div>
      </div>
    </main>
  );
};

export default MoviesWrapper;