import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountry(id)); // <-- se pasa el id al action
  }, [id]);

  return (
    <>
      <div>
        {country && (
          <>
            <img src={country.flag} alt=" "></img>
            <p>{country.id ? country.id : ""}</p>
            <p>Name: {country.name}</p>
            <p>Continent: {country.continent}</p>
            <p>Capital: {country.capital}</p>
            {country.subregion ? <p>Subregion: {country.subregion}</p> : ""}
            {country.area ? <p>Area: {country.area}</p> : ""}
            <p>Population: {country.population}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Detail;
