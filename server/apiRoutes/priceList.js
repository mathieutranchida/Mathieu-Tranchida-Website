// Import data
const priceList = require("../data/priceList.json");
const { checkIfDataExists } = require("./routeHelpers");

// Get all pricing lists
const getAllPriceLists = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: priceList });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Get one pricing list
const getPriceList = (req, res) => {
  try {
    const listFound = priceList.find((data) => data._id === req.params.id);
    checkIfDataExists(listFound, "List");
    res.status(200).json({ status: 200, data: listFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Post pricing list
const postPriceList = (req, res) => {
  try {
    const list = req.body;
    priceList.push(list);
    res.status(201).json({ status: 201, data: list });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Modify princing list
const modifyPriceList = (req, res) => {
  try {
    const listFound = priceList.find((data) => data._id === req.params.id);
    checkIfDataExists(listFound, "List");
    const content = req.body;
    res.status(204).json({ status: 204, data: content });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Delete pricing list
const deletePriceList = (req, res) => {
  try {
    const listFound = priceList.find((data) => data._id === req.params.id);
    checkIfDataExists(listFound, "List");
    res.status(200).json({ status: 200, data: listFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  getAllPriceLists,
  getPriceList,
  postPriceList,
  modifyPriceList,
  deletePriceList,
};
