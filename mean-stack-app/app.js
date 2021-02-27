"use-strict";

import express from "express";

var app = express();
var port = process.env.PORT || 3000;

var people = [
  {
    name: "Jane Doe",
  },
  {
    name: "Jane Doe",
  },
  {
    name: "Jane Doe",
  },
];

// Middleware for assets route
app.use("/assets", express.static(__dirname + "/public"));

// Adding Template Engine EJS
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/people", function (req, res) {
  res.render("people", { serverPeople: people });
});

app.listen(port);
