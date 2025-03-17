import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre, Movie } from "../types/movie.types";
import { MoviesQueryParams, PaginatedResponse } from "../types/api.types";
import { API_CONFIG } from "../config/env";

const BASE_URL = API_CONFIG.baseUrl;

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
