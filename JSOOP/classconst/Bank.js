class Bank {
    min_Bal = 500
    constructor(id, name, amount) {
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Amount = amount
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
    get_Statement() {
        console.log("Please Download Statement")
    }
}
let c1 = new Bank(101, "Rahul Gandhi", 5000)
let acc_Balance = c1.get_Bal()
console.log(acc_Balance)

c1.get_Statement()
c1.get_Statement()
c1.get_Statement()
c1.get_Statement()