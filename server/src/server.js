const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    next();
  } else {
    return res.status(401).console.log("Please Login First ");
  }
};

// =======Api cll mi========
app.get("/test", (req, res) => {
  res.send("Api is wroking fine ");
});

app.get("/test/users", isLoggedIn, (req, res) => {
  res.status(200).send({
    message: "Usr progile is reutend",
  });
});

//client error handling
app.use((req, res, next) => {
  res.status(404).json({ message: "Rout not found" });
  next();
});

//server error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke");
});

app.listen(3001, () => {
  console.log(`server is running ar http://localhost:3001`);
});
