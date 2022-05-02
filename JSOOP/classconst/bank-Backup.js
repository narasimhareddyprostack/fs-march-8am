class Bank {
    min_Bal = 500;
    acc_Id;
    acc_Name;
    constructor(acc_Id, acc_Name) {
        this.acc_Id = acc_Id;
        this.acc_Name = acc_Name
    }
    get_Balance() { }
}
let c1 = new Bank(101, "Rahul Gandhi")
console.log(c1)