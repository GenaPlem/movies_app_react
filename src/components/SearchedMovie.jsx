import { Link } from 'react-router-dom';
import { formateDate } from '../helpers/utils';
import movie_mock_img from '../assets/movie_mock_img.webp';

const SearchedMovie = ({id, title, poster_path, release_date, overview}) => {

    let movieImg = '';

    poster_path ? 
    movieImg = `https://image.tmdb.org/t/p/w200/${poster_path}` :
    movieImg = movie_mock_img;

    
    
    return (
        <article className='relative flex overflow-hidden shadow-neon rounded-xl'>
            <div className='max-w-48'>
                <img src={movieImg} alt={`Poster of ${title} movie`} className='object-cover h-auto w-28 md:w-full'/>
            </div>
            <div className='flex flex-col flex-1'>
                <h2 className='mt-2 font-bold text-md md:text-xl line-clamp-1'>{title}</h2>
                <p className='mb-2 text-xs text-slate-500'>{formateDate(release_date)}</p>
                <Link to={`/details/${id}`} className='absolute inset-0 z-10' aria-label='Read more' />
                <p className='mx-2 mt-5 text-sm md:text-lg text-start md:mx-3 line-clamp-3 md:line-clamp-6'>{overview}</p>
            </div>
        </article>
    )
}

export default SearchedMovie;