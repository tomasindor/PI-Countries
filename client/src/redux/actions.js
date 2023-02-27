import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const POST_COUNTRY = "POST_COUNTRY";

export const getCountries = () => {
  return async function (dispatch) {
    const countries = (await axios.get("http://localhost:3001/countries")).data;

    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountry = (id) => {
  return async function (dispatch) {
    const country = (await axios.get(`http://localhost:3001/countries/${id}`))
      .data;

    dispatch({ type: GET_COUNTRY, payload: country });
  };
};

export const searchCountries = (name) => {
  console.log(name);
  return async function (dispatch) {
    const countries = (
      await axios.get(`http://localhost:3001/countries?name=${name}`)
    ).data;

    dispatch({ type: SEARCH_COUNTRIES, payload: countries });
  };
};

export const postActivity = (activity) => {
  return async function (dispatch) {
    const activity = (await axios.post("http://localhost:3001/activities"))
      .data;

    dispatch({ type: POST_COUNTRY, payload: activity });
  };
};
