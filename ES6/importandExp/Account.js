class Account {
    constructor() {
        console.log("Account Class Constructor")
    }
}
let min_Bal = 500
//export default Account     - Es6
//Es5

//module.exports = Account    //Es5 default export 
module.exports = { Account, min_Bal }