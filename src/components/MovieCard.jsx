import '../index.css'
import { Link } from 'react-router-dom';
import { formateDate } from '../helpers/utils';

const MovieCard = ({id, title, poster_path, release_date}) => {
    
    return (
        <article className='relative flex flex-col justify-between overflow-hidden transition duration-300 transform shadow-neon rounded-xl hover:scale-105'>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`Poster of ${title} movie`} className='object-cover w-full h-auto'/>
                <h2 className='m-1 text-sm font-bold md:text-xl'>{title}</h2>
            </div>
            <p className='mb-2 text-xs text-slate-500'>{formateDate(release_date)}</p>
            <Link to={`/details/${id}`} className='absolute inset-0 z-10' aria-label='Read more' />
        </article>
    )
}

export default MovieCard;