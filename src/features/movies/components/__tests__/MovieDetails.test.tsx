import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../../styles/theme";
import MovieDetails from "../MovieDetails";

// Mock dependencies
jest.mock("../../utils/movieHelpers", () => ({
  getImageUrl: jest.fn((path) =>
    path ? `https://image.tmdb.org/t/p/w500${path}` : ""
  ),
}));

const mockMovie = {
  adult: false,
  backdrop_path: "",
  genre_ids: [],
  id: 1433719,
  original_language: "en",
  original_title: "test",
  overview: "test overview",
  popularity: 1,
  poster_path: "/test",
  release_date: "2025-03-19",
  title: "test",
  video: false,
  vote_average: 7.0,
  vote_count: 6,
};

describe("MovieDetails Component", () => {
  test("renders movie title", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieDetails movie={mockMovie} />
      </ThemeProvider>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("renders movie overview", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieDetails movie={mockMovie} />
      </ThemeProvider>
    );

    expect(screen.getByText("test overview")).toBeInTheDocument();
  });

  test("renders movie tags with correct information", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieDetails movie={mockMovie} />
      </ThemeProvider>
    );

    // Check for release year
    expect(screen.getByText("2025")).toBeInTheDocument();

    // Check for rating
    expect(screen.getByText("7.0/10")).toBeInTheDocument();

    // Check for age rating
    expect(screen.getByText("All Ages")).toBeInTheDocument();

    // Check for language
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  test("renders Watch Now button", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieDetails movie={mockMovie} />
      </ThemeProvider>
    );

    expect(screen.getByText("Watch Now")).toBeInTheDocument();
  });

  test("has proper accessibility attributes", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieDetails movie={mockMovie} />
      </ThemeProvider>
    );

    const article = screen.getByRole("article");
    expect(article).toHaveAttribute("aria-label", "Movie details for test");

    const tagsList = screen.getByRole("list");
    expect(tagsList).toHaveAttribute("aria-label", "Movie information tags");
  });
});
