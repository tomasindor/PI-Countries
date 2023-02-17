const { Router } = require("express");
const { getActivitiesHandler } = require("../Handlers/activitiesHandler");

//const router = require(".");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.post("/");
//console.log(searchCountriesHandler);

module.exports = activitiesRouter;
