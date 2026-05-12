import React from "react";
import useMovies from "../../hooks/useMovies";
import { fetchTopRatedMovies } from "../../api/tmdb";
import MediaSlider from "../../components/movie/MediaSlider";

const TopRatedSection = () => {
  const { data: movies, loading } = useMovies(fetchTopRatedMovies);
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

export default TopRatedSection;
