function Greet4() {
  this.mesg = "Greet4";
  this.greet = function () {
    console.log(this.mesg);
  };
}

module.exports = Greet4;
