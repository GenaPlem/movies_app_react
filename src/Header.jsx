import './index.css'

const Header = () => {

    return (
        <header className='flex justify-between'>
            <a href="#"><img src="src/assets/react.svg" alt="logo" className='logo'/></a>
            <ul className='flex gap-10'>
                <li><a href="#" className='text-white hover:text-sky-400'>All</a></li>
                <li><a href="#" className='text-white hover:text-sky-400'>Popular</a></li>
                <li><a href="#" className='text-white hover:text-sky-400'>New</a></li>
            </ul>
        </header>
    );
};

export default Header;