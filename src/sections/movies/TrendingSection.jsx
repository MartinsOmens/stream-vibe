
import useMovies from "../../hooks/useMovies";
import { fetchTrendingMovies } from "../../api/tmdb";
import MediaSlider from "../../components/movie/MediaSlider";

const TrendingSection = () => {
  const { data: movies, loading } = useMovies(fetchTrendingMovies);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <section className="mb-16">
      <MediaSlider
        data={movies}
        prevClass="trend-prev"
        nextClass="trend-next"
      />
    </section>
  );
};

export default TrendingSection;
