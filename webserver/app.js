var http = require("http");
var https = require("https");
var fs = require("fs");

// console.log(http);
// console.log("\n");
// console.log(https);

http
  .createServer(function (req, res) {
    // console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html" });

    // Template
    // var html = fs.readFileSync(__dirname + "/index.html", "utf8");
    // var message = "Hello Muteeb";

    // html = html.replace("{Message}", message);
    // console.log(html)
    // res.end(html);

    // Stream
    fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  })
  .listen(5000, "127.0.0.1");
