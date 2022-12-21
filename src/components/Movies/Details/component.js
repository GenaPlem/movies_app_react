import {useParams} from "react-router-dom";
import {formatDate, calculateRate, generateImageUrl, generateApiUrl} from "../utils";
import {connect} from "react-redux";
import useGetData from "../../../hooks";
import {setMovieDetails} from "../../../store/action";

const Details = ({details, setMovieDetails}) => {
    const {movieId} = useParams();
    const url = generateApiUrl(movieId)
    useGetData(url, setMovieDetails)

    const {original_title, backdrop_path, overview, homepage, release_date, vote_average, poster_path} = details;

    return (
        <div className='container'>
            <section className="details">
                <img className="details__img" alt={original_title} src={backdrop_path !== null ? generateImageUrl(backdrop_path, 1280) : generateImageUrl(poster_path, 500)}/>
                <h1 className="details__title">{original_title}</h1>
                <p className="details__overview">{overview}</p>
                <a className="details__website" href={homepage}>WEBSITE</a>
                <p className="details__date">Release: {formatDate(release_date)}</p>
                <span className="details__rate">{calculateRate(vote_average)}</span>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    details: state.details,
})

const mapDispatchToProps = {
    setMovieDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);