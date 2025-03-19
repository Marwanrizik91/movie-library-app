import React from "react";
import { useGetMoviesByGenreQuery } from "../../services/moviesApi";
import { MoviesByGenreParams } from "../../types/api.types";
import Pagination from "../common/Pagination";
import { useUrlParams } from "../../hooks/useUrlParams";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import MovieSkeletonGroup from "./MovieSkeletonGroup";
import ErrorDisplay from "../common/ErrorDisplay";

const FilteredMovieList: React.FC = () => {
  const { id } = useParams();
  const { getParam, setParam } = useUrlParams();
  const currentPage = parseInt(getParam("page", "1"));
  const queryParams: MoviesByGenreParams = {
    page: currentPage,
    genreId: id || "",
  };
  const { data, isFetching, isError, refetch } =
    useGetMoviesByGenreQuery(queryParams);

  const handlePageChange = (page: number) => {
    setParam("page", page.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isFetching) {
    return <MovieSkeletonGroup />;
  }

  if (isError) return <ErrorDisplay onRetry={() => refetch()} />;

  if (!data) return <p>No movies found.</p>;

  return (
    <div>
      <MovieList movies={data.results} />
      {data.total_pages > 1 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={data.total_pages}
          onPageChange={handlePageChange}
          aria-label="Pagination"
        />
      ) : null}
    </div>
  );
};

export default FilteredMovieList;
