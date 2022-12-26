import {Link} from "react-router-dom";

import './styles.scss'

const Error = () => {
    return (
        <>
            <main className='error'>
                <h2>ERROR!!!</h2>
                <p><b>404</b></p>
                <nav>
                    <Link to="/">Back to home</Link>
                </nav>
            </main>
        </>
    )
}

export default Error;