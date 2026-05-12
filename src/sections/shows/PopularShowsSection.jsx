
import MediaSlider from "../../components/movie/MediaSlider";
import useMovies from "../../hooks/useMovies";
import { fetchPopularShows } from "../../api/tmdb";

const PopularShowsSection = () => {
  const { data, loading } = useMovies(fetchPopularShows);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <section className="mb-16">
      <MediaSlider
        data={data}
        prevClass="tv-trend-prev"
        nextClass="tv-trend-next"
      />
    </section>
  );
};

export default PopularShowsSection;