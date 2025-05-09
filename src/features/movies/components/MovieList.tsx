import { CircularProgress, Grid2 } from "@mui/material";
import React, { lazy, memo, Suspense } from "react";
import ErrorBoundary from "../../../shared/components/ErrorBoundary";
import { Movie } from "../types";
import { GRID_SIZES } from "../constants";

const LazyMovieCard = lazy(() => import("./MovieCard"));
const MemoizedMovieCard = memo(LazyMovieCard);

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
                <MemoizedMovieCard movie={movie} />
              </Grid2>
            ))}
          </ErrorBoundary>
        </Suspense>
      </Grid2>
    </div>
  );
};

export default MovieList;
