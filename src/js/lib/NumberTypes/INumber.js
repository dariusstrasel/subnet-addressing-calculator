class INumber {
    constructor(number) {
        this.number = number;
    }

    toString(){
        throw Error("Not implemented.");
    }

    toDecimal(){
        throw Error("Not implemented.");
    };

    toBinary(){
        throw Error("Not implemented.");
    };

    toHexadecimal(){
        throw Error("Not implemented.");
    };
}

module.exports = INumber;