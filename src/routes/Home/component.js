// import {Link} from "react-router-dom";
import Movies from "../../components/Movies";
import './styles.scss'

const Home = () => (
    <>
        <main className='main container'>
            <h1>Welcome to my MovieApp</h1>
            <p>This is a movie app built using React, Redux, ReactRouter and Formik with TheMovieDataBase API</p>
        </main>
        <Movies/>
    </>
)

export default Home;