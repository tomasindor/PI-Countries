const {
  getActivities,
  createActivity,
} = require("../Controllers/activitiesControllers");

const getActivitiesHandler = async (req, res) => {
  try {
    const activities = await getActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    const newPost = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getActivitiesHandler, createActivityHandler };
