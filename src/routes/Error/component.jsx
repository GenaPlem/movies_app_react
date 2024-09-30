import {Link} from "react-router-dom";

const Error = () => (
    <main>
        <h2>Ooops, it's error innit?</h2>
        <p><b>404</b></p>
        <nav>
            <Link to="/">Back to home</Link>
        </nav>
    </main>
);

export default Error;