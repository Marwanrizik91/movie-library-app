import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DEVELOPMENT_BASE_URL = "http://localhost:3000/api/movies";
const PRODUCTION_BASE_URL = ""; // Replace with the actual production URL

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_BASE_URL || PRODUCTION_BASE_URL
    : DEVELOPMENT_BASE_URL;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Genre {
  id: number;
  name: string;
}

interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

interface MoviesQueryParams {
  page?: number;
}

interface SearchMoviesQueryParams extends MoviesQueryParams {
  query: string;
}

interface MoviesByGenreQueryParams extends MoviesQueryParams {
  genreId: string;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Get Paginated movies response
    getMovies: builder.query<PaginatedResponse<Movie>, MoviesQueryParams>({
      query: ({ page = 1 }) => ({
        url: "",
        params: { page },
      }),
    }),
    // Get Paginated movies response based on search query
    searchMovies: builder.query<
      PaginatedResponse<Movie>,
      SearchMoviesQueryParams
    >({
      query: ({ query, page = 1 }) => ({
        url: "search",
        params: { query, page },
      }),
    }),
    // Get all available movies genres
    getGenres: builder.query<Genre[], void>({
      query: () => "genres",
    }),
    // get Paginated movies based on genre id
    getMoviesByGenre: builder.query<
      PaginatedResponse<Movie>,
      MoviesByGenreQueryParams
    >({
      query: ({ genreId, page = 1 }) => ({
        url: "genre",
        params: { genreId, page },
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useSearchMoviesQuery,
  useGetGenresQuery,
  useGetMoviesByGenreQuery,
} = moviesApi;
