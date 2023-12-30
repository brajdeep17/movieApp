import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const movieId  = useSelector((store) => store.movieId?.id);
  const data  = movies?.filter((movie) => movie.id === movieId?.id )

  if(movies === null) return;
  
  return (
    <div>
      <VideoTitle title = {data?.[0].original_title} overview = {data?.[0].overview}  />
      <VideoBackground movieId = {data?.[0].id} />
    </div>
  );
};

export default MainContainer;
