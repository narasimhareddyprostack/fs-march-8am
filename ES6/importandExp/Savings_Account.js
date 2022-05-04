//let Account = require('./Account')
let { Account, min_Bal } = require('./Account')
class Savings_Account extends Account {
    constructor() {
        super()
        console.log("Savings_Account  -Constructor")
    }
}
new Savings_Account();
console.log(min_Bal)