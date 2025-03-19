import { styled, TextField } from "@mui/material";

import { SearchIcon } from "./SearchIcon";
import { useSearch } from "../hooks/useSearch";

const AriaLive = styled("div")`
  position: absolute;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const SearchBar = () => {
  const { searchTerm, register, handleSearchCancel } = useSearch();

  return (
    <>
      <TextField
        placeholder="Search movies..."
        color="secondary"
        {...register("searchTerm")}
        aria-label="Search for movies"
        slotProps={{
          input: {
            role: "searchbox",
            "aria-description": "Enter movie title to search",
            startAdornment: (
              <SearchIcon
                searchTerm={searchTerm}
                onClear={handleSearchCancel}
              />
            ),
          },
        }}
      />
      <AriaLive aria-live="polite">
        {searchTerm ? `Searching for: ${searchTerm}` : "Showing all movies"}
      </AriaLive>
    </>
  );
};

export default SearchBar;
