// Body Parser - Way of parsing request
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
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
};
