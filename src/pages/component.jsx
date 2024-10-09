import { Route, Routes } from 'react-router-dom';

import Home from '../routes/Home/component';
import Error from '../routes/Error/component';
import MovieDetails from '../components/MovieDetails';
import SearchedMovies from '../components/SearchedMovies';

const Invoices = () => (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='details/:movieId' element={<MovieDetails/>} />
        <Route path='search/:query' element={<SearchedMovies/>} />
        <Route path='*' element={<Error/>} />
    </Routes>
);

export default Invoices;