var http = require("http");
var https = require("https");
var fs = require("fs");

// console.log(http);
// console.log("\n");
// console.log(https);

http
  .createServer(function (req, res) {
    // console.log(req.url);
    res.writeHead(200, { "Content-Type": "application/json" });

    json_obj = {
        firstname: "Muteeb",
        lastname: "Akram"
    }
    // res.end(json_obj.toString());
    res.end(JSON.stringify(json_obj))

  })
  .listen(5000, "127.0.0.1");
