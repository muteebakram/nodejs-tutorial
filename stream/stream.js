// Flow of data

var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/data.txt", {
  encoding: "utf8",
});

var writeable = fs.createWriteStream(__dirname + "/data copy.txt", {
    encoding: "utf8",
  });
  

readable.on("data", (chunk) => {
  writeable.write(chunk)
});
