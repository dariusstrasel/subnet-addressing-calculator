const INumber = require("./INumber");
const Binary = require("./Binary");

class Decimal extends INumber {
    constructor(number) {
        super(number);
    }

    toDecimal(){
        return this.number;
    }

    toString(){
        return this.number;
    }

    toNumber(){
        return parseInt(this.number);
    }

    toBinary(){
        return new Binary(this.calculateBinaryString());
    }

    toHexadecimal(){
        throw Error("Not implemented.");
    };

    calculateBinaryString()
    {
        var quotient = this.number;
        var remainder;
        var binaryString = "";
        var arrayOfBinaryIntegers = [];
    
        while (quotient !== 0) {
            remainder = quotient % 2;
            quotient = Math.floor(quotient / 2);
            
            arrayOfBinaryIntegers.push(remainder);
            binaryString = `${binaryString}${remainder}`;
        }
    
        return this.formatAs8BitBinaryString(binaryString.split("").reverse().join(""));
    }

    formatAs8BitBinaryString(binaryString)
    {
        var result = binaryString;
        var padding = 8 - binaryString.length;

        if (padding > 0){
            result = `${"0".repeat(padding)}${binaryString}`
        }

        return result;
    }
}

module.exports = Decimal;