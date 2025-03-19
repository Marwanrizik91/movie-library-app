import React from "react";
import { useUrlParams } from "../../../shared/hooks/useUrlParams";
import { useGetMoviesQuery } from "../services/moviesApi";
import { MoviesQueryParams } from "../types";
import PaginatedMovieResults from "../../../shared/components/PaginatedMovieResults";

const MovieHome: React.FC = () => {
  const { getParam } = useUrlParams();
  const currentPage = parseInt(getParam("page", "1"));
  const queryParams: MoviesQueryParams = {
    page: currentPage,
    query: getParam("query", ""),
  };
  const { data, isFetching, isError, refetch } = useGetMoviesQuery(queryParams);

  return (
    <PaginatedMovieResults
      data={data}
      isFetching={isFetching}
      isError={isError}
      refetch={refetch}
    />
  );
};

export default MovieHome;
