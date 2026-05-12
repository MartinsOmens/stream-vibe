import MovieGenreSection from "../../../sections/movies/MovieGenreSection";

const GenreWrapper = () => {
  return (
    <div className="">

      <MovieGenreSection
        title="Action Movies"
        genreId={28}
        prevClass="action-prev"
        nextClass="action-next"
      />

      <MovieGenreSection
        title="Comedy Movies"
        genreId={35}
        prevClass="comedy-prev"
        nextClass="comedy-next"
      />

      <MovieGenreSection
        title="Horror Movies"
        genreId={27}
        prevClass="horror-prev"
        nextClass="horror-next"
      />

      <MovieGenreSection
        title="Drama Movies"
        genreId={18}
        prevClass="drama-prev"
        nextClass="drama-next"
      />

    </div>
  );
};

export default GenreWrapper;