import { useMemo } from "react";
import { Movie } from "../types";

export const useMovieTags = (movie: Movie) => {
  return useMemo(
    () => [
      movie.release_date.split("-")[0],
      movie.vote_average ? `${movie.vote_average.toFixed(1)}/10` : "No Rating",
      movie.adult ? "Adult" : "All Ages",
      movie.original_language.toUpperCase(),
    ],
    [
      movie.release_date,
      movie.vote_average,
      movie.adult,
      movie.original_language,
    ]
  );
};
