import {useParams} from "react-router-dom";
import {connect} from "react-redux";

import {setSearchedMovies} from "../../../store/action";
import useGetData from "../../../hooks";
import {generateSearchUrl} from "../utils";
import Movie from "../Movie";

const Search = ({ searched, setSearchedMovies }) => {
    const {query} = useParams();
    const url = generateSearchUrl(query)
    useGetData(url, setSearchedMovies)
    // console.log(searched)
    return (
    <section>
        <div className='container'>
            <h1>Search by: {query}</h1>
            <div className="search">
                {searched.length !== 0
                    ? searched.map(movie => (<Movie {...movie} key={movie.id}/>))
                    : 'No results'
                }
            </div>
        </div>
    </section>
)}

const mapStateToProps = state => ({
    searched: state.searched,
})

const mapDispatchToProps = {
    setSearchedMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
