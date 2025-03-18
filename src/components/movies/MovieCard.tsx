import React, { useMemo, useState } from "react";
import { Box, Card, CardMedia, styled, Typography } from "@mui/material";
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
  cursor: pointer;
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

const ImageFallbackBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
  padding-top: 1rem;
`;

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
      <StyledCard
        role="article"
        aria-labelledby={`movie-${movie.id}-title`}
        onClick={() => setShowOverview(true)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShowOverview(true);
          }
        }}
      >
        <StyledCardMedia
          loading="lazy"
          component="img"
          image={imageUrl}
          alt={movie.title}
        />
        <ImageFallbackBox>
          {!movie.poster_path && (
            <Typography
              id={`movie-${movie.id}-title`}
              color="primary.light"
              variant="h3"
              component="h2"
            >
              {movie.title}
            </Typography>
          )}
        </ImageFallbackBox>
      </StyledCard>
    </>
  );
};

export default MovieCard;
