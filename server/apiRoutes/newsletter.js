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

// Get all emails from database
const getEmails = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("mtwebsite");
  console.log("connected");

  db.collection("newsletter")
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

// Add email to database
const addEmail = async (req, res) => {
  const { email } = req.body;

  if (!!!email) {
    res.status(400).json({ error: "missing required fields" });
  }

  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("mtwebsite");
    console.log("connected!");

    const emailFromDb = await db.collection("newsletter").findOne({ email });

    if (emailFromDb) {
      res.status(400).json({ error: "Email already exists" });
      return;
    }

    const newEmail = await db.collection("newsletter").insertOne({
      email,
    });
    assert.equal(1, newEmail.insertedCount);

    res.status(201).json({ status: 201, data: req.body });

    client.close();
    console.log("disconnected!");
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Delete product
const deleteEmail = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("mtwebsite");
    console.log("connected!");

    const _id = ObjectId(req.params._id);

    const result = await db.collection("newsletter").deleteOne({ _id });
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
  getEmails,
  addEmail,
  deleteEmail,
};
