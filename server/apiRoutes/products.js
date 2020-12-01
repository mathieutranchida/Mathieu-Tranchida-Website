// Import data
const products = require("../data/products.json");
const { checkIfDataExists } = require("./routeHelpers");

// Get all products
const getAllProducts = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: products });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Get single product by id
const getProductById = (req, res) => {
  try {
    const dataFound = products.find((data) => data._id === req.params.id);
    checkIfDataExists(dataFound, "Product");
    res.status(200).json({ status: 200, data: dataFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Post product
const postProduct = (req, res) => {
  try {
    const product = req.body;
    products.push(product);
    res.status(201).json({ status: 201, data: product });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Modify product
const modifyProduct = (req, res) => {
  try {
    const dataFound = products.find((data) => data._id === req.params.id);
    checkIfDataExists(dataFound, "Product");
    const content = req.body;
    res.status(204).json({ status: 204, data: content });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Delete product
const deleteProduct = (req, res) => {
  try {
    const dataFound = products.find((data) => data._id === req.params.id);
    checkIfDataExists(dataFound, "Product");
    res.status(200).json({ status: 200, data: dataFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  modifyProduct,
  deleteProduct,
};
