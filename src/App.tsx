import "./App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { lazy } from "react";
import AppToolbar from "./components/common/AppToolbar";

const MovieHome = lazy(() => import("./components/movies/MovieHome"));
const FilteredMovieList = lazy(
  () => import("./components/movies/FilteredMovieList")
);

const AppContent = () => {
  return (
    <>
      <ErrorBoundary>
        <AppToolbar />
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
