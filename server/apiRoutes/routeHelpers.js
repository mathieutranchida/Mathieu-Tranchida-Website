const checkIfDataExists = (data, name) => {
  if (data === "undefined") {
    throw new Error(
      `${name} not found in database - ${name} n'est pas dans la base de donnée`
    );
  }
  return true;
};

// Verify user
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorisation"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = { checkIfDataExists, verifyToken };
