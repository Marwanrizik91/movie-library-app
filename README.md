# Movie Library App - Getting Started

This document outlines the steps to run the Movie Library App, a React application built with NestJS backend and RTK Query for data fetching.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (or yarn)
- Git

## Setup

1.  **Clone the repository:**

    **Frontend (React):**

    ```bash
    git clone git@github.com:Marwanrizik91/movie-library-app.git
    cd movie-library-app
    ```

    **Backend (NestJS):**

    ```bash
    git clone git@github.com:Marwanrizik91/movie-library-api.git
    cd movie-library-app
    ```

    - Then follow the instructions on how to setup the backend app here: https://github.com/Marwanrizik91/movie-library-api

2.  **Install dependencies:**

    Navigate to both the frontend and backend directories and install their respective dependencies:

    **A ssuming you have both apps under the same directory:**

    **E.g.:**

    ```
    ─ Movie Library App
      ── movie-library-app
      ── movie-library-api
    ```

    **Frontend (React):**

    ```bash
    cd movie-library-app
    npm install  # or any other package manager you prefer
    ```

    **(Optional) Enviroment variables:**

    Create a .env file and add the following:

    ```
    VITE_API_BASE_URL = http://localhost:<backend-app-port>/api/movies
    ```

    **Backend (NestJS):**

    ```bash
    cd ../movie-library-api
    npm install  # or any other package manager you prefer
    ```

3.  **Start the backend:**

    Start the NestJS server:

    ```bash
    npm run start:dev  # or any other package manager you prefer
    ```

    This will start the development server on a specified port (usually 3000). Ensure this port is available.

4.  **Start the frontend:**

    Navigate to the frontend directory and start the React development server:

    ```bash
    cd ../movie-library-app
    npm start  # or any other package manager you prefer
    ```

    This will start the React development server on a specified port. Ensure this port is available. The application should now be accessible in your browser at `http://localhost:5173`.

    Or you can change the port under vite.config.ts

    ```
    export default defineConfig({
        plugins: [react()],
        port: <your-port>
    });
    ```

## Running the Application

The application should now be running. You can interact with it by:

- Browsing the movie list.
- Searching for movies using the search bar.
- Filtering movies by genre using the genre filter.

## Development

- Any changes made to the backend will require a restart of the NestJS server.
- Changes made to the frontend will be automatically reflected in the browser thanks to hot reloading.

## API Configuration

The application communicates with a NestJS backend. Ensure the backend is running before starting the frontend. The API endpoints are defined within the `frontend/src/services/moviesApi.ts` file. You may need to adjust these endpoints if your backend server is running on a different port or URL.

## Troubleshooting

- If you encounter issues, double-check that both the frontend and backend servers are running correctly.
- Enure the ports configurations are matching between the two apps.
