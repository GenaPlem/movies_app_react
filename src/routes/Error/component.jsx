import '../../index.css'
import {Link} from "react-router-dom";

const Error = () => (
    <main className='flex flex-col justify-center'>
        <h1 className='text-3xl md:text-5xl'>Oops, something went wrong</h1>
        <p className='my-10 text-2xl font-bold'>404</p>
        <nav>
            <Link to="/" className='text-xl'>Back to home</Link>
        </nav>
    </main>
);

export default Error;