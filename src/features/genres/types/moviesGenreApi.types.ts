export interface Genre {
  id: number;
  name: string;
}

export interface MoviesByGenreParams {
  genreId: string;
  page?: number;
}
