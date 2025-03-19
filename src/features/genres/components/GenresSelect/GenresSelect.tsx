import { useState } from "react";
import { Button, CircularProgress, Typography, styled } from "@mui/material";
import { ChevronDown, RotateCw, X } from "lucide-react";
import { useGenreSelection } from "../../hooks/useGenreSelection";
import { GenresModal } from "./GenresModal";

const ErrorMessage = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 1rem;
`;

const GenresSelect = () => {
  const [open, setOpen] = useState(false);
  const {
    genres,
    selectedGenre,
    isFetching,
    isError,
    refetch,
    handleGenreSelect,
    clearSelection,
  } = useGenreSelection();

  if (isFetching) {
    return <CircularProgress sx={{ m: 1 }} color="secondary" />;
  }

  if (isError) {
    return (
      <ErrorMessage variant="body1" color="error">
        <RotateCw cursor="pointer" onClick={refetch} /> Error Loading Genres
      </ErrorMessage>
    );
  }

  return (
    <>
      {selectedGenre && (
        <Button
          onClick={clearSelection}
          sx={{ m: 1 }}
          variant="contained"
          endIcon={<X />}
          size="small"
        >
          Clear Selection
        </Button>
      )}
      <Button
        onClick={() => setOpen(true)}
        sx={{ m: 1 }}
        variant="outlined"
        endIcon={<ChevronDown />}
      >
        {selectedGenre?.name || "Genre"}
      </Button>
      <GenresModal
        open={open}
        onClose={() => setOpen(false)}
        genres={genres || []}
        onSelect={handleGenreSelect}
      />
    </>
  );
};

export default GenresSelect;
