const Footer = () => {
    return (
        <footer className='flex justify-between pt-10 pb-1 text-gray-500'>
            <p className='mx-auto'>&copy; {new Date().getFullYear()}  MovieApp. All rights reserved.</p>
        </footer>
    )
}

export default Footer;