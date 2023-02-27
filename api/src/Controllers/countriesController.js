const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const getcountries = async () => {
  const db = await Country.findAll();
  return db;
};

const searchName = async (name) => {
  const country = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  console.log(country);
  if (!country) {
    throw Error;
  } else {
    return country;
  }
};

const getById = async (id) => {
  const country = await Country.findByPk(id, {
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  if (!country) {
    throw Error;
  } else {
    return country;
  }
};

module.exports = {
  searchName,
  getcountries,
  getById,
};
