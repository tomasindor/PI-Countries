import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.blur}>
        <h1 className={style.title}>Henry Countries</h1>
        <h1 className={style.subtitle}>
          Found the information you need about the globe with Henry Countries
        </h1>
        <Link to="/home" className={style.button}>
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default Landing;
