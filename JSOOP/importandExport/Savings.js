class Savings_Account extends Account {

    constructor(id, name, amount) {
        super();
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Amount = amount;
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}
let s1 = new Savings_Account(101, "Rahul Gandhi", 5000)

console.log(s1)


s1.get_Address()

console.log(s1.get_Bal())
