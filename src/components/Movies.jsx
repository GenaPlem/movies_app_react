import '../index.css'
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { useGetData } from '../api/movies';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const useGetMovies = () => {
            useGetData('popular', setMovies)
        }

        useGetMovies()
    }, [])

    return (
        
        <main>
            <h1 className='text-3xl font-semibold my-9 md:text-5xl'>Your Ultimate Movie Guide</h1>
            <section className='grid grid-cols-2 gap-10 mt-14 md:mt-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {movies.length > 0 && movies.map(movie => <MovieCard {...movie} key={movie.id}/>)}
            </section>
        </main>
    )
}

export default Movies;