const IpAddress = require("./IpAddress");

test('IpAddress given 1, 2, 3, 4 returns 1.2.3.4', () => {
    var subject = new IpAddress(1, 2, 3, 4);
    expect(subject.toString()).toBe("1.2.3.4");
});

test('IpAddress given 10, 0, 0, 1 returns "10.0.0.1"', () => {
    var subject = new IpAddress(10, 0, 0, 1);
    expect(subject.toString()).toBe("10.0.0.1");
});

test('getNetworkClassFromOctetString converts "10.0.0.1" to "A"', () => {
    var subject = new IpAddress(10, 0, 0, 1);
    expect(subject.addressClassType).toEqual("A");
});

test('getNetworkClassFromOctetString converts "172.16.0.1" to "ClassB"', () => {
    var subject = new IpAddress(172, 16, 0, 1);
    expect(subject.addressClassType).toEqual("B");
});

test('getNetworkClassFromOctetString converts "192.168.0.1" to "ClassC"', () => {
    var subject = new IpAddress(192, 168, 0, 1);
    expect(subject.addressClassType).toEqual("C");
});

test('ToBinary given IpAddress(10, 0, 0, 1) returns "00001010.00000000.00000000.00000001"', () => {
    var subject = new IpAddress(10, 0, 0, 1);
    expect(subject.toBinary()).toBe("00001010.00000000.00000000.00000001");
});