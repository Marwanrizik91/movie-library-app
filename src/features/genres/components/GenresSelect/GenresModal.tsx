import { Modal, Button, styled } from "@mui/material";
import { X } from "lucide-react";
import { useRef } from "react";
import { GenresList } from "./GenresList";
import { Genre } from "../../types";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
  background-color: transparent;
`;

interface GenresModalProps {
  open: boolean;
  onClose: () => void;
  genres: Genre[];
  onSelect: (genre: Genre) => void;
}

export const GenresModal = ({
  open,
  onClose,
  genres,
  onSelect,
}: GenresModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <StyledModal role="dialog" aria-modal="true" open={open} onClose={onClose}>
      <div ref={modalRef} tabIndex={-1}>
        <CloseButton onClick={onClose}>
          <X />
        </CloseButton>
        <GenresList
          genres={genres}
          onSelect={(genre) => {
            onSelect(genre);
            onClose();
          }}
        />
      </div>
    </StyledModal>
  );
};
