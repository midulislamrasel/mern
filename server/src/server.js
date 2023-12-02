const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("Api is wroking fine");
});

app.listen(3001, () => {
  console.log(`server is running ar http://localhost:3001`);
});
