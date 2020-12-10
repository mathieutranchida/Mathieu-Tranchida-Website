"use strict";
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

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

const {
  getCartById,
  postCart,
  modifyCart,
  deleteCart,
} = require("./apiRoutes/cart");

const { getAllOrders, getOneOrder, createOrder } = require("./apiRoutes/order");

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
  .use(cors())

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
  // Get cart
  .get("/cart/:_id", getCartById)

  // Add cart
  .post("/add-cart", postCart)

  // Add, modify, and delete a product in the cart
  .put("/modify-cart/:_id", modifyCart)

  // Delete product from the cart
  .delete("/delete-cart/:_id", deleteCart)

  // PRICE LIST ENDPOINTS ---------------------------------------
  // Get all price lists
  .get("/price-lists", getPriceLists)

  // ORDER ENDPOINTS --------------------------------------------
  // Get all orders
  .get("/orders", getAllOrders)

  // Get one order
  .get("/order/:_id", getOneOrder)

  // Post an order
  .post("/post-order", createOrder)

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

  // STRIPE API --------------------------------------------------
  .post("/checkout", async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
      const { product, token } = req.body;

      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
      console.log(product);
      const idempotencyKey = uuidv4();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "cad",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip,
            },
          },
        },
        {
          idempotencyKey,
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }

    res.json({ error, status });
  })

  // DO NOT TOUCH
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
