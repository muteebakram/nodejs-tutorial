// Immediate Invoked Finction Expression (IIFE)
// Function variables are localy scoped

firstname = "Akeeb";
lastname = "Nawaz";

(function (firstname, lastname) {
  console.log("Hi " + firstname + lastname);
})("Muteeb", "Akram");

console.log(firstname);
console.log(lastname);
