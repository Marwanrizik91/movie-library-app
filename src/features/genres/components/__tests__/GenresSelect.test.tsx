import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GenresSelect from "../GenresSelect";
import { BrowserRouter } from "react-router-dom";
import { useGetGenresQuery } from "../../services/moviesApi";
import theme from "../../../../styles/theme";

jest.mock("../../services/moviesApi", () => ({
  useGetGenresQuery: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useMatch: jest.fn(),
}));

describe("GenresSelect Component", () => {
  const mockGenres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders error state", () => {
    (useGetGenresQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
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

  test("renders genre button and opens modal when clicked", async () => {
    (useGetGenresQuery as jest.Mock).mockReturnValue({
      data: mockGenres,
      isLoading: false,
      isError: false,
    });

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GenresSelect />
        </BrowserRouter>
      </ThemeProvider>
    );

    const genreButton = screen.getByText("Genre");
    expect(genreButton).toBeInTheDocument();

    fireEvent.click(genreButton);

    await waitFor(() => {
      expect(screen.getByText("Action")).toBeInTheDocument();
      expect(screen.getByText("Comedy")).toBeInTheDocument();
      expect(screen.getByText("Drama")).toBeInTheDocument();
    });
  });

  test("shows selected genre when a genre is selected", () => {
    require("react-router-dom").useMatch.mockReturnValue({
      params: { id: "1" },
    });

    (useGetGenresQuery as jest.Mock).mockReturnValue({
      data: mockGenres,
      isLoading: false,
      isError: false,
    });

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GenresSelect />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText("Action")).toBeInTheDocument();

    expect(screen.getByText("Clear Selection")).toBeInTheDocument();
  });
});
