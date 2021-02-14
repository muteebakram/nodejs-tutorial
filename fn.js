function muteeb(name) {
  console.log("hello " + name);
}
muteeb("muteeb");

// first class function
// function is special in JS it is like Object
function callmuteeb(fn) {
//   console.log(fn);
  fn("akeeb");
}

callmuteeb(muteeb);

// Expression function
var func = function () {
  console.log("Good morining");
};

// console.log(func);

callmuteeb(func)