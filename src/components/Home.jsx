import React from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard'

function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <div>
        <MovieCard/>
      </div>
    </>
  )
}

export default Home