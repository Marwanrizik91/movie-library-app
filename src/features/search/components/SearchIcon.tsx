import { InputAdornment, useTheme } from "@mui/material";
import { Search, X } from "lucide-react";

interface SearchIconProps {
  searchTerm: string;
  onClear: () => void;
}

export const SearchIcon = ({ searchTerm, onClear }: SearchIconProps) => {
  const theme = useTheme();
  
  return (
    <InputAdornment position="start">
      {searchTerm ? (
        <X
          color={theme.palette.text.primary}
          size={20}
          cursor="pointer"
          onClick={onClear}
          aria-label="Clear search"
        />
      ) : (
        <Search
          color={theme.palette.text.primary}
          size={20}
          aria-hidden="true"
        />
      )}
    </InputAdornment>
  );
};