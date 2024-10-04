import searchIcon from '../assets/search_icon.svg';
import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    return (
        <div className='flex justify-center'>
            <input 
                type="text"
                value={query}
                placeholder="Search for a movie..."
                className="p-1.5 border-sky-400 border bg-inherit rounded-l"
            />
            <button className='p-1.5 rounded-l-none rounded-r bg-sky-400'>
                <img src={searchIcon} alt="Search Icon" className='size-5' />
            </button>
        </div>
    )
}

export default SearchBar;