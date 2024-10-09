import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/search_icon.svg';
import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChangeSearch = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        query && navigate(`/search/${query}`);
        setQuery('');
    }

    return (
        <form onSubmit={handleSearch} className='flex justify-center'>
            <input 
                type="text"
                value={query}
                onChange={handleChangeSearch}
                placeholder="Search a movie..."
                className="p-1.5 w-32 sm:w-full border-sky-400 border bg-inherit rounded-l"
            />
            <button type='submit' className='p-1.5 rounded-l-none rounded-r bg-sky-400'>
                <img src={searchIcon} alt="Search Icon" className='size-4 sm:size-5' />
            </button>
        </form>
    )
}

export default SearchBar;