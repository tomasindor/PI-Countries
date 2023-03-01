import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountry(id));
  }, [id]);

  const arrayToString = (arr) => {
    console.log(arr);
    let temp = [];
    arr.map((elem) => {
      temp.push(elem.name);
    });
    return temp.join(", ");
  };
  console.log(country);
  return (
    <>
      <div className={style.container}>
        <div className={style.countryInfo}>
          {country && (
            <>
              <img src={country.flag} alt=" " className={style.flag}></img>
              <p>{country.id ? country.id : ""}</p>
              <p>Name: {country.name}</p>
              <p>Continent: {country.continent}</p>
              <p>Capital: {country.capital}</p>
              {country.subregion ? <p>Subregion: {country.subregion}</p> : ""}
              {country.area ? <p>Area: {country.area}</p> : ""}
              <p>Population: {country.population}</p>
              {country.activities === undefined ||
              country.activities.length === 0 ? (
                ""
              ) : (
                <p>Activities: {arrayToString(country.activities)}</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Detail;
