const API_KEY = import.meta.env.VITE_API_KEY

export const fetchData = async (request, setData, setError, page = 0) => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${request}?language=en-US${page?`&page=${page}`:''}`, options)
        .then(response => response.json())
        .then(data => {
          data.results ? setData(data.results) : setData(data)
        })
        .catch(err => setError(err));
}