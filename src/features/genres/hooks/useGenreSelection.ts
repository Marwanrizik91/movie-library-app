import { useMemo } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useGetGenresQuery } from "../services/moviesApi";
import { Genre } from "../types";

export const useGenreSelection = () => {
  const navigate = useNavigate();
  const match = useMatch("/genre/:id");
  const id = match?.params?.id;
  const { data, isFetching, isError, refetch } = useGetGenresQuery();

  const selectedGenre = useMemo(() => {
    return id ? data?.find((genre) => genre.id === parseInt(id)) : undefined;
  }, [data, id]);

  const handleGenreSelect = (genre: Genre) => {
    navigate("/genre/" + genre.id);
  };

  const clearSelection = () => {
    navigate("/");
  };

  return {
    genres: data,
    selectedGenre,
    isFetching,
    isError,
    refetch,
    handleGenreSelect,
    clearSelection,
  };
};
