let name = "Rahul Gandhi"
console.log(name)
let user = { id: 101, ename: "Rahul Gandhi", sal: 45000, details: { loc: ['Noida', 'Wayanad'] } }
console.log(user.ename)
console.log(user.details.loc[0])
let { ename, details } = user;


let { loc } = details;

console.log(ename)
console.log(loc[0])