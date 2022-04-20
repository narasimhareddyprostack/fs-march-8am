//let emp = { id: 101, name: "Rahul Gandhi", sal: 45000 }
let emp = {}
let keys = Object.keys(emp)
console.log(keys)
if (keys.length == 0) {
    console.log("Given object is empty")
}
else {
    console.log("Not Empty")
}