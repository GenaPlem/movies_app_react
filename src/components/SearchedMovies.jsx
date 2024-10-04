import { useParams } from "react-router-dom";

const SearchedMovies = () => {
    const {query} = useParams();

    return (
        <main>
            {query}
        </main>
    )

}

export default SearchedMovies;