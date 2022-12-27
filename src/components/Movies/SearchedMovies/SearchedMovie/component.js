import {Link} from "react-router-dom";

import {formatDate, generateImageUrl} from "../../utils";

import './styles.scss'

const SearchedMovie = ({ title, release_date, poster_path, overview, id}) => (
    <div className="searched__movie">
        <Link to={`/details/${id}`} className='searched__movie__link'>
            <img className='searched__movie__image' src={generateImageUrl(poster_path, 200)} alt={title}/>
        </Link>
        <div className='searched__movie__description'>
            <Link to={`/details/${id}`} className="searched__movie__title">{title}</Link>
            <p className="searched__movie__overview">{overview}</p>
            <div className="searched__movie__date">{formatDate(release_date)}</div>
        </div>
    </div>
)

export default SearchedMovie;
