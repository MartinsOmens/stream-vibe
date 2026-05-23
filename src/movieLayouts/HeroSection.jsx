import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeroSection from "../movieLayouts/HeroSection";
import DescriptionCard from "../movieLayouts/DescriptionCard";
import CastSection from "../movieLayouts/CastSection";
import ReviewsSection from "../movieLayouts/ReviewsSection";
import Sidebar from "../movieLayouts/Sidebar";
import CTASection from "../components/home/CTA/CTASection";

import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchPersonDetails,
} from "../api/tmdb.js";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [crew, setCrew] = useState([]);
  const [directorInfo, setDirectorInfo] = useState(null);
  const [ musicInfo,setMusicInfo] = useState(null)

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        const creditsData = await fetchMovieCredits(id);
        const reviewsData = await fetchMovieReviews(id);

        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 10));
        setReviews(reviewsData.results.slice(0, 4));
        setCrew(creditsData.crew);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieData();
  }, [id]);

  const director = crew.find((person) => person.job === "Director");

  const music = crew.find(
    (person) =>
      person.job === "Original Music Composer" || person.job === "Music",
  );

  const languages =
    movie?.spoken_languages?.map((lang) => lang.english_name) || [];

  // 3. FETCH DIRECTOR IMAGE (CORRECT WAY)
  useEffect(() => {
    const getDirectorInfo = async () => {
      if (!director?.id) return;

      try {
        const data = await fetchPersonDetails(director.id);
        setDirectorInfo(data);
      } catch (err) {
        console.log(err);
      }
    };

    getDirectorInfo();
  }, [director?.id]);

  //FETCJ MUSIC DIRECTOR IMAGE

  useEffect(() => {
  const getMusicInfo = async () => {
    if (!music?.id) return;

    try {
      const data = await fetchPersonDetails(music.id);
      setMusicInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  getMusicInfo();
}, [music?.id]);

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--color-secondary) text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* HERO */}
        <HeroSection movie={movie} />

        {/* CONTENT */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* LEFT */}
          <div className="space-y-6 lg:col-span-2">
            <DescriptionCard movie={movie} />

            <CastSection cast={cast} />

            <ReviewsSection reviews={reviews} />
          </div>

          {/* RIGHT */}
          <Sidebar
            movie={movie}
            director={director}
            directorInfo={directorInfo}
            music={music}
            musicInfo = {musicInfo}
          />
        </div>

        <CTASection />
      </div>
    </div>
  );
};

export default MovieDetails;
