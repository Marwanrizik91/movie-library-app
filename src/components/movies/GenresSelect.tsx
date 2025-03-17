import { useMemo, useRef, useState } from "react";
import { CircularProgress, Modal, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ChevronDown, RotateCw, X } from "lucide-react";
import { useGetGenresQuery } from "../../services/moviesApi";
import { Genre } from "../../types/movie.types";
import { useMatch, useNavigate } from "react-router-dom";

const GenresContainer = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  max-height: 80dvh;
  overflow: auto;
`;

const StyledLi = styled("li")`
  margin: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;
`;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ErrorMessage = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 1rem;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
  background-color: transparent;
`;

const GenresSelect: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Restore focus only if the modal was open
    modalRef.current?.focus();
  };

  const navigate = useNavigate();
  const match = useMatch("/genre/:id");
  const id = match?.params?.id;

  const { data, isLoading, isError, refetch } = useGetGenresQuery();
  const selectedGenre = useMemo(() => {
    return id ? data?.find((genre) => genre.id === parseInt(id)) : undefined;
  }, [data, id]);

  if (isLoading) {
    return <CircularProgress sx={{ m: 1 }} color="secondary" />;
  }
  if (isError) {
    return (
      <ErrorMessage variant="body1" color="error">
        <RotateCw cursor="pointer" onClick={refetch} /> Error Loading Genres
      </ErrorMessage>
    );
  }

  const handleGenreSelect = (genre: Genre) => {
    handleClose();
    navigate("/genre/" + genre.id);
  };

  const clearSelection = () => {
    handleClose();
    navigate("/");
  };

  return (
    <>
      {selectedGenre && (
        <Button
          onClick={clearSelection}
          sx={{ m: 2 }}
          variant="contained"
          endIcon={<X />}
          size="small"
        >
          Clear Selection
        </Button>
      )}
      <Button
        onClick={handleOpen}
        sx={{ m: 2 }}
        variant="outlined"
        endIcon={<ChevronDown />}
      >
        {selectedGenre?.name || "Genre"}
      </Button>
      <StyledModal open={open} onClose={handleClose}>
        <div ref={modalRef} tabIndex={-1}>
          <CloseButton onClick={handleClose}>
            <X />
          </CloseButton>
          <GenresContainer>
            {data?.map((genre) => (
              <StyledLi
                onClick={() => handleGenreSelect(genre)}
                key={genre.id}
                tabIndex={0}
              >
                {genre.name}
              </StyledLi>
            ))}
          </GenresContainer>
        </div>
      </StyledModal>
    </>
  );
};

export default GenresSelect;
