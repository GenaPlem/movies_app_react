import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import MovieDetails from "../components/movies/MovieDetails";
import SearchedMovies from "../components/search/SearchedMovies";
import RootLayout from "../components/layout/RootLayout";
import { homeLoader } from "../loaders/homeLoader";
import { movieDetailsLoader } from "../loaders/movieDetailsLoader";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "details/:movieId",
          element: <MovieDetails />,
          loader: movieDetailsLoader,
        },
        { path: "search/:query", element: <SearchedMovies /> },
        { path: "*", element: <Error /> },
      ],
    },
  ],
  {
    basename: "/movies_app_react/",
  }
);

export default routes;
