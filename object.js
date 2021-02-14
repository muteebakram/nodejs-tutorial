var person = {
  firstname: "Muteeb",
  lastname: "Nawaz",
  greet: function (mesg) {
    console.log(mesg + " " + this.firstname + " " + this.lastname);
    return "Done";
  },
};

// a = person.greet("Hello");

// console.log("\n", a);
console.log(person.greet("Hello"));

console.log(person.firstname);

console.log(person['firstname']);
