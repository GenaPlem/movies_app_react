import '../index.css';
import MovieCard from './MovieCard';
import Loader from './Loader';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/movies';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetchData = async () => {
        setLoading(true);
        setError(null);

        await fetchData('popular', setMovies);

        setLoading(false)
    }

    useEffect(() => {
        handleFetchData()
    }, [])

    if (loading) {
        return <Loader/>
    }

    return (
        <main>
            <h1 className='text-3xl font-semibold my-9 md:text-5xl'>Your Ultimate Movie Guide</h1>
            <section className='grid grid-cols-2 gap-10 my-14 md:mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {movies.length > 0 && movies.map(movie => <MovieCard {...movie} key={movie.id}/>)}
            </section>
        </main>
    )
}

export default Movies;