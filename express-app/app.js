var express = require("express");
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
port = process.env.PORT || 3000;

// Body Parser - Way of parsing request

// Middleware for assets route
app.use("/assets", express.static(__dirname + "/assets"));

// Custom Middleware to be run on all route /
app.use("/", function (req, res, next) {
  console.log(`Request type: ${req.method}\nRequest URL: ${req.url}\n`);
  next(); //Allow to pass to next section
});

// Adding Template Engine EJS
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("<html><head></head><body><h1>Hello Muteeb</h1></body></html>");
});

// app.get("/greet/:name", function (req, res) {
//   res.send(
//     `<html>
//         <head>
//             <link href=/assets/style.css type=text/css rel=stylesheet>
//         </head>
//         <body>
//             <h1>Hello ${req.params.name}</h1>
//         </body>
//     </html>`
//   );
// });

app.get("/greet/:name", function (req, res) {
  res.render("greet", { ID: req.params.name });
});

app.get("/greet-post", function (req, res) {
  res.render("greet-post", { ID: req.params.name });
});

// When request comes urlencodedParser callback executed the function
app.post("/greet-post", urlencodedParser, function (req, res) {
  res.send("Thank you :)");
  console.log(req.body);
});

app.get("/api", function (req, res) {
  res.json({
    firstname: "Muteeb",
    lastname: "Akram",
  });
});

app.listen(port);
