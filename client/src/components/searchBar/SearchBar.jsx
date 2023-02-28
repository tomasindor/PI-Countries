import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import { useState } from "react";
import style from "./SearchBar.module.css";
const SearchBar = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const handleinputChange = (event) => {
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
          onChange={handleinputChange}
        />
        <button
          type="submit"
          className={style.searchButton}
          onClick={handleButtonClick}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
