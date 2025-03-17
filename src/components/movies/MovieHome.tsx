import React from "react";
import { useGetMoviesQuery } from "../../services/moviesApi";
import { MoviesQueryParams } from "../../types/api.types";
import Pagination from "../Pagination";
import { useUrlParams } from "../../hooks/useUrlParams";
import MovieList from "./MovieList";
import MovieSkeletonGroup from "./MovieSkeletonGroup";

const MovieHome: React.FC = () => {
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
    return <MovieSkeletonGroup />;
  }

  if (isError) return <p>Error loading movies.</p>;
  if (!data) return <p>No movies found.</p>;

  return (
    <div>
      <MovieList movies={data.results} />
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

export default MovieHome;
