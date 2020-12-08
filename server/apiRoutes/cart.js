// Import the cart
const cart = require("../data/cart.json");

// Database imports
const { MongoClient, ObjectId } = require("mongodb");
const assert = require("assert");
const { disconnect } = require("process");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Get single cart by id
const getCartById = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("mtwebsite");
  console.log("connected!");

  const id = req.params.id;
  console.log(id);

  db.collection("carts").findOne({ id }, (err, result) => {
    result
      ? res.status(200).json({ status: 200, id, data: result })
      : res.status(404).json({ status: 404, id, data: "Not Found" });

    client.close();
    console.log("disconnected!");
  });
};

// Post a cart
const postCart = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const result = await db.collection("carts").insertOne(req.body);
    assert.equal(1, result.insertedCount);

    res.status(201).json({ status: 201, data: req.body });

    client.close();
    console.log("disconnected!");
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Add, modify, and delete a product to the cart - put
const modifyCart = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const id = req.params.id;
    console.log(id);
    const query = { id: id };
    const newValues = {
      $set: {
        products: req.body.products,
        totalAmountOfProducts: req.body.totalAmountOfProducts,
        totalPriceBeforeTax: req.body.totalPriceBeforeTax,
        gst: req.body.gst,
        qst: req.body.qst,
        totalPriceAfterTax: req.body.totalPriceAfterTax,
        shipping: req.body.shipping,
        cartTotalFinal: req.body.cartTotalFinal,
      },
    };
    console.log(req.body);

    const result = await db.collection("cart").updateOne(query, newValues);
    // console.log(result);
    assert.equal(1, result.matchedCount);
    assert.equal(1, result.modifiedCount);

    client.close();
    console.log("disconnected!");

    res.status(200).json({
      status: 200,
      data: { _id, result },
    });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Delete the whole cart
const deleteCart = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const id = req.params.id;

    const result = await db.collection("cart").deleteOne({ id });
    // console.log(result);

    assert.equal(1, result.deletedCount);

    client.close();
    console.log("disconnected!");

    res.status(204).json({
      status: 204,
      data: id,
      message: `${id} has been deleted from the database`,
    });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

module.exports = { getCartById, postCart, modifyCart, deleteCart };
