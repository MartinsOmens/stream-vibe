import React from "react";
import { fetchUpcomingMovies } from "../../api/tmdb";
import useMovies from "../../hooks/useMovies";
import MediaSlider from "../../components/movie/MediaSlider";

const UpcomingSection = () => {
  const { data: movies, loading } = useMovies(fetchUpcomingMovies);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }
  return (
    <section>
      <MediaSlider
        data={movies}
        prevClass="trend-prev"
        nextClass="trend-next"
      />
    </section>
  );
};

export default UpcomingSection;
