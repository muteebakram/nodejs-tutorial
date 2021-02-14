function Greet3() {
  this.mesg = "Greet3";
  this.greet = function () {
    console.log(this.mesg);
  };
}

module.exports = new Greet3();
