class NumberConversionService {
    constructor() {
    }

    decimalListToBinary(listOfDecimalNumbers){
        var listAsBinary = listOfDecimalNumbers.map(element => {
            return element.toBinary().toString();
        });

        return listAsBinary.join(".");
    }
}

module.exports = NumberConversionService;