// services/tmdb.js

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

// Banner
export const fetchBannerMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

// Trending
export const fetchTrendingMovies = async () => {
  const response = await api.get("/trending/movie/week");
  return response.data.results;
};

// By Genre
export const fetchMoviesByGenre = async (genreId) => {
  const response = await api.get(
    `/discover/movie?with_genres=${genreId}`
  );

  return response.data.results;
};