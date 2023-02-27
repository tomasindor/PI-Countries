import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
  return (
    <>
      <p className={style.container}>
        <h1>Found the information you about the globe with Henry Countries</h1>
        <Link to="/home">Start Now</Link>
      </p>
    </>
  );
};

export default Landing;
