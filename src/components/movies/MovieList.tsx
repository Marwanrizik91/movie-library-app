import React, { lazy, Suspense } from "react";
import { useGetMoviesQuery } from "../../services/moviesApi";
import { Grid2, CircularProgress } from "@mui/material";
import { MoviesQueryParams } from "../../types/api.types";
import Pagination from "../Pagination";
import { Movie } from "../../types/movie.types";
import MovieSkeleton from "../common/Skeleton/MovieSkeleton";
import ErrorBoundary from "../common/ErrorBoundary";
import { GRID_SIZES, SKELETON_COUNT } from "../../utils/constants";
import { useUrlParams } from "../../hooks/useUrlParams";
import SearchBar from "./SearchBar";

const LazyMovieCard = lazy(() => import("./MovieCard"));

const MovieList: React.FC = () => {
  const { getParam, setParam } = useUrlParams();
  const currentPage = parseInt(getParam("page", "1"));
  const queryParams: MoviesQueryParams = {
    page: currentPage,
    query: getParam("query", ""),
  };
  const { data, isLoading, isError } = useGetMoviesQuery(queryParams);

  const handlePageChange = (page: number) => {
    setParam("page", page.toString());
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
      <SearchBar />
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
      {data.total_pages > 1 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={data.total_pages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </div>
  );
};

export default MovieList;
