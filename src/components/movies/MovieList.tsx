import React, { lazy, Suspense, useState } from "react";
import { useGetMoviesQuery } from "../../services/moviesApi";
import { Grid2, CircularProgress } from "@mui/material";
import { MoviesQueryParams } from "../../types/commonTypes";
import Pagination from "../Pagination";
import { Movie } from "../../types/movieTypes";
import MovieSkeleton from "../common/Skeleton/MovieSkeleton";
import ErrorBoundary from "../common/ErrorBoundary";
import { GRID_SIZES, SKELETON_COUNT } from "../../utils/constants";

const LazyMovieCard = lazy(() => import("./MovieCard"));

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryParams: MoviesQueryParams = { page: currentPage };
  const { data, isLoading, isError } = useGetMoviesQuery(queryParams);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <Grid2 container spacing={2}>
        {[...Array(SKELETON_COUNT)].map((_, index) => (
          <Grid2 size={GRID_SIZES} key={index}>
            <MovieSkeleton />
          </Grid2>
        ))}
      </Grid2>
    );
  }

  if (isError) return <p>Error loading movies.</p>;
  if (!data) return <p>No movies found.</p>;

  return (
    <div>
      <Grid2 container spacing={2}>
        <Suspense fallback={<CircularProgress />}>
          <ErrorBoundary>
            {data.results.map((movie: Movie) => (
              <Grid2 size={GRID_SIZES} key={movie.id}>
                <LazyMovieCard movie={movie} />
              </Grid2>
            ))}
          </ErrorBoundary>
        </Suspense>
      </Grid2>
      <Pagination
        currentPage={currentPage}
        totalPages={data.total_pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MovieList;
