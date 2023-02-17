const { getActivities } = require("../Controllers/activitiesControllers");

const getActivitiesHandler = async (req, res) => {
  try {
    const activities = getActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createActivityHandler = async (req, res) => {
  const { name, Dificulty, Duration, season, countryId } = req.body;
  try {
    const newPost = await createActivity(
      name,
      Dificulty,
      Duration,
      season,
      countryId
    );
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getActivitiesHandler };
