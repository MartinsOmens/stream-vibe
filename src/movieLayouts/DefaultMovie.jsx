
import { useParams } from "react-router-dom";
import { banners } from "../data/banners";

const DefaultMovie = () => {
  const { id } = useParams();

  const movie = banners.find((item) => item.id == id);

  if (!movie) {
    return <h1>Movie Not Found</h1>;
  }

  return (
    <div className="w-full py-8 ">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-[500px] object-cover"
        />

        <div className="p-10">
          <h1 className="text-5xl font-bold">{movie.title}</h1>

          <p className="mt-5 text-gray-400 max-w-2xl">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultMovie;
