import { fetchPopularMovies } from "../../api/movies";
import { useLoaderData } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import Loader from "../Loader";

const Movies = () => {
  const initialLoaderData = useLoaderData();

  const {
    data, // Data from pages
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["popularMovies"], // Unique key
    queryFn: ({ pageParam = 1 }) => fetchPopularMovies(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    initialData: {
      pages: [{ results: initialLoaderData }],
      pageParams: [1],
    },
  });

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="grid grid-cols-2 gap-10 my-14 md:mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data.pages.map((page) =>
              page.results.map((movie) => (
                <MovieCard {...movie} key={movie.id} />
              ))
            )}
          </div>
          <button
            className="text-black bg-sky-400"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading..."
              : hasNextPage
              ? "Load more"
              : "No more movies"}
          </button>
        </section>
      )}
    </>
  );
};

export default Movies;
