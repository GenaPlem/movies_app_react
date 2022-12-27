import Movies from "../../components/Movies";
import './styles.scss'

const Home = () => (
    <>
        <main className='main'>
            <div className='container'>
                <h1>Welcome to my MovieApp</h1>
                <p>This is a movie app built using React, ReactRouter, Redux and Formik with TheMovieDataBase API</p>
            </div>
            <Movies/>
        </main>
    </>
)

export default Home;