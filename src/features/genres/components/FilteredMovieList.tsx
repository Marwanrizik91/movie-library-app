import React from "react";
import { useUrlParams } from "../../../shared/hooks/useUrlParams";
import { useParams } from "react-router-dom";
import { useGetMoviesByGenreQuery } from "../services/moviesApi";
import { MoviesByGenreParams } from "../types/moviesGenreApi.types";
import PaginatedMovieResults from "../../../shared/components/PaginatedMovieResults";

const FilteredMovieList: React.FC = () => {
  const { id } = useParams();
  const { getParam } = useUrlParams();
  const currentPage = parseInt(getParam("page", "1"));
  const queryParams: MoviesByGenreParams = {
    page: currentPage,
    genreId: id || "",
  };
  const { data, isFetching, isError, refetch } =
    useGetMoviesByGenreQuery(queryParams);

  return (
    <PaginatedMovieResults
      data={data}
      isFetching={isFetching}
      isError={isError}
      refetch={refetch}
    />
  );
};

export default FilteredMovieList;
