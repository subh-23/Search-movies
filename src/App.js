import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Movies } from "./components/Movies";
import { useEffect, useRef, useState } from "react";
const Axios = require("axios");

const API_URL = "https://www.omdbapi.com/?apikey=d41febc8"; //`allMovies` is an array of objects. Each object contains the details of a movie. We are passing this array to the `Movies` component as a prop.

const title ="batman"

function App() {

  const [allMovies, setAllMovies] = useState([]);

  const allMovieApi = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const movies = await response.json();
    console.log(movies);
    setAllMovies(movies.Search);
  }

  useEffect(() => {
    allMovieApi(title);
  }, []);

  return (
    
    <>
      <h1 className="text-center mt-10 text-5xl text-white font-semibold">
        MovieInfo
      </h1>
      <SearchBar />
      <Movies allMovies={allMovies} />
    </>
  );
}

export default App;
