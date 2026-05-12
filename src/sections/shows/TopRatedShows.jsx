
import MediaSlider from "../../components/movie/MediaSlider";
import useMovies from "../../hooks/useMovies";
import { fetchTopRatedShows } from "../../api/tmdb";

const TopRatedShows = () => {
  const { data, loading } = useMovies(fetchTopRatedShows);

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

export default TopRatedShows;
