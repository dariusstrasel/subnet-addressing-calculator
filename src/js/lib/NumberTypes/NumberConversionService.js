const INumberConversionService = require('./INumberConversionService');

class NumberConversionService extends INumberConversionService {
    constructor() {
        super();
    }

    decimalListToBinary(listOfDecimalNumbers){
        var listAsBinary = listOfDecimalNumbers.map(element => {
            return element.toBinary().toString();
        });

        return listAsBinary.join(".");
    }
}

module.exports = NumberConversionService;