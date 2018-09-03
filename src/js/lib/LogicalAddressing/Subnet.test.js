const Subnet = require("./Subnet");
const IpAddress = require("./IpAddress");
test('Subnet given subnet mask and IpAddress calculates subnet Id', () => {
    var iPAddress = new IpAddress([192, 168, 0, 1]);
    var subnetMask = new IpAddress([255, 255, 255, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = new IpAddress([192, 168, 0, 0]);

    var actualResult = subject.subnetId;

    expect(actualResult).toEqual(expectedResult);
});

// TODO: subnetCount
test('Subnet given subnet mask and IpAddress calculates subnet Id', () => {
    var iPAddress = new IpAddress([192, 168, 0, 1]);
    var subnetMask = new IpAddress([255, 255, 255, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = new IpAddress([192, 168, 0, 0]);

    var actualResult = subject.subnetId;

    expect(actualResult).toEqual(expectedResult);
});

// TODO: calculateBitWiseAnd
test('Subnet given subnet mask and IpAddress calculates subnet Id', () => {
    var iPAddress = new IpAddress([192, 168, 0, 1]);
    var subnetMask = new IpAddress([255, 255, 255, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = new IpAddress([192, 168, 0, 0]);

    var actualResult = subject.subnetId;

    expect(actualResult).toEqual(expectedResult);
});

// TODO: hostBits
test('Subnet given subnet mask and IpAddress calculates subnet Id', () => {
    var iPAddress = new IpAddress([192, 168, 0, 1]);
    var subnetMask = new IpAddress([255, 255, 255, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = new IpAddress([192, 168, 0, 0]);

    var actualResult = subject.subnetId;

    expect(actualResult).toEqual(expectedResult);
});

// TODO: subnetId
test('Subnet given subnet mask and IpAddress calculates subnet Id', () => {
    var iPAddress = new IpAddress([192, 168, 0, 1]);
    var subnetMask = new IpAddress([255, 255, 255, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = new IpAddress([192, 168, 0, 0]);

    var actualResult = subject.subnetId;

    expect(actualResult).toEqual(expectedResult);
});