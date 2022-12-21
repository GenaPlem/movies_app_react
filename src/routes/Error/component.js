import {Link} from "react-router-dom";

const Error = () => {
    return (
        <>
            <main>
                <h2>ERROR!!!</h2>
                <p><b>404</b></p>
            </main>
            <nav>
                <Link to="/">Back to home</Link>
            </nav>
        </>
    )
}

export default Error;