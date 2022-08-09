const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./Pages/index.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./Pages/about.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get("/help", (req, res) => {
  fs.readFile("./Pages/help.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.listen(4000, () => {
  console.log(`Server is listening on http://localhost:4000`);
});

function handler(req, res, next) {
  // 1. read request object
  // 2. process request
  // 3. response back the result
}
