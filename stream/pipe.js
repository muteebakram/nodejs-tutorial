// Flow of data

var fs = require("fs");
var zlib = require("zlib");

var gzlib = zlib.createGzip();

var readable = fs.createReadStream(__dirname + "/data.txt", {
  encoding: "utf8",
});

var writeable = fs.createWriteStream(__dirname + "/data copy.txt", {
  encoding: "utf8",
});

var compressed = fs.createWriteStream(__dirname + "/data.txt.gz", {
  encoding: "utf8",
});

data = readable.pipe(writeable);

readable.pipe(gzlib).pipe(compressed);
