import './index.css'

const Footer = () => {
    return (
        <footer className='flex justify-between py-10 text-gray-500'>
            <p>&copy; {new Date().getFullYear()}  MovieApp. All rights reserved.</p>
        </footer>
    )
}

export default Footer;