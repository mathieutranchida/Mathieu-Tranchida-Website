// Import data
const priceLists = require("../data/priceLists.json");

// Get price list
const getPriceLists = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: priceLists });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = { getPriceLists };
