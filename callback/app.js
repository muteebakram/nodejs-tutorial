function greet(callback) {
  console.log("In greet func");
  var data = {
      name: "Muteeb"
  }
  callback(data);
}

greet(function (data) {
  console.log("Running callback 1 !!");
  console.log(data)
});

greet(function (data) {
  console.log("Running callback 2 !!");
  console.log(data.name)
});
