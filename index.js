const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Global Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(globalMiddleware);
app.use(require("./routes"));

app.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log("Error", err);
  if (err.status) {
    return res.status(err.status).send(`<h1>${err.message}</h1>`);
  }
  res.status(500).send(`<h1>Something went wrong</h1>`);
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

function middlewareSignature(req, res, next) {
  next();
}

function globalMiddleware(req, res, next) {
  console.log(`${req.method} - ${req.url}`);
  console.log("I am a global middleware");
  if (req.query.bad) {
    return res.status(400).send("Bad Request");
  }
  next();
}

function localMiddleware(req, res, next) {
  console.log("I am a local middleware");
  next();
}
