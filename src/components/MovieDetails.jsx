import { useParams } from 'react-router-dom';
import '../index.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../api/movies';
import Loader from './Loader';
import { calculateRate } from '../helpers/utils';

const MovieDetails = () => {
    const {movieId} = useParams();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetchData = async () => {
        setLoading(true);
        setError(null);

        await fetchData(movieId, setMovie, setError);

        setLoading(false);
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    if (loading) return <Loader/>
    if (error) return <p>Error: {error}</p>

    return (
        <main>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            <h1 className='my-10 text-2xl sm:text-3xl'>{movie.title}</h1>
            <div className='flex items-start my-5'>
                <p className={`mr-5 flex-1 text-start text-xs sm:text-base text-${calculateRate(movie.vote_average) > 70 ? 'green-400' : 'yellow-400'}`}><span className='font-bold'>Rate:</span> {calculateRate(movie.vote_average)}%</p>
                <div className='flex flex-wrap items-center justify-end gap-5 ml-auto'>
                    {movie.genres && movie.genres.length > 0 ? (
                        movie.genres.map((genre) => <p className='block p-1 text-xs text-black rounded-md sm:text-sm bg-sky-400' key={genre.id}>{genre.name}</p>)
                    ) : (
                        <p>No genres available</p>
                    )}
                </div>
            </div>
            <p className='text-sm sm:text-xl text-start'>{movie.overview}</p>
        </main>
    )
};

export default MovieDetails;