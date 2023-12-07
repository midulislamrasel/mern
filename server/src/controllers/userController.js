const createError = require("http-errors");
const users = require("../models/userModule");

const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "Usr progile is reutend",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
