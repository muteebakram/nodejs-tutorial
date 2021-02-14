var fs = require("fs");

// readFileSync is Synchronus call that execution needs to wait
// untill textfile is completely read into buffer

// Ex: can be used to read config file before starting app.
var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");

console.log(greet);

// reading Asynchronus
var greet2 = fs.readFile(__dirname + "/greet.txt", "utf-8", function (err, data) {
  if (!err) {
    console.log("Came here");
    console.log(data);
  } else {
    console.log("Came here too");
    console.log(err);
  }
});

// greet2;
console.log("Done");
