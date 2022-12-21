import {Route, Routes} from "react-router-dom";

import Home from "../routes/Home/component";
import Error from "../routes/Error/component";
import Details from "../components/Movies/Details";
import Search from "../components/Movies/Search";

const Invoices = () => (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='details/:movieId' element={<Details/>} />
        <Route path='search/:query' element={<Search/>} />
        <Route path='*' element={<Error/>} />
    </Routes>
)

export default Invoices