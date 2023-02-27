import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../searchBar/SearchBar";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className={style.maincontainer}>
      <Link to="/home">HOME</Link>
      {location.pathname === "/home" && <SearchBar />}
      <Link to="/create">FORM</Link>
    </div>
  );
};

export default NavBar;
