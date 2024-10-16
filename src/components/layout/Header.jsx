import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import SearchBar from "../search/SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between mb-5 md:mb-10">
      <Link to="/">
        <img src={logo} alt="logo" className="logo size-8 sm:size-10" />
      </Link>
      <ul className="flex items-center gap-3 text-sm sm:text-base sm:gap-10">
        <li>
          <Link to="/" className="text-white hover:text-sky-400">
            All
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </header>
  );
};

export default Header;
