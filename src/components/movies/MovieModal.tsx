import React from "react";
import { Box, Button, Modal, styled, useTheme } from "@mui/material";
import { Movie } from "../../types/movie.types";
import { X } from "lucide-react";
import { css, keyframes } from "@emotion/react";
import MovieDetails from "./MovieDetails";

const ANIMATION_LENGTH = 300;

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

interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({
  movie,
  isOpen,
  isClosing,
  onClose,
}) => {
  const theme = useTheme();

  return (
    <StyledModal
      role="dialog"
      aria-modal="true"
      open={isOpen}
      onClose={onClose}
    >
      <OverviewContainer
        sx={{
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.background.default,
          animation: isClosing
            ? css`
                ${closeOpen} ${ANIMATION_LENGTH}ms ease-in-out forwards
              `
            : css`
                ${openClose} ${ANIMATION_LENGTH}ms ease-in-out forwards
              `,
        }}
      >
        <MovieDetails movie={movie} />
        <CloseButton onClick={onClose}>
          <X size={30} />
        </CloseButton>
      </OverviewContainer>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverviewContainer = styled(Box)`
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

export default MovieModal;
