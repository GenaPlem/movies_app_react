import searchIcon from '../assets/search_icon.svg';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    return (
        <>
            <input 
                type="text"
                value={query}
                placeholder="Search for a movie..."
                className="p-2 border rounded"
            />
            <button className='p-2 ml-2 rounded bg-sky-400'>
                {searchIcon}
            </button>
        </>
    )
}

export default SearchBar;