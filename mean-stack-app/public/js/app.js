// This app.js is rendered in browser not by nodejs
// All the angularjs releated stuff goes in here

angular.module("MeanApp", []);

angular.module("MeanApp").controller("MainController", ctrFunc);

function ctrFunc() {
  this.m = "MongoDB";
  this.e = "Express";
  this.a = "AngularJS";
  this.n = "NodeJS";
}

angular.module("MeanApp").controller("PeopleController", peopFunc);

function peopFunc() {
  this.people = clientPeople;
}