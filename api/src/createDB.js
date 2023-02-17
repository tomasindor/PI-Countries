const { Country } = require("./db");
const axios = require("axios");

const cleanCountries = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.cca3,
      name: elem.name.common,
      flag: elem.flags ? elem.flags[1] : "",
      continent: elem.continents ? elem.continents[0] : "",
      capital: elem.capital ? elem.capital[0] : "",
      subregion: elem.hasOwnProperty("subregion") ? elem.subregion : "",
      area: elem.area,
      population: elem.population,
    };
  });

const createCountries = async () => {
  const data = (await axios.get("https://restcountries.com/v3/all")).data;

  const CountriesApi = cleanCountries(data);
  await Country.bulkCreate(CountriesApi);
};

module.exports = { createCountries };
