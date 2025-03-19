import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../../../styles/theme";
import { GenresModal } from "../GenresModal";

describe("GenresModal", () => {
  const mockGenres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
  ];

  test("renders genres list and handles selection", () => {
    const onClose = jest.fn();
    const onSelect = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <GenresModal
          open={true}
          onClose={onClose}
          genres={mockGenres}
          onSelect={onSelect}
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Action")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Action"));
    expect(onSelect).toHaveBeenCalledWith(mockGenres[0]);
    expect(onClose).toHaveBeenCalled();
  });
});
