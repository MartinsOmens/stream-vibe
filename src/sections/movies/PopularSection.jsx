
import useMovies from "../../hooks/useMovies";
import { fetchPopularMovies } from "../../api/tmdb";
import MediaSlider from "../../components/movie/MediaSlider";

const PopularSection = () => {
  const { data: movies, loading } = useMovies(fetchPopularMovies);

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

export default PopularSection;
