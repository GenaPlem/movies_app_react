import './index.scss'

const Header = () => {
    
    return (
        <header className='flex justify-between'>
            <img src="src/assets/react.svg" alt="logo"/>
            <ul className='flex '>
                <li className='mx-2'>All</li>
                <li className='mx-2'>Popular</li>
                <li className='mx-2'>New</li>
            </ul>
        </header>
    );
};

export default Header;