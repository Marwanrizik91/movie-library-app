import { CardMedia, Box, Typography, styled } from "@mui/material";
import { useMemo } from "react";
import { getImageUrl } from "../../utils/movieHelpers";

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

interface MovieImageProps {
  posterPath: string;
  title: string;
  movieId: number;
}

export const MovieImage = ({ posterPath, title, movieId }: MovieImageProps) => {
  const imageUrl = useMemo(() => getImageUrl(posterPath), [posterPath]);

  return (
    <>
      <StyledCardMedia
        loading="lazy"
        component="img"
        image={imageUrl}
        alt={title}
        aria-describedby={`movie-${movieId}-img-desc`}
      />
      <ImageFallbackBox>
        {!posterPath && (
          <Typography
            id={`movie-${movieId}-title`}
            color="primary.light"
            variant="h3"
            component="h2"
          >
            {title}
          </Typography>
        )}
      </ImageFallbackBox>
    </>
  );
};
