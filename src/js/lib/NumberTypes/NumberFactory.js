const Decimal = require("./Decimal");
const Binary = require("./Binary");

class NumberFactory {
    constructor(){ };

    create(javascriptNumber, type){
        switch (type) {
            case "decimal":
                return this.toDecimal(javascriptNumber);

            case "binary":
                return this.toBinary(javascriptNumber);
        
            case "hexadecimal":
                return this.toHexadecimal(javascriptNumber);

            default:
                throw Error("Type was not recognized, or provided.");
        }
    }

    toDecimal(javaScriptNumber){
        return new Decimal(javaScriptNumber);
    }

    toBinary(javaScriptNumber){
        return new Binary(javaScriptNumber);
    }

    toHexadecimal(javaScriptNumber){
        throw Error("Not implemented.");
    }
    
}

module.exports = NumberFactory;