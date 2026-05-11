import { useParams } from "react-router-dom";

import MovieOne from "../movieLayouts/MovieOne";
import MovieTwo from "../movieLayouts/MovieTwo";
import MovieThree from "../movieLayouts/MovieThree";
import DefaultMovie from "../movieLayouts/DefaultMovie";

const MovieDetails = () => {
  const { id } = useParams();

  // Different UI based on movie id
  switch (id) {
    case "1":
      return <MovieOne />;

    case "2":
      return <MovieTwo />;

    case "3":
      return <MovieThree />;

    default:
      return <DefaultMovie />;
  }
};

export default MovieDetails;
