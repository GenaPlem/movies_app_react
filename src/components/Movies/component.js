import {connect} from "react-redux";

import {setPopularMovies} from "../../store/action";
import Movie from "./Movie";
import {generateApiUrl} from "./utils";
import Error from "../../routes/Error/component";
import useGetData from "../../hooks";

import './styles.scss'

const Movies = ({ popular, setPopularMovies }) => {
    const url = generateApiUrl('popular')
    useGetData(url, setPopularMovies);

    return (
    <section>
        <div className='container'>
            <h2 className='movies__title'>Popular movies:</h2>
            <div className='movies'>
                {(popular.length !== 0) ? popular.map(movie => (<Movie {...movie} key={movie.id}/>
                )) : <Error/>}
            </div>
        </div>
    </section>
)}

const mapStateToProps = state => ({
    popular: state.popular,
})

const mapDispatchToProps = {
    setPopularMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
