function Muteeb(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var m = new Muteeb("Muteeb", "Akram");

Muteeb.prototype.greet = function (mesg) {
  console.log(mesg + " " + this.firstname + " " + this.lastname);
};

m.greet("What's up")
