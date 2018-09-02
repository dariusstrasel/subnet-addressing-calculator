const NumberConversionService = require('../NumberTypes/NumberConversionService');
const NumberFactory = require("../NumberTypes/NumberFactory");

class IpAddress {
    constructor(fourOctetsList) {
        this.numberFactory = new NumberFactory();
        this.numberConversionService = new NumberConversionService();

        this.octetOne = this.numberFactory.create(fourOctetsList[0], "decimal");
        this.octetTwo = this.numberFactory.create(fourOctetsList[1], "decimal");
        this.octetThree = this.numberFactory.create(fourOctetsList[2], "decimal");
        this.octetFour = this.numberFactory.create(fourOctetsList[3], "decimal");
    }

    get addressClassType() {
        return this.calculateAddressClassType();
    }

    toString() {
        return `${this.octetOne.toString()}.${this.octetTwo.toString()}.${this.octetThree.toString()}.${this.octetFour.toString()}`;
    }

    toListOfDecimalOctets() {
        return [this.octetOne, this.octetTwo, this.octetThree, this.octetFour];
    }

    toBinary() {
        return this.numberConversionService.decimalListToBinary(this.toListOfDecimalOctets());
    }

    calculateAddressClassType() {
        var classType = "";
        
        if(this.octetOne >= 0 && this.octetOne <= 127)
            classType = "A";
        if(this.octetOne >= 128 && this.octetOne <= 191)
            classType = "B";
        if(this.octetOne >= 192 && this.octetOne <= 223)
            classType = "C";
        
        return classType;
    }
}

module.exports = IpAddress;