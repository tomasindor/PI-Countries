const { Activity } = require("../db");

const getActivities = async () => {
  const db = Activity.findAll();
  return db;
};

const createActivity = async (name, Dificulty, Duration, season, countryId) => {
  const newActivity = await Activity.create({
    name,
    Dificulty,
    Duration,
    season,
  });
  await newActivity.setCountry(countryId);
  return newActivity;
};

module.exports = { getActivities, createActivity };
