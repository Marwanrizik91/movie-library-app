import { createTheme } from "@mui/material/styles";

// Define your color palette
const colors = {
  primary: {
    main: "#3B0086",
    light: "#6200B3",
    contrastText: "#fff",
  },
  secondary: {
    main: "#B43E8F",
    light: "#EA7AF4",
    contrastText: "#fff",
  },
  background: {
    default: "#290628",
    paper: "#fff",
  },
  text: {
    primary: "#fff",
    secondary: "#495057",
    disabled: "#6c757d",
  },
  error: {
    main: "#b12a37",
    light: "#e86b78",
    contrastText: "#fff",
  },
  warning: {
    main: "#c99800",
    light: "#ffd963",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  info: {
    main: "#0e788a",
    light: "#5ac3d3",
    contrastText: "#fff",
  },
  success: {
    main: "#1e8137",
    light: "#57bb71",
    contrastText: "#fff",
  },
};

const typography = {
  fontFamily: ["Roboto", "sans-serif"].join(","),
  h4: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  h5: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  body1: {
    fontSize: "1rem",
  },
};

const spacing = 8;

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
  },
  typography: typography,
  spacing: spacing,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary.main,
          color: colors.primary.contrastText,
          padding: "8px 16px",
          borderRadius: "4px",
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: colors.primary.light,
          },
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
