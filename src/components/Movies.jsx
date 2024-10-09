import MovieCard from './MovieCard';
import Loader from './Loader';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/movies';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData('popular', '', setMovies, setError);
        setLoading(false);
    }, []);

    const handleLoadMoreClick = () => {
        setPage(prevPage => prevPage + 1);
        fetchData('popular', '', setMovies, setError, page + 1, true);
    }

    if (loading) return <Loader/>
    if (error) return <p>Error: {error}</p>

    return (
        <section>
            <div className='grid grid-cols-2 gap-10 my-14 md:mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {movies.length > 0 && movies.map(movie => <MovieCard {...movie} key={movie.id}/>)}
            </div>
            <button className='text-black bg-sky-400' onClick={handleLoadMoreClick}>Load more</button>
        </section>
    );
};

export default Movies;