class P {
    constructor() {
        console.log("P - class Constructor")
    }
}
class C extends P {
    constructor() {
        super(); //to initilize parent class constructor values
        console.log("C - class Constructor")
    }
}
new C();