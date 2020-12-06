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

const { getPriceLists } = require("./apiRoutes/priceLists");

// const {
//   getCart,
//   AddProductToCart,
//   modifyProductCartQuantity,
//   deleteProductFromCart,
// } = require("./apiRoutes/cart");

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

  // // CART ENDPOINTS ---------------------------------------------
  // // Get cart
  // .get("/cart", getCart)

  // // Add product to cart
  // .post("/add-to-cart", AddProductToCart)

  // // Modify product quantity in the cart
  // .patch("/modify-cart-product-quantity/:_id", modifyProductCartQuantity)

  // // Delete product from the cart
  // .delete("/delete-cart-product/:_id", deleteProductFromCart)

  // PRICE LIST ENDPOINTS ---------------------------------------
  // Get all price lists
  .get("/price-lists", getPriceLists)

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
