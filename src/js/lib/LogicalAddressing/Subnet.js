class Subnet {
    constructor(iPAddress, subnetMask) {
        this.iPAddress = iPAddress;
        this.subnetMask = subnetMask; 
    }

    get subnetId(){
        return this.calculateBitWiseAnd(this.iPAddress.toBinary(), this.subnetMask.toBinary());
    }

    get subnetBits(){
        return 32 - this.iPAddress.classHostBitCount
    }

    get subnetCount(){
        return Math.pow(2, this.subnetBits);
    }

    get hostBits(){
        return 
    }

    calculateBitWiseAnd(bitGroupOne, bitGroupTwo)
    {
        var bitString = "";

        bitGroupOne.forEach(groupOneElement => {
            bitGroupTwo.forEach(groupTwoElement => {
                if(groupOneElement == 1 && groupTwoElement == 1)
                {
                    bitString = `${bitString}1`;
                }
                else{
                    bitString = `${bitString}0`;
                }
            });
        });

        return bitString;
    }
}

module.exports = Subnet;