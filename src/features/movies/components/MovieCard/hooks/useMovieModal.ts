import { useState } from "react";
import { ANIMATION_LENGTH } from "../../../constants";

export const useMovieModal = () => {
  const [showOverview, setShowOverview] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setShowOverview(false);
    }, ANIMATION_LENGTH);
  };

  const handleOpen = () => setShowOverview(true);

  return {
    isOpen: showOverview,
    isClosing: closing,
    handleClose,
    handleOpen,
  };
};