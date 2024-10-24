import React from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import { useParams } from 'react-router-dom'

function Movie({movie}) {
  let {Title} = useParams(movie.Title)
  return (
    <>
    <Navbar/>

    <div>
      <MovieCard movieData={movie}/>
    </div>
    {Title}
    </>
  )
}

export default Movie