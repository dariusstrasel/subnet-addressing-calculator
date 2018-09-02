const NumberFactory = require('./NumberFactory');
const Decimal = require("./Decimal");
const Binary = require("./Binary");

let subject = {};
beforeEach(() => {subject = new NumberFactory();});

test('create() given no construction type throws error', () => {
    expect(() => {subject.create(10);}).toThrow();
});

test('create("decimal") given any JavaScript number returns Decimal type', () => {
    var actualValue = subject.create(10, "decimal");
    expect(actualValue.constructor).toStrictEqual(Decimal);
});

test('create("binary") given any JavaScript number returns binary type', () => {
    var actualValue = subject.create(10, "binary");
    expect(actualValue.constructor).toStrictEqual(Binary);
});

test('create("hexadecimal") given any JavaScript number throws error', () => {
    expect(() => {subject.create(10, "hexadecimal");}).toThrow();
});