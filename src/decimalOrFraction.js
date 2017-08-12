const Fraction = require('./fraction.js');
const Decimal = require('./decimal.js');

const fractionObj = new Fraction();
const decimalObj = new Decimal();

class DecimalOrFraction {
    constructor() {
        this.text = '';
        this.format = /^\d+(\.)\d+$|^\d+(\/)\d+$/g;
        this.decimalFormat = /^\d+(\.)\d+$/g;
        this.fractionFormat = /^\d+(\/)\d+$/g;
    }

    getText() {
        return this.text;
    }
    setText(_str) {
        if (_str === undefined) {
            // console.log('Text cannot be undefined.');
            return false;
        }
        this.text=_str;
        return true;
    }

    isValidDecimalOrFraction(_str) {
        this.setText(_str);
        let a = this.setText(_str);
        let b = this.text.match(this.format);
        if (b === null || a === false) {
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

    convertToDecimal(word,pos) {
        // console.log('DecimalOrFraction');
        let convertedText = decimalObj.convertDecimal(word,pos);
    }
    convertToFraction(word,pos) {
        // console.log('DecimalOrFraction');
        let convertedText = fractionObj.convertFraction(word,pos);
    }
}

module.exports=DecimalOrFraction;