import "./App.css";
import MovieList from "./components/movies/MovieList";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <MovieList />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
