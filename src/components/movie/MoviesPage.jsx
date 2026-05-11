import React from 'react'
import MovieBanner from './MovieBanner'
import MoviesWrapper from './movies/MoviesWrapper'

const MoviesPage = () => {
  return (
    <div className="w-full ">
      <MovieBanner/>
      <MoviesWrapper/>
    </div>
  )
}

export default MoviesPage
