const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export const fetchPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=${page}`, options)
  if (!response.ok) {
    throw new Error('Failed to fetch popular movies.');
  }
  return response.json();
}

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};

export const fetchSearchMovies = async (query, page = 1) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${query}&language=en-US&page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }
  return response.json();
};