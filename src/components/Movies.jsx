import MovieCard from './MovieCard';
import Loader from './Loader';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/movies';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData('popular', '', setMovies, setError);
        setLoading(false);
    }, []);

    if (loading) return <Loader/>
    if (error) return <p>Error: {error}</p>

    return (
        <section className='grid grid-cols-2 gap-10 my-14 md:mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {movies.length > 0 && movies.map(movie => <MovieCard {...movie} key={movie.id}/>)}
        </section>
    );
};

export default Movies;