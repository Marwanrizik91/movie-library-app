import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "../../../config/env";
import { PaginatedResponse } from "../../../shared/types/api.types";
import { Movie, MoviesQueryParams } from "../types";

const BASE_URL = API_CONFIG.baseUrl;

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
  }),
});

export const { useGetMoviesQuery } = moviesApi;
