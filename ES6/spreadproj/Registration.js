let user = { userName: "Rahul", email: "rahul@gmail.com", password: "ilovebangalore" }

//converting user sensitive data using bcrypt js package 
let bcrypt = require('bcryptjs')

let salt = bcrypt.genSaltSync(10);
let new_Password = bcrypt.hashSync(user.password, salt)
console.log(user.password)
console.log(new_Password)
let new_User = { ...user, password: new_Password }
console.log(user)
console.log(new_User)
let flag = bcrypt.compareSync("ilovenoida", new_User.password)
if (flag == true) {
    console.log("Login success")
}
else {
    console.log("failure")
}