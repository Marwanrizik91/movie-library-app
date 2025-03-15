import { Box, Button, Typography, useTheme } from "@mui/material";
import { Movie } from "../../types/movie.types";
import { useMemo } from "react";
import { ChevronRight } from "lucide-react";
import styled from "@emotion/styled";
import { Theme } from "@mui/system";
import { getImageUrl } from "../../utils/helpers";

const MovieDetails = ({ movie }: { movie: Movie }) => {
  const theme = useTheme();
  const imageUrl = useMemo(
    () => getImageUrl(movie.poster_path),
    [movie.poster_path]
  );
  const tags = useMemo(
    () => [
      movie.release_date.split("-")[0],
      movie.vote_average ? movie.vote_average.toFixed(1) : "No Rating",
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
    <ImageContainer sx={{ backgroundImage: `url(${imageUrl})` }} theme={theme}>
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

const ImageContainer = styled(Box)<{ theme: Theme }>`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: center top;
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

export default MovieDetails;
