import '../index.css'
import movieMockImg from '../assets/movie_mock_img.jpg'

const MovieCard = () => {
    return (
        <article className='overflow-hidden shadow-neon rounded-xl '>
            <div className=''>
                <img src={movieMockImg} alt="It Ends With Us" className='h-full'/>
            </div>
            <h2 className='my-4 md:text-xl'>It Ends With Us</h2>
            <p className='mb-5 text-slate-500'>Aug 08, 2024</p>
        </article>
    )
}

export default MovieCard;