
import useGenreMovies from "../../hooks/useGenreMovies";
import { fetchMoviesByGenre } from "../../api/tmdb";
import MediaSlider from "../../components/movie/MediaSlider";

const MovieGenreSection = ({ title, genreId, prevClass, nextClass }) => {
  const { movies, loading } = useGenreMovies(() => fetchMoviesByGenre(genreId));

  if (loading) {
    return (
      <section className="">
        <h2 className="text-white text-2xl font-bold mb-6">{title}</h2>
        <p className="text-gray-400">Loading...</p>
      </section>
    );
  }

  return (
    <section className="mb-16">
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mb-6">{title}</h2>

      {/* Slider */}
      <MediaSlider data={movies} prevClass={prevClass} nextClass={nextClass} />
    </section>
  );
};

export default MovieGenreSection;
