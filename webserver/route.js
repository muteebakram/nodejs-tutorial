var http = require("http");
var fs = require("fs");

// console.log(http);
// console.log("\n");
// console.log(https);

http
  .createServer(function (req, res) {
    console.log(req.url);
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.createReadStream(__dirname + "/DP.jpeg").pipe(res);
    } else if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      json_obj = {
        firstname: "Muteeb",
        lastname: "Akram",
      };
      // res.end(json_obj.toString());
      res.end(JSON.stringify(json_obj));
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Page not found</h1>");
    }
  })
  .listen(5000, "127.0.0.1");
