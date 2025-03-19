import React from "react";
import { PaginatedResponse } from "../types/api.types";
import { Movie } from "../../features/movies/types";
import PaginatedResults from "./PaginatedResults";
import MovieSkeletonGroup from "../../features/movies/components/movieSkeletonGroup";
import ErrorDisplay from "./ErrorDisplay";
import { MovieList } from "../../features/movies/components";

interface PaginatedMovieResultsProps {
  data: PaginatedResponse<Movie> | undefined;
  isFetching: boolean;
  isError: boolean;
  refetch: () => void;
}

const PaginatedMovieResults: React.FC<PaginatedMovieResultsProps> = (props) => (
  <PaginatedResults
    {...props}
    LoadingComponent={<MovieSkeletonGroup />}
    ErrorComponent={<ErrorDisplay onRetry={props.refetch} />}
    ResultsComponent={({ items }) => <MovieList movies={items} />}
  />
);

export default PaginatedMovieResults;
