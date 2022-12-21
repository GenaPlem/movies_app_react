import {Link} from "react-router-dom";

const Home = () => (
    <>
        <main>
            <h1>Welcome to MovieApp</h1>
            <p>This is a movie app by using React</p>
        </main>
        <nav>
            <Link to="details">CLICK here to get details for movie</Link> { '  |  ' }
            <Link to='search'>Search</Link>
        </nav>
    </>
)

export default Home;