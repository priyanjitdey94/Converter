/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

/**
 * Class that converts phone number to string
 */
class Phone extends Cleaner {
  /**
   * @param {string} text - string to be converted.
   */
  constructor () {
    super();
    this.text = '';
    this.phoneFormat = /^\d{10}$|^\+\d{1,2}\-\d{10}$/g;
  }

  /**
   * Returns the text property
   */
  getPhone () {
    return this.text;
  }

  /**
   * Sets _str to text
   * @param {string} _str - _str to be tested 
   */
  setPhone (_str) {
    if (_str === undefined) {
      return false;
    }
    this.text = _str;
    return true;
  }

  /**
   * Checks if a phone number is valid
   * @param {string} _str - string to be tested.
   */
  isValidPhone (_str) {
    let a = this.setPhone(_str);
    let b = _str.match(this.phoneFormat);
    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  /**
   * Converts phone number to words
   * @param {string} _str - phone number to be converted.
   * @param {number} pos - position in string
   */
  convertPhone (_str, pos) {
    // console.log('phone');
    if (_str === undefined) {
      return _str;
    }
    let temp = this.clean(_str);
    _str = temp[1];

    let i, j, k, finalStr = '';
    for (i = 0; i < _str.length; i++) {
      // console.log(_str.substr(i, 1));
      if (!isNaN(parseInt(_str.substr(i, 1)))) {
        finalStr += numberToWordObj.convert(_str.substr(i, 1)) + ' ';
      }
    }
    replaceObj.doReplace(temp[0] + finalStr.trim() + temp[2], pos);
  }
}

module.exports = Phone;
