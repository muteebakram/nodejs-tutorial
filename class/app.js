// Class in Javascript is sugare coating of Function object

class Greet {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}!`);
  }
}

const g1 = new Greet("Muteeb", "Akram")

g1.greet()