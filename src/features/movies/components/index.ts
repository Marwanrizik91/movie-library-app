import { lazy } from "react";
export { default as MovieList } from "./MovieList";
export { default as MovieModal } from "./MovieModal";

export const MovieCard = lazy(() => import("./MovieCard"));
export const MovieHome = lazy(() => import("./MovieHome"));
