const express = require("express");
const morgan = require("morgan");
const app = express();

//Middleware
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.send("Api is wroking fine ");
});

app.post("/test", (req, res) => {
  res.send("post Api is wroking fine ");
});

app.put("/test", (req, res) => {
  res.send("put Api is wroking fine ");
});

app.listen(3001, () => {
  console.log(`server is running ar http://localhost:3001`);
});
