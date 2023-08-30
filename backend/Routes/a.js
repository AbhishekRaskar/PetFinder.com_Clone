// shelters.js (backend route file)
const express = require("express");
const { ShelterModel } = require("../Models/Shelter.Model");
const ShelterRouter = express.Router();

ShelterRouter.get("/", async (req, res) => {
  try {
    const { type, sortBy, sortOrder, location, page, limit, search } =
      req.query;
    let query = {};

    if (type) {
      query.type = type.toLowerCase();
    }
    if (location) {
      query.location = location;
    }
    if (search) {
      const searchQuery = search.toLowerCase();
      query["$or"] = [
        { name: { $regex: searchQuery, $options: "i" } },
        { type: { $regex: searchQuery, $options: "i" } },
        { location: { $regex: searchQuery, $options: "i" } },
        { price: { $regex: searchQuery, $options: "i" } },
      ];
    }

    const totalData = await ShelterModel.countDocuments(query);
    const currentPage = parseInt(page) || 1;
    const limitPerPage = parseInt(limit) || 10;
    const totalPages = Math.ceil(totalData / limitPerPage);
    const startIndex = (currentPage - 1) * limitPerPage;

    const shelters = await ShelterModel.find(query)
      .sort({ [sortBy]: sortOrder === "desc" ? -1 : 1 })
      .skip(startIndex)
      .limit(limitPerPage);

    res.status(200).json({
      data: shelters,
      totalData,
      totalPages,
      currentPage,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  ShelterRouter,
};
