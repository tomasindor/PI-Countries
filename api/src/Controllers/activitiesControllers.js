const { Activity, Country } = require("../db");
const { searchName } = require("./countriesController");

const getActivities = async () => {
  const db = await Activity.findAll({
    include: {
      model: Country,
      through: {
        attributes: [],
      },
    },
  });
  return db;
};

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  newActivity.addCountries(countries);
  return newActivity;
};

/*/const findCountries = async (arr) => {
  console.log(arr);
  await arr.map((elem) => {
    console.log(elem);
    return Country.searchName(elem);
  });
};*/

module.exports = { getActivities, createActivity };
