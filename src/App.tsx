import "./App.css";
import MovieList from "./components/movies/MovieList";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </>
  );
}

export default App;
