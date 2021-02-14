var express = require("express");

var api = require("./controllers/api");
var html = require("./controllers/html");

var app = express();
port = process.env.PORT || 3000;

// Middleware for assets route
app.use("/assets", express.static(__dirname + "/assets"));

// Custom Middleware to be run on all route /
app.use("/", function (req, res, next) {
  console.log(`Request type: ${req.method}\nRequest URL: ${req.url}\n`);
  next(); //Allow to pass to next section
});

// Adding Template Engine EJS
app.set("view engine", "ejs");

api(app);
html(app);

app.listen(port);
