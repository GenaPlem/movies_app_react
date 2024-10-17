import { fetchMovieDetails } from "../api/movies";

export const movieDetailsLoader = async ({params}) => {
  const data = await fetchMovieDetails(params.movieId);
  return data;
}