import { createBrowserRouter } from "react-router-dom";

import Home from "../routes/Home/component";
import Error from "../routes/Error/component";
import MovieDetails from "../components/MovieDetails";
import SearchedMovies from "../components/SearchedMovies";
import RootLayout from "../routes/RootLayout";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
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
