import {useParams} from "react-router-dom";
import {connect} from "react-redux";

import {setSearchedMovies} from "../../../store/action";
import useGetData from "../../../hooks";
import {generateSearchUrl} from "../utils";
import SearchedMovie from "./SearchedMovie";

import './styles.scss'

const SearchedMovies = ({ searched, setSearchedMovies }) => {
    const {query} = useParams();
    const url = generateSearchUrl(query)
    useGetData(url, setSearchedMovies)

    return (
    <main>
        <div className='container'>
            <h1 className='searched__title'>Search by: {query}</h1>
            <div className="searched">
                {searched.length !== 0
                    ? searched.map(movie => (<SearchedMovie {...movie} key={movie.id}/>))
                    : <p className='searched__blank'>There are no results for this search</p>
                }
            </div>
        </div>
    </main>
)}

const mapStateToProps = state => ({
    searched: state.searched,
})

const mapDispatchToProps = {
    setSearchedMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedMovies);
