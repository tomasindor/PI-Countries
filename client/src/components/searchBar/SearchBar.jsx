import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import { useState } from "react";
import style from "./SearchBar.module.css";
const SearchBar = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    dispatch(searchCountries(inputValue));
  };

  return (
    <div className={style.wrap}>
      <div className={style.search}>
        <input
          type="text"
          className={style.searchTerm}
          placeholder="What country are you looking for?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={style.searchButton}
          onClick={handleButtonClick}
        >
          <span class="material-symbols-outlined">search</span>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
