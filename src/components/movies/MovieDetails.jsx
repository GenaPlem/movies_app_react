import { useLoaderData } from "react-router-dom";
import { calculateRate } from "../../helpers/utils";
import backdrop_mock_img from "../../assets/backdrop_mock_img.png";
import { useState } from "react";

const MovieDetails = () => {
  const movie = useLoaderData();
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setImgLoaded(true);
  };

  return (
    <>
      {!imgLoaded && (
        <img
          src={backdrop_mock_img}
          alt="Loading placeholder"
          className="opacity-30"
          style={{ filter: "blur(10px)", transition: "0.5s" }}
        />
      )}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        onLoad={handleImageLoad}
        style={{ display: imgLoaded ? "block" : "none" }}
      />

      <h1 className="my-10 text-2xl sm:text-3xl">{movie.title}</h1>
      <div className="flex items-start my-5">
        {movie.vote_average > 0 && (
          <p className="flex-1 mr-5 text-xs text-start sm:text-base">
            <span className="font-bold">Rate:</span>{" "}
            {calculateRate(movie.vote_average)}%
          </p>
        )}
        <div className="flex flex-wrap items-center justify-end gap-5 ml-auto">
          {movie.genres.length > 0 &&
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
