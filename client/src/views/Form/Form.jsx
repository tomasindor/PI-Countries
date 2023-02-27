import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { postActivity } from "../../redux/actions";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validateDuration(form);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    validateDuration(document.lol.duration.value);
    axios
      .post("http://localhost:3001/activities", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateDuration = (duration) => {
    if (/^[0-8]*$/.test(duration)) {
      setErrors({ ...errors, duration: "" });
    } else {
      setErrors({
        ...errors,
        duration: "The duration of the activity can not exceed 8 hours",
      });
    }
  };
  const handleChange = (event) => {
    setForm(event.target.value);
  };
  return (
    <form onSubmit={submitHandler} name="lol">
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <div>
        <label>Difficulty: </label>
        <select name="difficulty" onChange={changeHandler}>
          <option value="1" selected>
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Duration: </label>
        <input
          type="text"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
        {errors.duration && <span>{errors.duration}</span>}
      </div>
      <div>
        <label>Season: </label>
        <select name="season" onChange={changeHandler}>
          <option value="Winter">Winter</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Spring">Spring</option>
        </select>
      </div>
      <div>
        <label>Country: </label>
        <input
          type="text"
          value={form.country}
          onChange={changeHandler}
          name="country"
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
