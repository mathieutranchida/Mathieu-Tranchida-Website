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

// Get all users
const getAllUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("mtwebsite");
  console.log("connected");

  db.collection("users")
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

// Get single user
const getUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("mtwebsite");
  console.log("connected!");

  const email = req.params.email;

  db.collection("users").findOne({ email }, (err, result) => {
    result
      ? res.status(200).json({ status: 200, email, data: result })
      : res.status(404).json({ status: 404, email, data: "Not Found" });

    client.close();
    console.log("disconnected!");
  });
};

// Post user
const postUser = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const result = await db.collection("users").insertOne(req.body);
    assert.equal(1, result.insertedCount);

    res.status(201).json({ status: 201, data: req.body });

    client.close();
    console.log("disconnected!");
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Modify user
const modifyUser = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const email = req.params.email;
    const query = { email: email };
    const newValues = { $set: req.body };

    const result = await db.collection("users").updateOne(query, newValues);
    assert.equal(1, result.matchedCount);
    assert.equal(1, result.modifiedCount);

    client.close();
    console.log("disconnected!");

    res.status(200).json({
      status: 200,
      data: { email, result },
    });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Delete product
const deleteUser = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const email = req.params.email;

    const result = await db.collection("users").deleteOne({ email });
    assert.equal(1, result.deletedCount);

    client.close();
    console.log("disconnected!");

    res.status(204).json({
      status: 204,
      data: email,
      message: `${email} has been deleted from the database`,
    });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

module.exports = { getAllUsers, getUser, postUser, modifyUser, deleteUser };
