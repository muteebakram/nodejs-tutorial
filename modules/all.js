const modules = require(".");
var greet = require("./greet.json");

// console.log(greet)

function work(greet) {
  for (lang in greet) {
    console.log(lang, greet[lang]);
  }
}

module.exports = work;
