import { lazy } from "react";

export { default as GenresSelect } from "./GenresSelect";
export const FilteredMovieList = lazy(() => import("./FilteredMovieList"));
