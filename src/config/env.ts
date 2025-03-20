export const API_CONFIG = {
  baseUrl:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.MODE === "production"
      ? "https://movie-library-api-i5f2.onrender.com/api/movies"
      : "http://localhost:3000/api/movies"),
};
