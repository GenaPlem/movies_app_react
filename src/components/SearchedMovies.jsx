import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/movies";
import Loader from "./Loader";
import SearchedMovie from "./SearchedMovie";

const SearchedMovies = () => {
    const {query} = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData('search', query, setSearchResults, setError);
        setLoading(false);
    }, [query]);

    if (loading) return <Loader/>
    if (error) return <p>Error: {error}</p>

    return (
        <main>
            <section className='flex flex-col gap-10'>
                <h1 className="mt-3 text-2xl">Movies searched by: {query}</h1>
                { searchResults.length > 0 ?
                searchResults.map(movie => <SearchedMovie {...movie} key={movie.id}/>) :
                <p>No results found</p>
                }
            </section>
        </main>
    )

}

export default SearchedMovies;