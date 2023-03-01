import style from "./Card.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link className={style.attributes} to={`/detail/${props.id}`}>
      <div className={style.card}>
        <img src={props.flag} alt=" " className={style.img}></img>
        <p className={style.attributes}>Name: {props.name}</p>
        <p className={style.attributes}>Continent: {props.continent}</p>
      </div>
    </Link>
  );
};
export default Card;
