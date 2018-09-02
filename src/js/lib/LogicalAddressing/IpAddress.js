const NumberConversionService = require('../NumberTypes/NumberConversionService');
const Decimal = require('../NumberTypes/Decimal');

class IpAddress {
    constructor(octetOne, octetTwo, octetThree, octetFour) {
        this.octetOne = new Decimal(octetOne);
        this.octetTwo = new Decimal(octetTwo);
        this.octetThree = new Decimal(octetThree);
        this.octetFour = new Decimal(octetFour);
        this.numberConversionService = new NumberConversionService();
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