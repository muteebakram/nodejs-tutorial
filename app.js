// var a = 1;
// var b = 1;
// var c = a + b;

// console.log(c);

// var local = require("./module");
// console.log(local);
// local();


// setInterval(function () {
//     console.log("Hello")
// }, 100)

var greet = require("./modules/greet.json")
var imp = require("./modules")

imp.english()
imp.spanish()
imp.all(greet)