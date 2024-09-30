import { useParams } from 'react-router-dom';
import '../index.css';

const MovieDetails = () => {
    const {movieId} = useParams();

    return (
        <main>
            {movieId}
        </main>
    )
};

export default MovieDetails;