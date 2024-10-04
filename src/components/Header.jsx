import logo from '../assets/react.svg';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {

    return (
        <header className='flex justify-between mb-5 md:mb-10'>
            <Link to="/"><img src={logo} alt="logo" className='logo'/></Link>
            <ul className='flex items-center gap-10'>
                <li><a href="#" className='text-white hover:text-sky-400'>All</a></li>
                <li><a href="#" className='text-white hover:text-sky-400'>Popular</a></li>
                <li><SearchBar /></li>
            </ul>
        </header>
    );
};

export default Header;