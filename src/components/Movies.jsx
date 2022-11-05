import React from "react";
import { MovieCard } from "./MovieCard";

export const Movies = ({ allMovies }) => {
  const Input = "SuperMan";
  return (
    <>
      <div className="text-center m-20 text-2xl text-white font-medium">
        All {Input} Movies
      </div>
      <div className="grid gap-6 md:grid-cols-3 m-20">
        {allMovies.length > 0 ? (
          allMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))
        ) : (
          <div className="text-center text-2xl text-white font-medium">
            No Movies Found
          </div>
        )}
        {/* {allMovies.map((movie) => (
          <MovieCard movie={movie} />
        ))} */}
        {/* <MovieCard movie={allMovies}/> */}
      </div>
    </>
  );
};
