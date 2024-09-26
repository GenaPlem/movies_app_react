const API_KEY = import.meta.env.VITE_API_KEY

export const useGetData = (category, setData) => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
}