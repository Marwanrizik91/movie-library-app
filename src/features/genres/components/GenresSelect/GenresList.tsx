import { styled } from "@mui/material";
import { Genre } from "../../types";

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
  padding: 0 10px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

interface GenresListProps {
  genres: Genre[];
  onSelect: (genre: Genre) => void;
}

export const GenresList = ({ genres, onSelect }: GenresListProps) => (
  <GenresContainer>
    {genres?.map((genre) => (
      <StyledLi
        onClick={() => onSelect(genre)}
        key={genre.id}
        tabIndex={0}
        role="button"
      >
        {genre.name}
      </StyledLi>
    ))}
  </GenresContainer>
);
