import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardMedia,
  css,
  keyframes,
  Modal,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Movie } from "../types/movieTypes";
import { ChevronRight, X } from "lucide-react";

const ANIMATION_LENGTH = 300; //ms

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

const openClose = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const closeOpen = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverviewContainer = styled(Box)<{ showOverview: boolean }>`
  width: 90%;
  max-width: 700px;
  height: 70%;
  max-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  transform-origin: center;
  :focus {
    outline: none;
  }
  animation: ${({ showOverview }) =>
    showOverview
      ? css`
          ${closeOpen} ${ANIMATION_LENGTH}ms ease-in-out forwards
        `
      : css`
          ${openClose} ${ANIMATION_LENGTH}ms ease-in-out forwards
        `};

  @media (max-width: 600px) {
    width: 95%;
    height: 85%;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  font-size: 20px;
  border: none;
  z-index: 5;
  background: transparent;
  :hover {
    background: transparent;
  }
`;

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [showOverview, setShowOverview] = useState(false);
  const [closing, setClosing] = useState(false);
  const theme = useTheme();

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setShowOverview(false);
    }, ANIMATION_LENGTH);
  };

  return (
    <>
      <StyledModal open={showOverview} onClose={handleClose}>
        <OverviewContainer
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.background.default,
          }}
          showOverview={closing}
        >
          <MovieDetails movie={movie} />
          <CloseButton onClick={() => setShowOverview(false)}>
            <X size={30} />
          </CloseButton>
        </OverviewContainer>
      </StyledModal>
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

const MovieDetails = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const theme = useTheme();

  const tags = [
    movie.release_date.split("-")[0],
    movie.vote_average.toFixed(1),
    movie.adult ? "Adult" : "All Ages",
    movie.original_language.toUpperCase(),
  ];

  return (
    <ImageContainer imageUrl={imageUrl} theme={theme}>
      <DetailsContainer>
        <Typography variant="h4">{movie.title}</Typography>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag
              sx={{
                backgroundColor: theme.palette.info.main,
                color: theme.palette.info.contrastText,
              }}
              key={index}
            >
              {tag}
            </Tag>
          ))}
        </TagsContainer>
        <Typography
          overflow={"auto"}
          align="center"
          variant="body1"
          color="inherit"
        >
          {movie.overview}
        </Typography>
        <WatchNowButton>
          Watch Now
          <ChevronRight size={20} />
        </WatchNowButton>
      </DetailsContainer>
    </ImageContainer>
  );
};

const ImageContainer = styled(Box)<{ imageUrl: string; theme: Theme }>`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  :after {
    content: "";
    position: absolute;
    inset: 0px;
    z-index: 1;
    background: ${({ theme }) => {
      const backgroundColor = theme.palette.background.default;
      return `linear-gradient(
        40deg,
        ${backgroundColor} 8.16%,
        rgba(6, 10, 23, 0) 40%
      ),
      linear-gradient(0deg, ${backgroundColor} 3.91%, rgba(6, 10, 23, 0) 55%)`;
    }};
  }
`;

const DetailsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 15px;
  z-index: 4;
  gap: 15px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled(Box)`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
`;

const WatchNowButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 3px;
  align-self: center;
  margin-inline-start: 10px;
`;

export default MovieCard;
