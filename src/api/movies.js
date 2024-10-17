const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export const fetchData = async (type, queryOrId = '', setData, setError, page = 1, loadMore = false) => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };

    let url = '';

    if (type === 'search') {
      url = `https://api.themoviedb.org/3/search/movie?query=${queryOrId}&language=en-US&page=${page}`;;
    } else if (type === 'movie') {
      url = `https://api.themoviedb.org/3/movie/${queryOrId}?language=en-US`;
    } else if (type === 'popular') {
      url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    }

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (loadMore) {
        setData((prevData) => {
          // Set with unique movies id
          const existingIds = new Set(prevData.map(movie => movie.id));
          
          // Filter for unique movies data
          const newMovies = data.results
            ? data.results.filter(movie => !existingIds.has(movie.id))
            : []
          
          return [...prevData, ...newMovies]
        })
      } else {
        data.results ? setData(data.results) : setData(data);
      }
    } catch (err) {
      setError(err.message)
    }
}

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