const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello Node js, you are awesome</h1>`);
});

app.listen(4000, () => {
  console.log(`Server is listening on http://localhost:4000`);
});

function handler(req, res, next) {
  // 1. read request object
  // 2. process request
  // 3. response back the result
}
