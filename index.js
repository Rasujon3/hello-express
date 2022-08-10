const express = require("express");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Global Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  console.log(req.url);
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

// This is a middleware Signature
// If everything seems ok, Controller will call response methods
// If everything seems ok, Middleware will call next
function handler(req, res, next) {
  // 1. read request object
  // 2. process request
  // 3. response back the result
}
