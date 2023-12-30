import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants';
import { addTrailerVideo } from '../Utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[1] : json.results[1];
        console.log(trailer, "17");
        dispatch(addTrailerVideo(trailer
          ))
    
      };
      useEffect(() => {
        if (movieId) {
          getMovieVideos();
        }
      }, [movieId]);
}

export default useMovieTrailer