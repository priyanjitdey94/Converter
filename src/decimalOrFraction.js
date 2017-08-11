const Fraction = require('./fraction.js');
const Decimal = require('./decimal.js');

const fractionObj = new Fraction();
const decimalObj = new Decimal();

class DecimalOrFraction {
    constructor() {
        this.text = '';
        this.format = /^\d+[.\/]\d+$/g;
        this.decimalFormat = /^\d+[.]\d+$/g;
        this.fractionFormat = /^\d+[\/]\d+$/g;
    }

    getText() {
        return this.text;
    }
    setText(_str) {
        if (_str === undefined) {
            console.log('Text cannot be undefined.');
            return false;
        }
    }

    isDecimalOrFraction(_str) {
        this.setText(_str);
        let a = this.setText(_str);
        let b = this.text.match(this.format);
        if (b === null || b.length > 1 || a === false) {
            return false;
        }
        return true;
    }

    isDecimal(_str) {
        this.setText(_str);
        let b = this.text.match(this.decimalFormat);
        if (b !== null && b.length === 1) {
            return true;
        }
        return false;
    }
    isFraction(_str) {
        this.setText(_str);
        let b = this.text.match(this.fractionFormat);
        if (b !== null && b.length === 1) {
            return true;
        }
        return false;
    }

    convertToDecimal(_str) {
        let convertedText = decimalObj.convertDecimal(_str);
    }
    convertToFraction(_str) {
        let convertedText = fractionObj.convertFraction(_str);
    }
}