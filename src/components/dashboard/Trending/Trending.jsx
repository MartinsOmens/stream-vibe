import TrendingHeader from "./TrendingHeader";
import TrendingHero from "./TrendingHero";
import TrendingGrid from "./TrendingGrid";

import { trendingData } from "./trendingData";

export default function Trending() {
  const heroMovie = trendingData[0];

  return (
    <section className="p-6">
      <TrendingHeader />

      <TrendingHero movie={heroMovie} />

      <TrendingGrid movies={trendingData} />
    </section>
  );
}