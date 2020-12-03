"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getAllProducts,
  getProductById,
  postProduct,
  modifyProduct,
  deleteProduct,
} = require("./apiRoutes/products");

const {
  getAllUsers,
  getUser,
  postUser,
  modifyUser,
  deleteUser,
} = require("./apiRoutes/users");

const {
  getAllPriceLists,
  getPriceList,
  postPriceList,
  modifyPriceList,
  deletePriceList,
} = require("./apiRoutes/priceList");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //HOME
  .get("/", (req, res) =>
    res
      .status(200)
      .json({ status: 200, message: `Server is running on port ${PORT}` })
  )

  // PRODUCT ENDPOINTS ------------------------------------------
  // Get all products
  .get("/products", getAllProducts)

  // Get single product
  .get("/product/:_id", getProductById)

  // Create product
  .post("/post-product", postProduct)

  // Modify product
  .put("/modify-product/:_id", modifyProduct)

  // Delete product
  .delete("/delete-product/:_id", deleteProduct)

  // CART ENDPOINTS ---------------------------------------------

  // PRICE LIST ENDPOINTS ---------------------------------------
  // Get all price lists
  .get("/price-lists", getAllPriceLists)

  // Get one price list
  .get("/price-list/:id", getPriceList)

  // Post price list
  .post("/post-price-list", postPriceList)

  // Modify price list
  .put("/modify-price-list/:id", modifyPriceList)

  // Delete price list
  .delete("/delete-price-list/:id", deletePriceList)

  // ORDER ENDPOINTS --------------------------------------------

  // USER ENDPOINTS ---------------------------------------------
  // Get all products
  .get("/users", getAllUsers)

  // Get single product
  .get("/user/:email", getUser)

  // Create user
  .post("/post-user", postUser)

  // Modify user
  .put("/modify-user/:email", modifyUser)

  // Delete user
  .delete("/delete-user/:email", deleteUser)

  // DO NOT TOUCH
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
