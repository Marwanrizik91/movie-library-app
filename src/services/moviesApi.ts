import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre, Movie } from "../types/movie.types";
import { MoviesQueryParams, PaginatedResponse } from "../types/api.types";

const DEVELOPMENT_BASE_URL = "http://localhost:3000/api/movies";
const PRODUCTION_BASE_URL =
  "https://movie-library-api-i5f2.onrender.com/api/movies";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_BASE_URL || PRODUCTION_BASE_URL
    : DEVELOPMENT_BASE_URL;

interface MoviesByGenreQueryParams extends MoviesQueryParams {
  genreId: string;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Get Paginated movies response
    getMovies: builder.query<PaginatedResponse<Movie>, MoviesQueryParams>({
      query: ({ page = 1, query = "" }) => ({
        url: query ? "search" : "",
        params: { page, query },
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
  useGetGenresQuery,
  useGetMoviesByGenreQuery,
} = moviesApi;
