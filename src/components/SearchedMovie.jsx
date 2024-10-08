import { Link } from 'react-router-dom';
import { formateDate } from '../helpers/utils';

const SearchedMovie = ({id, title, poster_path, release_date, overview}) => {
    
    return (
        <article className='relative flex overflow-hidden shadow-neon rounded-xl'>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`Poster of ${title} movie`} className='object-cover h-auto w-28 md:w-full'/>
            </div>
            <div className='flex flex-col flex-1'>
                <h2 className='mt-2 text-sm font-bold md:text-xl line-clamp-1'>{title}</h2>
                <p className='mb-2 text-xs text-slate-500'>{formateDate(release_date)}</p>
                <Link to={`/details/${id}`} className='absolute inset-0 z-10' aria-label='Read more' />
                <p className='mx-2 mt-5 text-sm text-start md:mx-3 line-clamp-3 md:line-clamp-6'>{overview}</p>
            </div>
        </article>
    )
}

export default SearchedMovie;