import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import MovieDetails from "../components/movies/MovieDetails";
import SearchedMovies from "../components/search/SearchedMovies";
import RootLayout from "../components/layout/RootLayout";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "details/:movieId", element: <MovieDetails /> },
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
