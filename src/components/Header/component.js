import {Link} from "react-router-dom";

import FormikForm from "../../forms/FormikForm";

import './styles.scss'

const Header = () => (
    <header className="header__wrapper">
        <div className="container">
            <div className="header">
                <Link to='/' className="header__logo">
                    Movies app
                </Link>
                <FormikForm/>
            </div>
        </div>
    </header>
)

export default Header;