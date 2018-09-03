const IpAddress = require("./IpAddress");

class SubnetMask extends IpAddress {
    constructor(fourOctetsList) {
        super(fourOctetsList);
    }

    get prefixLengthNotation(){
        return this.toBinary().split("1").length -1;
    }
}

module.exports = SubnetMask;