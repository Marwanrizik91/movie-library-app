import React from "react";
import { Card, styled } from "@mui/material";
import { Movie } from "../../types";
import MovieModal from "../MovieModal";
import { MovieImage } from "./components/MovieImage";
import { useMovieModal } from "./hooks/useMovieModal";

const StyledCard = styled(Card)`
  margin: 1rem auto;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 450px;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`;

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { isOpen, isClosing, handleClose, handleOpen } = useMovieModal();

  return (
    <>
      <MovieModal
        movie={movie}
        isOpen={isOpen}
        isClosing={isClosing}
        onClose={handleClose}
      />
      <StyledCard
        role="article"
        aria-labelledby={`movie-${movie.id}-title`}
        aria-describedby={`movie-${movie.id}-desc`}
        id={`movie-${movie.id}-title`}
        onClick={handleOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <MovieImage
          posterPath={movie.poster_path}
          title={movie.title}
          movieId={movie.id}
        />
      </StyledCard>
    </>
  );
};

export default MovieCard;