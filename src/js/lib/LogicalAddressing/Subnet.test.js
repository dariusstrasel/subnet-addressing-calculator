const Subnet = require("./Subnet");
const IpAddress = require("./IpAddress");
const SubnetMask = require("./SubnetMask");

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

test('hostBits given IpAddress([172, 16, 0, 1]) and SubnetMask([255, 255, 0, 0])  returns 0', () => {
    var iPAddress = new IpAddress([172, 16, 0, 1]);
    var subnetMask = new SubnetMask([255, 255, 0, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = 16;

    var actualResult = subject.hostBits;

    expect(actualResult).toEqual(expectedResult);
});

// TODO: subnetId
test('subnetId given IpAddress([192, 168, 0, 1]) and SubnetMask([255, 255, 255, 0]) calculates 192.168.0.0', () => {
    var iPAddress = new IpAddress([192, 168, 0, 1]);
    var subnetMask = new SubnetMask([255, 255, 255, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = new IpAddress([192, 168, 0, 0]);

    var actualResult = subject.subnetId;

    expect(actualResult).toEqual(expectedResult);
});

test('subnetBits given IpAddress([192, 168, 0, 1]) and SubnetMask([255, 255, 255, 0])  returns 0', () => {
    var iPAddress = new IpAddress([192, 168, 0, 1]);
    var subnetMask = new SubnetMask([255, 255, 255, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = 0;

    var actualResult = subject.subnetBits;

    expect(actualResult).toEqual(expectedResult);
});

test('subnetBits given IpAddress([172, 16, 0, 1]) and SubnetMask([255, 255, 0, 0])  returns 0', () => {
    var iPAddress = new IpAddress([10, 0, 0, 1]);
    var subnetMask = new SubnetMask([255, 255, 128, 0]);
    
    var subject = new Subnet(iPAddress, subnetMask);
    var expectedResult = 9;

    var actualResult = subject.subnetBits;

    expect(actualResult).toEqual(expectedResult);
});