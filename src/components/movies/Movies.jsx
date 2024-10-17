import MovieCard from "./MovieCard";
import { useState } from "react";
import { fetchPopularMovies } from "../../api/movies";
import { useLoaderData } from "react-router-dom";

const Movies = () => {
  const initialData = useLoaderData();
  const [movies, setMovies] = useState(initialData || []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleLoadMoreClick = async () => {
    setIsLoading(true);
    setPage((prevPage) => prevPage + 1);
    try {
      const data = await fetchPopularMovies(page + 1);
      const uniqueMovies = data.results.filter(
        (movie) => !movies.find((m) => m.id === movie.id)
      );
      setMovies((prevMovies) => [...prevMovies, ...uniqueMovies]);
    } catch (err) {
      setError("Failed to load more movies");
    } finally {
      setIsLoading(false);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {movies.length > 0 && (
        <section>
          <div className="grid grid-cols-2 gap-10 my-14 md:mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard {...movie} key={movie.id} />
            ))}
          </div>
          <button
            className="text-black bg-sky-400"
            onClick={handleLoadMoreClick}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        </section>
      )}
    </>
  );
};

export default Movies;
