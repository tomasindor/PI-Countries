const { Router } = require("express");
const {
  getActivitiesHandler,
  createActivityHandler,
} = require("../Handlers/activitiesHandler");

//const router = require(".");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.post("/", createActivityHandler);
//console.log(searchCountriesHandler);

module.exports = activitiesRouter;
