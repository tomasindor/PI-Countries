import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import style from "./Form.module.css";

import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countriesId: [],
  });
  const [errors, setErrors] = useState({
    name: "*",
    difficulty: "Difficulty required",
    duration: "",
    season: "Season required",
    countriesId: "Choose minimum one country",
  });

  const changeHandler = (e) => {
    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);
  const changeHandlerArray = (e) => {
    setErrors(
      validate({
        ...form,
        [e.target.name]: [...form[e.target.name], e.target.value],
      })
    );
    setForm({
      ...form,
      [e.target.name]: [...form[e.target.name], e.target.value],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/activities", form)
      .then((res) => alert("Activity created"))
      .catch((err) => alert(err));
  };

  function validate(form) {
    let errors = {};
    if (/^[A-Za-z]+$/.test(form.name)) errors.name = "";
    else {
      errors.name = "Only letters allowed";
    }
    if (!form.name) errors.name = "*";
    if (form.difficulty) errors.difficulty = "";
    else errors.difficulty = "Difficulty required";

    if (form.season) errors.season = "";
    else errors.season = "Season required";

    if (form.countriesId.length) errors.countriesId = "";
    else errors.countriesId = "Choose minimum one country";

    return errors;
  }

  return (
    <>
      <form className={style.form} onSubmit={submitHandler}>
        <div>
          <label className={style.label} htmlFor="name">
            Choose a name:{" "}
          </label>
          <input
            className={style.inputText}
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={changeHandler}
          ></input>
          {errors.name && <span className={style.error}> {errors.name}</span>}
        </div>
        <div>
          <p className={style.label}>Choose a difficulty</p>
          <input
            className={style.inputRadio}
            type="radio"
            id="1"
            name="difficulty"
            value="1"
            onChange={changeHandler}
          ></input>
          <label htmlFor="1">1</label>

          <input
            className={style.inputRadio}
            type="radio"
            id="2"
            name="difficulty"
            value="2"
            onChange={changeHandler}
          ></input>
          <label htmlFor="2">2</label>

          <input
            className={style.inputRadio}
            type="radio"
            id="3"
            name="difficulty"
            value="3"
            onChange={changeHandler}
          ></input>
          <label htmlFor="3">3</label>

          <input
            className={style.inputRadio}
            type="radio"
            id="4"
            name="difficulty"
            value="4"
            onChange={changeHandler}
          ></input>
          <label htmlFor="4">4</label>

          <input
            className={style.inputRadio}
            type="radio"
            id="5"
            name="difficulty"
            value="5"
            onChange={changeHandler}
          ></input>
          <label htmlFor="5">5</label>
        </div>
        {errors.difficulty && (
          <span className={style.error}>{errors.difficulty}</span>
        )}
        <div>
          <br></br>
          <p className={style.label}>Choose the activity duration</p>
          <select
            className={style.select}
            name="duration"
            onChange={changeHandler}
          >
            <option value="">--⌚-</option>
            <option value="01:00">01:00hs</option>
            <option value="02:00">02:00hs</option>
            <option value="03:00">03:00hs</option>
            <option value="04:00">04:00hs</option>
            <option value="05:00">05:00hs</option>
            <option value="06:00">06:00hs</option>
            <option value="07:00">07:00hs</option>
            <option value="08:00">08:00hs</option>
            <option value="09:00">09:00hs</option>
            <option value="10:00">10:00hs</option>
            <option value="11:00">11:00hs</option>
            <option value="12:00">12:00hs</option>
            <option value="13:00">13:00hs</option>
            <option value="14:00">14:00hs</option>
            <option value="15:00">15:00hs</option>
            <option value="16:00">16:00hs</option>
            <option value="17:00">17:00hs</option>
            <option value="18:00">18:00hs</option>
            <option value="19:00">19:00hs</option>
            <option value="20:00">20:00hs</option>
            <option value="21:00">21:00hs</option>
            <option value="22:00">22:00hs</option>
            <option value="23:00">23:00hs</option>
            <option value="24:00">24:00hs</option>
          </select>
        </div>
        <br></br>
        <div>
          <p className={style.label}>Choose a season of the year</p>
          <input
            className={style.inputRadio}
            type="radio"
            id="summer"
            name="season"
            value="Summer"
            onChange={changeHandler}
          ></input>
          <label htmlFor="summer">Summer</label>

          <input
            className={style.inputRadio}
            type="radio"
            id="autumn"
            name="season"
            value="Autumn"
            onChange={changeHandler}
          ></input>
          <label htmlFor="autumn">Autumn</label>

          <input
            className={style.inputRadio}
            type="radio"
            id="winter"
            name="season"
            value="Winter"
            onChange={changeHandler}
          ></input>
          <label htmlFor="winter">Winter</label>

          <input
            className={style.inputRadio}
            type="radio"
            id="spring"
            name="season"
            value="Spring"
            onChange={changeHandler}
          ></input>
          <label htmlFor="spring">Spring</label>
        </div>
        {errors.season && <span className={style.error}>{errors.season}</span>}
        <br></br>
        <div>
          <p className={style.label}>Choose a country/es</p>
          <select
            className={style.select}
            name="countriesId"
            onChange={changeHandlerArray}
          >
            <option value="">---</option>
            {countries.map((c) => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        {errors.countriesId && (
          <span className={style.error}>{errors.countriesId}</span>
        )}
        <br></br>
        <br></br>
        <button
          className={style.buttonSubmit}
          type="submit"
          disabled={
            errors.name ||
            errors.difficulty ||
            errors.season ||
            errors.countriesId
              ? true
              : false
          }
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};
export default Form;
