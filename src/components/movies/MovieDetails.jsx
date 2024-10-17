import { useLoaderData } from "react-router-dom";
import { calculateRate } from "../../helpers/utils";
import backdrop_mock_img from "../../assets/backdrop_mock_img.png";

const MovieDetails = () => {
  const movie = useLoaderData();

  return (
    <>
      {movie.backdrop_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          // loading="lazy"
        />
      ) : (
        <img src={backdrop_mock_img} alt={movie.title} className="opacity-30" />
      )}
      <h1 className="my-10 text-2xl sm:text-3xl">{movie.title}</h1>
      <div className="flex items-start my-5">
        {movie.vote_average > 0 && (
          <p className="flex-1 mr-5 text-xs text-start sm:text-base">
            <span className="font-bold">Rate:</span>{" "}
            {calculateRate(movie.vote_average)}%
          </p>
        )}
        <div className="flex flex-wrap items-center justify-end gap-5 ml-auto">
          {movie.genres &&
            movie.genres.length > 0 &&
            movie.genres.map((genre) => (
              <p
                className="block p-1 text-xs text-black rounded-md sm:text-sm bg-sky-400"
                key={genre.id}
              >
                {genre.name}
              </p>
            ))}
        </div>
      </div>
      <p className="text-sm sm:text-xl text-start">{movie.overview}</p>
    </>
  );
};

export default MovieDetails;
