import "./styles/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppToolbar from "./shared/components/AppToolbar";
import { FilteredMovieList } from "./features/genres/components";
import { MovieHome } from "./features/movies/components";

const AppContent = () => {
  return (
    <>
      <AppToolbar />
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/genre/:id" element={<FilteredMovieList />} />
      </Routes>
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
