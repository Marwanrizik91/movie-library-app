import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../../../styles/theme";
import { GenresList } from "../GenresList";

describe("GenresList Component", () => {
  const mockGenres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
  ];

  test("renders all genres", () => {
    const onSelect = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <GenresList genres={mockGenres} onSelect={onSelect} />
      </ThemeProvider>
    );

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Comedy")).toBeInTheDocument();
    expect(screen.getByText("Drama")).toBeInTheDocument();
  });
});
