import React from "react";
import { MovieCard } from "./MovieCard";

export const Movies = ({ allMovies }) => {
  const Input = "SuperMan";
  return (
    <>
      <div className="text-center m-20 text-2xl text-white font-medium">
        All {Input} Movies
      </div>
      <div class="grid gap-6 md:grid-cols-3 m-20">
        {allMovies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </>
  );
};
