import "./App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { GenresSelect, SearchBar } from "./components/movies";
import { lazy } from "react";

const MovieHome = lazy(() => import("./components/movies/MovieHome"));
const FilteredMovieList = lazy(
  () => import("./components/movies/FilteredMovieList")
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Or specify a color */
`;

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <ErrorBoundary>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <StyledLink to="/">Movie Library</StyledLink>
            </Typography>
            <GenresSelect />
            {!location.pathname.startsWith("/genre") && <SearchBar />}
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<MovieHome />} />
          <Route path="/genre/:id" element={<FilteredMovieList />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

// Main App component with Router
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
}

export default App;
