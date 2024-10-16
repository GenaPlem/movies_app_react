import MovieCard from "./MovieCard";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { fetchData } from "../api/movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchData("popular", "", setMovies, setError);
    setIsLoading(false);
  }, []);

  const handleLoadMoreClick = () => {
    setIsLoadMore(true);
    setPage((prevPage) => prevPage + 1);
    fetchData("popular", "", setMovies, setError, page + 1, true);
    setIsLoadMore(false);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {!isLoading && movies.length > 0 && (
        <section>
          <div className="grid grid-cols-2 gap-10 my-14 md:mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard {...movie} key={movie.id} />
            ))}
          </div>
          <button
            className="text-black bg-sky-400"
            onClick={handleLoadMoreClick}
            disabled={isLoadMore}
          >
            Load more
          </button>
        </section>
      )}
      {isLoading && (
        <div className="flex items-center justify-center flex-1">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Movies;
