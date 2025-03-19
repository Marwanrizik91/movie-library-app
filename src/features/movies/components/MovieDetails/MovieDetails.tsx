import { Box, styled, Typography } from "@mui/material";
import { memo, useMemo } from "react";
import { Movie } from "../../types";
import { getImageUrl } from "../../utils/movieHelpers";
import { MOVIE_DETAILS_METRICS } from "../../constants/styles.constants";
import { useMovieTags } from "../../hooks/useMovieTags";
import { MovieTags } from "../MovieTags";
import { WatchButton } from "./WatchButton";

const ImageContainer = styled(Box)`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  :after {
    content: "";
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 10px;
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
  padding: ${MOVIE_DETAILS_METRICS.container.padding}px;
  z-index: 4;
  gap: ${MOVIE_DETAILS_METRICS.container.gap}px;
  width: calc(100% - (${MOVIE_DETAILS_METRICS.container.padding}px * 2));
  ${({ theme }) => `
   backgroundColor: ${theme.palette.info.main};
   color: ${theme.palette.info.contrastText};
  `}
`;

const MovieDetails = memo(({ movie }: { movie: Movie }) => {
  const imageUrl = useMemo(
    () => getImageUrl(movie.poster_path),
    [movie.poster_path]
  );

  const tags = useMovieTags(movie);

  return (
    <ImageContainer
      sx={{ backgroundImage: `url(${imageUrl})` }}
      role="article"
      aria-label={`Movie details for ${movie.title}`}
    >
      <DetailsContainer>
        <Typography variant="h4" component="h2" tabIndex={0}>
          {movie.title}
        </Typography>
        <MovieTags tags={tags} />
        <Typography
          overflow={"auto"}
          align="center"
          variant="body1"
          color="inherit"
          tabIndex={0}
          aria-label="Movie overview"
        >
          {movie.overview}
        </Typography>
        <WatchButton />
      </DetailsContainer>
    </ImageContainer>
  );
});

export default MovieDetails;
