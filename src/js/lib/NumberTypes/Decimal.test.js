const Decimal = require("./Decimal");
const Binary = require("./Binary");

test('toBinary converts 10 to 1010', () => {
    var subject = new Decimal(10);

    var expectedValue = new Binary("00001010");
    expect(subject.toBinary()).toEqual(expectedValue);
});

test('toBinary converts 128 to 10000000', () => {
    var subject = new Decimal(128);

    var expectedValue = new Binary("10000000");
    expect(subject.toBinary()).toEqual(expectedValue);
});