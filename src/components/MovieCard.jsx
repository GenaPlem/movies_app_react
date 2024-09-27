import '../index.css'
// import movieMockImg from '../assets/movie_mock_img.jpg'

const MovieCard = ({title, poster_path, release_date}) => {
    
    return (
        <article className='flex flex-col justify-between overflow-hidden shadow-neon rounded-xl'>
            <div className=''>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} className='object-cover w-full h-auto'/>
            </div>
            <h2 className='my-2 text-sm font-bold md:text-xl'>{title}</h2>
            <p className='mb-2 text-xs text-slate-500'>{release_date}</p>
        </article>
    )
}

export default MovieCard;