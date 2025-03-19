import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import MovieCard from "../MovieCard";

// Mock dependencies
jest.mock("../MovieModal", () => ({
  __esModule: true,
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? (
      <div data-testid="movie-modal">
        Modal <button onClick={onClose}>Close</button>
      </div>
    ) : null,
}));

jest.mock("../../../utils/helpers", () => ({
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
  poster_path: "/test-poster.jpg",
  release_date: "2025-03-19",
  title: "test",
  video: false,
  vote_average: 7.0,
  vote_count: 6,
};

describe("MovieCard Component", () => {
  test("renders movie card with image", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieCard movie={mockMovie} />
      </ThemeProvider>
    );

    const image = screen.getByAltText("test");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toContain("/test-poster.jpg");
  });

  test("opens modal when clicked", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieCard movie={mockMovie} />
      </ThemeProvider>
    );

    const card = screen.getByRole("article");
    fireEvent.click(card);

    expect(screen.getByTestId("movie-modal")).toBeInTheDocument();
  });

  test("supports keyboard navigation", () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieCard movie={mockMovie} />
      </ThemeProvider>
    );

    const card = screen.getByRole("article");
    fireEvent.keyDown(card, { key: "Enter" });

    expect(screen.getByTestId("movie-modal")).toBeInTheDocument();
  });
});
