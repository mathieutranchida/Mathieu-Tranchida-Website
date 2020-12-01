// Import data
const users = require("../data/users.json");
const { checkIfDataExists } = require("./routeHelpers");

// Get all users
const getAllUsers = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: users });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Get single user
const getUser = (req, res) => {
  try {
    const userFound = users.find((user) => user.email === req.params.email);
    checkIfDataExists(userFound, "User");
    res.status(200).json({ status: 200, data: userFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Post user
const postUser = (req, res) => {
  try {
    const user = req.body;
    users.push(user);
    res.status(201).json({ status: 201, data: user });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Modify user
const modifyUser = (req, res) => {
  try {
    const userFound = users.find((user) => user.email === req.params.email);
    checkIfDataExists(userFound, "User");
    const userUpdate = req.body;
    // const userEmail = req.body.email;
    // const userName = req.body.name;
    // const userPassword = req.body.password;
    // const userTypeUpdate = req.body.userType;
    // const userPhone = req.body.phone;
    res.status(204).json({
      status: 204,
      data: userUpdate,
      //   data: {
      //     id: userEmail,
      //     name: userName,
      //     password: userPassword,
      //     userType: userTypeUpdate,
      //     phone: userPhone,
      //   },
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Delete product
const deleteUser = (req, res) => {
  try {
    const userFound = users.find((user) => user.email === req.params.email);
    checkIfDataExists(userFound, "User");
    res.status(200).json({ status: 200, data: userFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = { getAllUsers, getUser, postUser, modifyUser, deleteUser };
