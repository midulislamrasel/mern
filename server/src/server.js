const express = require("express");
const morgan = require("morgan");
const app = express();

//Middleware
app.use(morgan("dev"));

const isLoggedIn = (req, res, next) => {
  const login = false;
  if (login) {
    next();
  } else {
    return res.status(401).json({ message: "Please Login First " });
  }
};

// =======Api cll mi========
app.get("/user", isLoggedIn, (req, res) => {
  res.status(200).send({
    message: "Usr progile is reutend",
  });
});

app.get("/test", (req, res) => {
  res.send("Api is wroking fine ");
});

app.listen(3001, () => {
  console.log(`server is running ar http://localhost:3001`);
});
