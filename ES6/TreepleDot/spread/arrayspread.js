let arr = [10, 20, 30]
let a = []
for (let i = 0; i <= arr.length - 1; i++) {
    //a.push(arr[i]);
    a[i] = arr[i]
}
console.log(a)
let b = []
for (val of arr) {
    b.push(val)
}
console.log(b)
let c = arr.map((val) => { return val })
console.log(c)

let d = [...arr]
console.log(d)