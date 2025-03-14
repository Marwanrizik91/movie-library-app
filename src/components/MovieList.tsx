import React, { lazy, Suspense, useState } from "react";
import { useGetMoviesQuery } from "../services/moviesApi";
import { Grid2, CircularProgress } from "@mui/material";
import { MoviesQueryParams } from "../types/commonTypes";

const LazyMovieCard = lazy(() => import("./MovieCard"));

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryParams: MoviesQueryParams = { page: currentPage };
  const { data, isLoading, isError } = useGetMoviesQuery(queryParams);

  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Error loading movies.</p>;
  if (!data) return <p>No movies found.</p>;

  return (
    <div>
      <Grid2 container spacing={2}>
        <Suspense fallback={<CircularProgress />}>
          {data.results.map((movie: any) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
              <LazyMovieCard movie={movie} />
            </Grid2>
          ))}
        </Suspense>
      </Grid2>
    </div>
  );
};

export default MovieList;
