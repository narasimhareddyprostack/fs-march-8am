class Current_Account extends Account {
    min_Bal = 5000
    constructor(id, name, amount) {
        super()
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Amount = amount;
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}

let c1 = new Current_Account(102, "Priyanka Gandhi", 50000)

console.log(c1)
c1.get_Address()


console.log(c1.get_Bal())