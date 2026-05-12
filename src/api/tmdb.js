import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

//FETCH BANNER IMAGE
export const fetchBannerMovies = async () => {
  const response = await api.get("/trending/movie/day");

  return response.data.results;
};


//FETCH MOVIE BY GENRE
export const fetchMoviesByGenre = async (genreId) => {
  const response = await api.get("/discover/movie", {
    params: {
      with_genres: genreId,
    },
  });

  return response.data.results;
};


// Fetch Trending Movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await api.get("/trending/movie/day");

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

// 🔥 Popular Movies
export const fetchPopularMovies = async () => {
  const response = await api.get("/movie/popular");

  return response.data.results;
};


//UPCOMING MOVIES
export const fetchUpcomingMovies = async () =>{
    const response = await api.get("movie/now_playing");
    return response.data.results
}

//TOP RATED

export const fetchTopRatedMovies = async () =>{
    const response = await api.get("/movie/top_rated");
    return response.data.results;
}


//--------------SHOWS ----------------

//TRENDING SHOWS
export const fetchTrendingShows = async () => {
  const response = await api.get("/trending/tv/day");

  return response.data.results;
};

export const fetchPopularShows = async () => {
  const response = await api.get("/tv/popular");

  return response.data.results;
};

export const fetchUpcomingShows = async () => {
  const response = await api.get("/tv/airing_today");

  return response.data.results;
};

export const fetchTopRatedShows = async () => {
  const response = await api.get("/tv/top_rated");

  return response.data.results;
};


