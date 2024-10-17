import { fetchPopularMovies } from '../api/movies';

export const homeLoader = async () => {
  const data = await fetchPopularMovies();
  return data.results;
};