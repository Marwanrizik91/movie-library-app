import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { Card, CardMedia } from "@mui/material";
import { Movie } from "../../types/movie.types";
import MovieModal from "./MovieModal";
import { ANIMATION_LENGTH } from "../../utils/constants";
import { getImageUrl } from "../../utils/helpers";

const StyledCard = styled(Card)`
  margin: 1rem auto;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 450px;
  &:hover {
    transform: translateY(-2px);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: lightgray;
  cursor: pointer;
` as typeof CardMedia;

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = useMemo(
    () => getImageUrl(movie.poster_path),
    [movie.poster_path]
  );
  const [showOverview, setShowOverview] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setShowOverview(false);
    }, ANIMATION_LENGTH);
  };

  return (
    <>
      <MovieModal
        movie={movie}
        isOpen={showOverview}
        isClosing={closing}
        onClose={handleClose}
      />
      <StyledCard onClick={() => setShowOverview(true)}>
        <StyledCardMedia
          loading="lazy"
          component="img"
          image={imageUrl}
          alt={movie.title}
        />
      </StyledCard>
    </>
  );
};

export default MovieCard;
