import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { changeMovieId } from '../Utils/movieIdSlice';

const SecondaryContainer = () => {  
  const movies = useSelector((store)=>store.movies)

  return (
    <div className='bg-black'>
    <div className='mt-0 md:-mt-40 relative z-20 pl-8'>
      <MovieList title  = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title  = {"Trending"} movies = {movies.nowPlayingMovies}/>
      <MovieList title  = {"Popular"} movies = {movies.popularMovies}/>
      <MovieList title  = {"Upcoming Movies"} movies = {movies.nowPlayingMovies}/>
      <MovieList title  = {"Horror"} movies = {movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer