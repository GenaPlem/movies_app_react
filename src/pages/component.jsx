import { Route, Routes } from 'react-router-dom';

import Home from '../routes/Home/component';
import Error from '../routes/Error/component';

const Invoices = () => (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error/>} />
    </Routes>
);

export default Invoices;