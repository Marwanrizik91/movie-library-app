import { TMDB_IMAGE_URL } from "./constants";

export const getImageUrl = (posterPath: string | null): string => {
  if (!posterPath) {
    return "https://placehold.co/400x600";
  }
  return `${TMDB_IMAGE_URL}${posterPath}`;
};
