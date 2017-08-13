const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWord = new NumberToWord();
const replaceObj = new Replace();

class Decimal extends Cleaner {
  constructor () {
    super();
    this.decimal = '';
    this.decimalFormat = /^\d+(\.)\d+$/g;
  }

  setDecimal (str) {
    if (str === undefined) {
      // console.log('Decimal cannot be undefined');
      return false;
    }
    this.decimal = str;
    return true;
  }
  getDecimal () {
    return this.decimal;
  }

  isDecimal (str) {
    let a = this.setDecimal(str);
    let b = this.decimal.match(this.decimalFormat);
    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  convertDecimal (str, pos) {
    // console.log('decimal');
    if (str === undefined) {
      return;
    }
    let temp = this.clean(str);
    str = temp[1];

    let decimalAr = str.split('.');

    let beforePoint = numberToWord.convert(decimalAr[0]);
    let afterPoint = '';

    let i;
    for (i = 0; i < decimalAr[1].length; i++) {
      afterPoint += (numberToWord.convert(decimalAr[1].charAt(i)) + ' ');
    }

    replaceObj.doReplace(temp[0] + beforePoint + '.' + afterPoint.trim() + temp[2], pos);
  }
}

module.exports = Decimal;
// const obj = new Decimal();
// console.log(obj.convertDecimal('33.44'));
