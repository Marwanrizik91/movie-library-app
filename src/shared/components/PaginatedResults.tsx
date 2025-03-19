import React, { ReactNode } from "react";
import { useUrlParams } from "../hooks/useUrlParams";
import Pagination from "./Pagination";
import { PaginatedResponse } from "../types/api.types";

interface PaginatedResultsProps<T> {
  data: PaginatedResponse<T> | undefined;
  isFetching: boolean;
  isError: boolean;
  LoadingComponent: ReactNode;
  ErrorComponent: ReactNode;
  ResultsComponent: React.ComponentType<{ items: T[] }>;
}

function PaginatedResults<T>({
  data,
  isFetching,
  isError,
  LoadingComponent,
  ErrorComponent,
  ResultsComponent,
}: PaginatedResultsProps<T>) {
  const { getParam, setParam } = useUrlParams();
  const currentPage = parseInt(getParam("page", "1"));

  const handlePageChange = (page: number) => {
    setParam("page", page.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isFetching) {
    return <>{LoadingComponent}</>;
  }

  if (isError) return <>{ErrorComponent}</>;

  if (!data) return <p>No results found.</p>;

  return (
    <div>
      <ResultsComponent items={data.results} />
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
}

export default PaginatedResults;
