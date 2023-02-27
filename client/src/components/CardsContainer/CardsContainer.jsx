import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ countries }) => {
  return (
    <div className={style.container}>
      {countries.map((country) => {
        return (
          <Card
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
