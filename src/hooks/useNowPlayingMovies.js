import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { changeMovieId } from "../Utils/movieIdSlice";
 

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const nowPlayingMovies  = useSelector(store=>store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json()
      console.log(json.results)
      dispatch(addNowPlayingMovies(json.results))
      dispatch(changeMovieId({ id : json.results?.[0]?.id }));
    }
  
    useEffect(()=>{
     !nowPlayingMovies && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;