const express = require("express");
const { ShelterModel } = require("../Models/Shelter.Model");
const ShelterRouter = express.Router();

ShelterRouter.get("/", async (req, res) => {
  try {
    const { order, location, page, name } = req.query;

    let query = {};
    let sortby = {};

    if (order == "asc") {
      sortby.price = 1;
    }
    else if (order == "desc") {
      sortby.price = -1;
    }
    else {
      sortby = null;
    }

    if (name) {
      query.name = ({ $regex: name, $options: "i" })
    }

    if (location) {
      query.location = location;
    }

    let currentPage = 1;
    let sheltersPerPage = 8;

    if (page) {
      currentPage = +page;
    }

    const shelters = await ShelterModel.find(query)
      .sort(sortby)
      .skip((currentPage - 1) * sheltersPerPage)
      .limit(sheltersPerPage);

    res.status(200).json({
      shelters,
      totalData: await ShelterModel.countDocuments(query),
      totalPages: Math.ceil(
        (await ShelterModel.countDocuments(query)) / sheltersPerPage
      ),
      currentPage,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
});

module.exports = {
  ShelterRouter,
};
