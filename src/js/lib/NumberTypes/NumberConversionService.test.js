const NumberConversionService = require("../NumberTypes/NumberConversionService");
const Decimal = require("./Decimal");

let subject = {};
beforeEach(() => {subject = new NumberConversionService();});

test('decimalListToBinary given [10, 0, 0, 1] returns "00001010.00000000.00000000.00000001"', () => {
    var expectedResult = "00001010.00000000.00000000.00000001";
    var actualResult = subject.decimalListToBinary([new Decimal(10), new Decimal(0), new Decimal(0), new Decimal(1)]);
    
    expect(actualResult).toBe(expectedResult);
});