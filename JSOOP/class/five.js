class Savings_Account {
    min_Bal = 1000
    open_Account() {
        console.log("Accout Opened successfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited")
    }
    withdrawl() {
        console.log("No Money ! Deposit more")
    }
    get_Statement() { }
    get_Bal() {
        console.log("Server Busy")
    }
    close_Account() {
        console.log("Accounted Successfully")
    }
}
let c1 = new Savings_Account();
console.log(c1)
console.log(c1.min_Bal)
c1.open_Account()
c1.deposit_Amount()
c1.withdrawl()
c1.get_Statement()
c1.get_Bal()
c1.close_Account()
c1.get_Loan()