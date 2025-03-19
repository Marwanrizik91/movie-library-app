import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { useGetGenresQuery } from "../../../services/moviesApi";
import theme from "../../../../../styles/theme";
import { GenresSelect } from "../..";

// Update mock path to match import
jest.mock("../../../services/moviesApi", () => ({
  useGetGenresQuery: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useMatch: () => null,
}));

describe("GenresSelect Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    (useGetGenresQuery as jest.Mock).mockReturnValue({
      isFetching: true,
    });

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GenresSelect />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("renders error state", () => {
    (useGetGenresQuery as jest.Mock).mockReturnValue({
      isError: true,
      refetch: jest.fn(),
    });

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GenresSelect />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText("Error Loading Genres")).toBeInTheDocument();
  });
});
