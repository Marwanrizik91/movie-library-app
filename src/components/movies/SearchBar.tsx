import { InputAdornment, styled, TextField, useTheme } from "@mui/material";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "lodash";
import { useUrlParams } from "../../hooks/useUrlParams";

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

interface SearchFormInputs {
  searchTerm: string;
}

const SearchBar = () => {
  const theme = useTheme();
  const { getParam, setParam, deleteParam } = useUrlParams();

  const { register, watch } = useForm<SearchFormInputs>({
    defaultValues: {
      searchTerm: getParam("query", ""),
    },
  });

  const searchTerm = watch("searchTerm");

  const updateSearchParams = debounce((query: string) => {
    if (query) {
      setParam("query", query);
      setParam("page", "1");
    } else {
      // Remove query parameter if empty
      deleteParam("query");
    }
  }, 500);

  useEffect(() => {
    const subscription = watch((value) => {
      updateSearchParams(value.searchTerm || "");
    });
    return () => {
      subscription.unsubscribe();
      updateSearchParams.cancel();
    };
  }, [watch]);

  return (
    <>
      <TextField
        fullWidth
        placeholder="Search movies..."
        color="secondary"
        sx={{
          marginBottom: 3,
          backgroundColor: theme.palette.grey[900],
        }}
        variant="filled"
        {...register("searchTerm")}
        aria-label="Search for movies"
        slotProps={{
          input: {
            role: "searchbox",
            "aria-description": "Enter movie title to search",
            startAdornment: (
              <InputAdornment position="start">
                <Search
                  color={theme.palette.text.primary}
                  size={20}
                  aria-hidden="true"
                />
              </InputAdornment>
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
