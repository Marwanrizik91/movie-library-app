import { CircularProgress, Grid2 } from "@mui/material";
import React, { lazy, Suspense } from "react";
import ErrorBoundary from "../common/ErrorBoundary";
import { Movie } from "../../types/movie.types";
import { GRID_SIZES } from "../../utils/constants";

const LazyMovieCard = lazy(() => import("./MovieCard"));

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found.</p>; // Handle empty list
  }
  return (
    <div>
      <Grid2 container spacing={2} role="list" aria-label="List of movies">
        <Suspense fallback={<CircularProgress />}>
          <ErrorBoundary>
            {movies.map((movie: Movie) => (
              <Grid2 size={GRID_SIZES} key={movie.id}>
                <LazyMovieCard movie={movie} />
              </Grid2>
            ))}
          </ErrorBoundary>
        </Suspense>
      </Grid2>
    </div>
  );
};

export default MovieList;
