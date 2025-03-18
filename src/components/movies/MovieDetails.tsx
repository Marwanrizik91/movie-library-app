import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import { Movie } from "../../types/movie.types";
import { useMemo } from "react";
import { ChevronRight } from "lucide-react";
import { getImageUrl } from "../../utils/helpers";

enum ContainerMetrics {
  Padding = 15,
  Gap = 15,
}

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
  padding: ${ContainerMetrics.Padding}px;
  z-index: 4;
  gap: ${ContainerMetrics.Gap}px;
  width: calc(100% - (${ContainerMetrics.Padding}px * 2));
`;

const TagsContainer = styled("ul")`
  display: flex;
  gap: ${ContainerMetrics.Gap}px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tag = styled("li")`
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

const MovieDetails = ({ movie }: { movie: Movie }) => {
  const theme = useTheme();
  const imageUrl = useMemo(
    () => getImageUrl(movie.poster_path),
    [movie.poster_path]
  );
  const tags = useMemo(
    () => [
      movie.release_date.split("-")[0],
      movie.vote_average ? `${movie.vote_average.toFixed(1)}/10` : "No Rating",
      movie.adult ? "Adult" : "All Ages",
      movie.original_language.toUpperCase(),
    ],
    [
      movie.release_date,
      movie.vote_average,
      movie.adult,
      movie.original_language,
    ]
  );

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
        <TagsContainer role="list" aria-label="Movie information tags">
          {tags.map((tag, index) => (
            <Tag
              sx={{
                backgroundColor: theme.palette.info.main,
                color: theme.palette.info.contrastText,
              }}
              key={index}
              role="listitem"
              tabIndex={0}
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
          tabIndex={0}
          aria-label="Movie overview"
        >
          {movie.overview}
        </Typography>
        <WatchNowButton
          aria-label="Watch movie"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          Watch Now
          <ChevronRight size={20} aria-hidden="true" />
        </WatchNowButton>
      </DetailsContainer>
    </ImageContainer>
  );
};

export default MovieDetails;
