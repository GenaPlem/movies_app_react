import {Link} from "react-router-dom";

import {generateImageUrl, calculateRate, formatDate} from "../utils";

import './styles.scss'

const Movie = ({ title, vote_average, release_date, poster_path, id}) => (
    <div className="movie">
        <Link to={`/details/${id}`} className='movie__link'><img className='movie__image' src={generateImageUrl(poster_path, 200)} alt={title}/>
        </Link>
        <Link to={`/details/${id}`} className="movie__title">{title}</Link>
        <div className="movie__rate">{calculateRate(vote_average)}</div>
        <div className="movie__date">{formatDate(release_date)}</div>
    </div>
)

export default Movie;
