/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWord = new NumberToWord();
const replaceObj = new Replace();

/**
 * Class that converts decimal to string.
 */
class Decimal extends Cleaner {
  /**
   * @param {string} decimal - input decimal number
   * @param {regex} decimalFormat - regex to match a valid decimal
   */
  constructor () {
    super();
    this.decimal = '';
    this.decimalFormat = /^\d+(\.)\d+$/g;
  }

  /**
   * Sets str to decimal property
   * @param {string} str - input string.
   */
  setDecimal (str) {
    if (str === undefined) {
      // console.log('Decimal cannot be undefined');
      return false;
    }
    this.decimal = str;
    return true;
  }

  /**
   * Return the decimal property.
   */
  getDecimal () {
    return this.decimal;
  }

  /**
   * Checks whether the given string is decimal
   * @param {string} str - string to be checked 
   */
  isDecimal (str) {
    let a = this.setDecimal(str);
    let b = this.decimal.match(this.decimalFormat);
    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  /**
   * Converts string to decimal number.
   * @param {string} str - string to be converted. 
   * @param {number} pos - position in string
   */
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
