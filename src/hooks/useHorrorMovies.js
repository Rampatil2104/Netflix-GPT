import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  //Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=10",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
