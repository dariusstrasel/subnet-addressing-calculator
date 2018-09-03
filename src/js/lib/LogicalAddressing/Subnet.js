class Subnet {
    constructor(iPAddress, subnetMask) {
        this.iPAddress = iPAddress;
        this.subnetMask = subnetMask; 
    }

    get subnetId(){
        return this.calculateBitWiseAnd(this.iPAddress.toBinary(), this.subnetMask.toBinary()).toDecimal();
    }

    get subnetBits(){
        var subnetBitCount = this.subnetMask.prefixLengthNotation - this.networkBits;
        return subnetBitCount > 0 ? subnetBitCount : 0;
    }

    get subnetCount(){
        return Math.pow(2, this.subnetBits);
    }

    get hostBits(){
        var hostBitFormula = 32 - this.networkBits - this.subnetBits;
        return hostBitFormula > 0 ? hostBitFormula : 0;
    }

    get networkBits(){
        return 32 - this.iPAddress.classHostBitCount
    }

    calculateBitWiseAnd(bitGroupOne, bitGroupTwo)
    {
        var bitString = "";

        bitGroupOne = bitGroupOne.split(".").join("").split("");
        bitGroupTwo = bitGroupTwo.split(".").join("").split("");

        for (let index = 0; index < bitGroupOne.length; index++) {
            const groupOneElement = bitGroupOne[index];
            for (let indexerTwo = 0; indexerTwo < bitGroupOne.length; indexerTwo++) {
                const groupTwoElement = bitGroupTwo[index];

                if(groupOneElement == 1 && groupTwoElement == 1)
                {
                    bitString = `${bitString}1`;
                }
                else{
                    bitString = `${bitString}0`;
                }
            }
        }

        return bitString;
    }
}

module.exports = Subnet;