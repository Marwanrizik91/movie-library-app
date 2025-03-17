export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface MoviesQueryParams {
  page?: number;
  query?: string;
}

export interface MoviesByGenreParams {
  genreId: string;
  page?: number;
}
