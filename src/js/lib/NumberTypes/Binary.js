const INumber = require("./INumber");

class Binary extends INumber {
    constructor(number) {
        super(number);
    }

    toString(){
        return `${this.number}`;
    }

    toDecimal(){
       throw Error("Not implemented.")
    }
}

module.exports = Binary;