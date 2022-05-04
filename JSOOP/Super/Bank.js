class Account {
    constructor(a, b, c) {
        this.hNo = a;
        this.area = b;
        this.city = c
    }
}
class Savings_Account extends Account {
    constructor(id, name, amount, hno, area, city) {
        super(hno, area, city)
        this.acc_Id = id;
        this.acc_Name = name;
        this.amount = amount;
    }
}


let s1 = new Savings_Account(101, "Rahul Gandhi", 50000, 96, "Marathahalli", "Bangalore")
console.log(s1)