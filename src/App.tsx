import "./App.css";
import MovieList from "./components/movies/MovieList";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
