import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "../../../config/env";
import { Movie, MoviesQueryParams } from "../../movies/types";
import { PaginatedResponse } from "../../../shared/types/api.types";
import { Genre } from "../types";

const BASE_URL = API_CONFIG.baseUrl;

interface MoviesByGenreQueryParams extends MoviesQueryParams {
  genreId: string;
}

export const genresApi = createApi({
  reducerPath: "genresApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
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

export const { useGetGenresQuery, useGetMoviesByGenreQuery } = genresApi;
