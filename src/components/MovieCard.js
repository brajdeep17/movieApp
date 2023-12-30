import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { changeMovieId } from '../Utils/movieIdSlice';

const MovieCard = ({posterPath, id}) => {
  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(changeMovieId({ id : id }));
  }
 
  if(!posterPath) return null;
  return (
    <div className='w-40' onClick={handleClick}>
      <img alt='moviecard' src = {IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard