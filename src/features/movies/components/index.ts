import { lazy } from "react";
export { default as MovieList } from "./MovieList";
export { default as MovieModal } from "./MovieModal";
export { default as MovieCard } from "./MovieCard";
export const MovieHome = lazy(() => import("./MovieHome"));
