import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./features/movies/services/moviesApi";
import { genresApi } from "./features/genres/services/genresApi";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, genresApi.middleware),
});

// Export types for better type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
