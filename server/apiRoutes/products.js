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

// Get all products
const getAllProducts = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("mtwebsite");
  console.log("connected");

  db.collection("products")
    .find()
    .toArray((err, result) => {
      if (result) {
        const start = Number(req.query.start) || 0;
        const end = start + Number(req.query.limit) || 25;
        const maxEnd = result.length;
        if (end > result.length) {
          const limitedResult = result.slice(start, maxEnd);
          res.status(200).json({ status: 200, data: limitedResult });
        } else {
          const limitedResult = result.slice(start, end);
          res.status(200).json({ status: 200, data: limitedResult });
        }
      } else {
        res.status(404).json({ status: 404, data: "Not found" });
      }
      client.close();
      console.log("disconnected!");
    });
};

// Get single product by id
const getProductById = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("mtwebsite");
  console.log("connected!");

  const _id = ObjectId(req.params._id);
  console.log(_id);

  db.collection("products").findOne({ _id }, (err, result) => {
    result
      ? res.status(200).json({ status: 200, _id, data: result })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });

    client.close();
    console.log("disconnected!");
  });
};

// Post product
const postProduct = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const result = await db.collection("products").insertOne(req.body);
    assert.equal(1, result.insertedCount);

    res.status(201).json({ status: 201, data: req.body });

    client.close();
    console.log("disconnected!");
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Modify product
const modifyProduct = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const _id = req.params._id;
    console.log(_id);
    const query = { _id: ObjectId(_id) };
    const newValues = { $set: req.body };
    console.log(req.body);

    const result = await db.collection("products").updateOne(query, newValues);
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

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const _id = ObjectId(req.params._id);

    const result = await db.collection("products").deleteOne({ _id });
    // console.log(result);

    assert.equal(1, result.deletedCount);

    client.close();
    console.log("disconnected!");

    res.status(204).json({
      status: 204,
      data: _id,
      message: `${_id} has been deleted from the database`,
    });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  modifyProduct,
  deleteProduct,
};
