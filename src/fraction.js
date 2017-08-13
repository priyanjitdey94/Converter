const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWord = new NumberToWord();
const replaceObj = new Replace();

class Fraction extends Cleaner {
  constructor () {
    super();
    this.fraction = '';
    this.fractionFormat = /^\d+(\/)\d+$/g;
  }

  setFraction (str) {
    if (str === undefined) {
      return false;
    }
    this.fraction = str.trim();
    return true;
  }
  getFraction () {
    return this.fraction;
  }

  isFraction (str) {
    let a = this.setFraction(str);
    let b = str.match(this.fractionFormat);
    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  convertFraction (str, pos) {
    // console.log('fraction');
    if (str === undefined) {
      return;
    }

    let temp = this.clean(str);
    str = temp[1];
    let parts = str.split('/');

    let numerator = numberToWord.convert(parts[0]);
    let denominator = numberToWord.convert(parts[1]);

    let finalStr = numerator + '/' + denominator;
    replaceObj.doReplace(temp[0] + finalStr.trim() + temp[2], pos);
  }
}

module.exports = Fraction;
// const obj=new Fraction();
// console.log(obj.isFraction(23/45));
// console.log(obj.convertFraction(23/45));
