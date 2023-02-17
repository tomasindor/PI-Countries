const {
  searchName,
  getcountries,
  getById,
} = require("../Controllers/countriesController");

const searchCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const paises = name ? await searchName(name) : await getcountries();
    res.status(200).json(paises);
  } catch (error) {
    res.status(400).json("The country does not exists");
  }
};

const searchCountryByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const paises = await getById(id);
    console.log(paises);
    return res.status(200).json(paises);
  } catch (error) {
    res.status(400).json("The country with this ID does not exists");
  }
};
//const createCountriesHandler = async (req, res) =>{
//const array =
//const countries = createCountries(array)

module.exports = { searchCountriesHandler, searchCountryByIdHandler };
