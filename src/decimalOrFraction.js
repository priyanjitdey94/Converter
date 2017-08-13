/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const Fraction = require('./fraction.js');
const Decimal = require('./decimal.js');
const Cleaner = require('./cleaner.js');

const fractionObj = new Fraction();
const decimalObj = new Decimal();

/**
 * Class to check whether a string is decimal/fraction.
 */
class DecimalOrFraction extends Cleaner {
  /**
   * @param {string} text - input string.
   * @param {regex} format - regex to check whether given string is decimal/fraction.
   * @param {regex} decimalFormat - regex to check if a string is decimal.
   * @param {regex} fractionFormat - regex to check if a string is fraction. 
   */
  constructor () {
    super();
    this.text = '';
    this.format = /^\d+(\.)\d+$|^\d+(\/)\d+$/g;
    this.decimalFormat = /^\d+(\.)\d+$/g;
    this.fractionFormat = /^\d+(\/)\d+$/g;
  }

  /**
   * Returns the text value
   */
  getText () {
    return this.text;
  }

  /**
   * Sets the text value
   * @param {string} _str - input string 
   */
  setText (_str) {
    if (_str === undefined) {
      // console.log('Text cannot be undefined.');
      return false;
    }
    this.text = _str;
    return true;
  }

  /**
   * Checks if a string is a decimal/fraction
   * @param {string} _str - string to be tested
   */
  isValidDecimalOrFraction (_str) {
    this.setText(_str);
    let a = this.setText(_str);
    let b = this.text.match(this.format);
    if (b === null || a === false) {
      return false;
    }
    return true;
  }

  /**
   * Checks if a string is decimal.
   * @param {string} _str - string to be tested.
   */
  isDecimal (_str) {
    this.setText(_str);
    let b = this.text.match(this.decimalFormat);
    if (b !== null && b.length === 1) {
      return true;
    }
    return false;
  }

  /**
   * Checks if a string is a fraction
   * @param {string} _str - string to be tested 
   */
  isFraction (_str) {
    this.setText(_str);
    let b = this.text.match(this.fractionFormat);
    if (b !== null && b.length === 1) {
      return true;
    }
    return false;
  }

  /**
   * Converts string to decimal
   * @param {string} word - string to be converted
   * @param {number} pos - position in string
   */
  convertToDecimal (word, pos) {
    // console.log('DecimalOrFraction');
    let convertedText = decimalObj.convertDecimal(word, pos);
  }

  /**
   * Converts string to fraction
   * @param {string} word - string to be converted
   * @param {number} pos - position in string
   */
  convertToFraction (word, pos) {
    // console.log('DecimalOrFraction');
    let convertedText = fractionObj.convertFraction(word, pos);
  }
}

module.exports = DecimalOrFraction;
