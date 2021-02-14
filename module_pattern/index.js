// Way 1
// Define function with varibale and export function varible
var g0 = require("./greet0");
g0();

// Way 2
// export function with no function varibale i,e directly to module.export
var g1 = require("./greet1");
g1();

// Way 3
// attach it module.export as no property
var g2 = require("./greet2").greet;
g2();

// Way 4
// Use Function call basically class obj module
var g3a = require("./greet3");
g3a.mesg = "G3a G3a";
g3a.greet();

// Once a require module is called it is cached 
// Thererfore even if its new object we still get the old object value
// Appraently this good and obv fast (its cache)
var g3b = require("./greet3");
g3b.greet();

//Way 4
// What if we want to have new and diff obj everytime
var g4 = require("./greet4");
g4a =  new g4();
g4a.mesg = "G4a G4a"
g4a.greet()

//New object
var g4 = require("./greet4");
g4b =  new g4();
g4b.mesg = "G4b G4b"
g4b.greet()

//Way 5
// Reveling module pattern
// Only greet5 function is exposed and not the var mesg

// Usefull protects only required props are exposed
var g5 = require("./greet5")
g5.greet()