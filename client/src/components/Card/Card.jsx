import style from "./Card.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className={style.card}>
        <img src={props.flag} alt=" "></img>
        <p>Name: {props.name}</p>
        <p>Continent: {props.continent}</p>
      </div>
    </Link>
  );
};
export default Card;
