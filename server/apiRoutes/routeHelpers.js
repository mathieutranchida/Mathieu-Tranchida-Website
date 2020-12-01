const checkIfDataExists = (data, name) => {
  if (data === "undefined") {
    throw new Error(
      `${name} not found in database - ${name} n'est pas dans la base de donnée`
    );
  }
  return true;
};

module.exports = { checkIfDataExists };