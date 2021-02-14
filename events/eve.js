var emitter = require("events")

var emt = new emitter()

emt.on("greet", function() {
    console.log("Hello from greet 1")
})

emt.on("greet", function() {
    console.log("Hello from greet 2")
})

console.log("Emitting")

emt.emit("greet")