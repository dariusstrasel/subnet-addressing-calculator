const IpAddress = require("./IpAddress");

class SubnetMask extends IpAddress {
    constructor(fourOctetsList) {
        super(fourOctetsList);
    }
}

module.exports = SubnetMask;