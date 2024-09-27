import '../index.css'
// import movieMockImg from '../assets/movie_mock_img.jpg'

const MovieCard = ({title, poster_path, release_date}) => {
    
    return (
        <article className='relative flex flex-col justify-between overflow-hidden transition duration-300 transform shadow-neon rounded-xl hover:scale-105'>
            <div className=''>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`Poster of ${title} movie`} className='object-cover w-full h-auto'/>
            </div>
            <h2 className='my-2 text-sm font-bold md:text-xl'>{title}</h2>
            <p className='mb-2 text-xs text-slate-500'>{release_date}</p>
            <a href="#" className='absolute inset-0 z-10' aria-label='Read more'></a>
        </article>
    )
}

export default MovieCard;