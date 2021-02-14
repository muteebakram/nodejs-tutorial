// Pass by value
function change(a) {
  console.log("a before = ", a);
  a = 10;
  console.log("a after = ", a);
}

var b = 5;
change(b);

console.log("b = ", b);

// Pass by reference
function changeObj(obj) {
  obj.name = "Muteeb";
  obj.add = {};
}

var ak = {};
console.log("ak before: ", ak);
changeObj(ak);
console.log("ak after: ", ak);


// In Javascript object are always pass by reference