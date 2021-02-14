var arr = []

// Array with elements has function
arr.push(function() {
    console.log("Array element 1")
})

arr.push(function() {
    console.log("Array element 2")
})

arr.push(function() {
    console.log("Array element 3")
})

// print the array
// console.log(arr)

// Loop the arr
arr.forEach(function(item) {
    console.log(item)
    item()
})