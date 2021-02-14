var express = require("express");

var app = express();
port = process.env.PORT || 3000;

// Middleware for assets route
app.use("/assets", express.static(__dirname + "/assets"));

// Custom Middleware to be run on all route /
app.use("/", function (req, res, next) {
  console.log(`Request type: ${req.method}\nRequest URL: ${req.url}\n`);
  next(); //Allow to pass to next section
});

app.get("/", function (req, res) {
  res.send("<html><head></head><body><h1>Hello Muteeb</h1></body></html>");
});

app.get("/greet/:name", function (req, res) {
  res.send(
    `<html>
        <head>
            <link href=/assets/style.css type=text/css rel=stylesheet>
        </head>
        <body>
            <h1>Hello ${req.params.name}</h1>
        </body>
    </html>`
  );
});

app.get("/api", function (req, res) {
  res.json({
    firstname: "Muteeb",
    lastname: "Akram",
  });
});

app.listen(port);
