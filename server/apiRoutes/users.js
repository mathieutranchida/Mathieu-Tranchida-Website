// Database imports
const { MongoClient, ObjectId } = require("mongodb");
const assert = require("assert");
const { disconnect } = require("process");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

// SignUp
const signUp = async (req, res) => {
  const { email, password } = req.body;

  if (!!!email || !!!password) {
    res.status(400).json({ error: "missing required fields" });
  }

  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("mtwebsite");
    console.log("connected!");

    const userFromDb = await db.collection("users").findOne({ email });

    if (userFromDb) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hash = await bcrypt.hash(password, 8);

    const savedDoc = await db.collection("users").insertOne({
      email,
      password: hash,
    });

    const [user] = savedDoc.ops;

    jwt.sign({ _id: user._id }, process.env.SECRET, function (err, token) {
      if (err) {
        res.status(500).send({ error: err.message });
      }
      res.status(201).json({ email: user.email, _id: user._id, token });
    });

    client.close();
    console.log("disconnected!");
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!!!email || !!!password) {
    res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("mtwebsite");
    console.log("connected!");

    const userFromDb = await db.collection("users").findOne({ email });
    const passwordMatches = await bcrypt.compare(password, userFromDb.password);

    if (!userFromDb || !passwordMatches) {
      res.status(403).json({
        message: "Your email or password is incorect. Please try again.",
      });
      return;
    }

    const token = jwt.sign({ id: userFromDb._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ user: { _id: userFromDb._id, email: userFromDb.email }, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

// Verify user
const verifyUser = async (req, res) => {};

module.exports = { getAllUsers, login, signUp };
