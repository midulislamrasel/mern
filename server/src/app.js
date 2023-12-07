const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
// const xssClean = require("xxs-clean"); //NOT Working
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

const app = express();

//RateLimit package
const limiter = rateLimit({
  windowMs: 11 * 60 * 1000,
  limit: 5,
  print: "To many requests from this ip. Please try again later",
});

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(xssClean()); //NOT Working
// app.use(limiter());

//user Router
app.use("/api/users", userRouter);

// =======Api cll mi========
app.get("/test", limiter, (req, res) => {
  res.send("Api is wroking fine ");
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
