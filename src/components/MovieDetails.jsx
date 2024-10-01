import { useParams } from 'react-router-dom';
import '../index.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../api/movies';
import Loader from './Loader';

const MovieDetails = () => {
    const {movieId} = useParams();

    const [movie, setMovie] = useState([]);
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
            <h1 className='my-10'>{movie.title}</h1>
            <p className='text-xl text-start'>{movie.overview}</p>
        </main>
    )
};

export default MovieDetails;