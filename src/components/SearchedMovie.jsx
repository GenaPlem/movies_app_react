import { Link } from 'react-router-dom';
import { formateDate } from '../helpers/utils';

const SearchedMovie = ({id, title, poster_path, release_date}) => {
    
    return (
        <article className='relative flex overflow-hidden shadow-neon rounded-xl'>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`Poster of ${title} movie`} className='object-cover h-auto w-28 md:w-full'/>
            </div>
            <div className='flex-1'>
                <h2 className='m-1 text-sm font-bold md:text-xl'>{title}</h2>
                <p className='mb-2 text-xs text-slate-500'>{formateDate(release_date)}</p>
                <Link to={`/details/${id}`} className='absolute inset-0 z-10' aria-label='Read more' />
            </div>
        </article>
    )
}

export default SearchedMovie;