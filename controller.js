const fs = require("fs");

exports.homeController = (req, res) => {
  //   throw new Error("Wrong");
  fs.readFile("./Pages/index.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
};

exports.aboutController = (req, res) => {
  fs.readFile("./Pages/about.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
};

exports.helpController = (req, res) => {
  fs.readFile("./Pages/help.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
};
