import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/movies";
import Loader from "./Loader";
import SearchedMovie from "./SearchedMovie";

const SearchedMovies = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        await fetchData("search", query, setSearchResults, setError);
      } catch (err) {
        setError("Failed to fetch data");
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [query]);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center flex-1">
          <Loader />
        </div>
      ) : (
        <section className="flex flex-col gap-10">
          <h1 className="mt-3 text-2xl">Movies searched by: {query}</h1>
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((movie) => (
              <SearchedMovie {...movie} key={movie.id} />
            ))
          ) : (
            <p>No results found</p>
          )}
        </section>
      )}
    </>
  );
};

export default SearchedMovies;
