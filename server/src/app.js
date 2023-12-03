const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const app = express();

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// =======Api cll mi========
app.get("/test", (req, res) => {
  res.send("Api is wroking fine ");
});

app.get("/api/users", (req, res) => {
  res.status(200).send({
    message: "Usr progile is reutend",
  });
});

//client error handling
app.use((req, res, next) => {
  //   res.status(404).json({ message: "Rout not found" });
  createError(404, "rout not fuond");
  next();
});

//server error handling ----> all the errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  //   res.status(500).send("Something Broke");
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
