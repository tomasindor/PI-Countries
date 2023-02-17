const { Router } = require("express");
const {
  searchCountriesHandler,
  searchCountryByIdHandler,
} = require("../Handlers/countriesHandlers");
//const router = require(".");

const countriesRouter = Router();

countriesRouter.get("/", searchCountriesHandler);
countriesRouter.get("/:id", searchCountryByIdHandler);
//console.log(searchCountriesHandler);

module.exports = countriesRouter;
