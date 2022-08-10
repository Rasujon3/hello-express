const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  // console.log(req.url);
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

router.get("/about", (req, res) => {
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

router.get("/help", (req, res) => {
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

module.exports = router;
