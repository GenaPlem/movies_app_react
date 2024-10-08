const API_KEY = import.meta.env.VITE_API_KEY

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