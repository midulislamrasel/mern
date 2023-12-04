const app = require("./app");
const { serverPort } = require("./secret");

app.listen(serverPort, () => {
  console.log(`server is running ar http://localhost:${serverPort}`);
});
