/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

/**
 * Class that checks whether a word is contains only digit and is ordinal.
 */
class Cardinal extends Cleaner {
  /**
   * Create Cardinal Object.
   * @param {string} text - word to be processed.
   */
  constructor () {
    super();
    this.text = '';
  }

  /**
   * Sets the text property to _str.
   * @param {string} _str - word given as input.
   */
  setCardinal (_str) {
    if (_str === undefined) {
      return false;
    }
    this.text = _str;
    return true;
  }

  /**
   * Returns the text value.
   */
  getCardinal () {
    return this.text;
  }

  /**
   * Checks if _str is a valid cardinal.
   * @param {string} _str - word given as input.
   */
  isValidCardinal (_str) {
    let a = this.setCardinal(_str);

    let i;
    for (i = 0; i < _str.length; i++) {
      if (isNaN(parseInt(_str.substr(i, 1)))) {
        return false;
      }
    }
    return true && a;
  }

  /**
   * Converts the given word to equivalent cardinal, if word is valid.
   * @param {string} _str - word to be processed.
   * @param {number} pos - position of the word in the text. 
   */
  convertCardinal (_str, pos) {
    // console.log('cardinal');
    if (_str === undefined) {
      return;
    }
    let temp = this.clean(_str);
    _str = temp[1];
    let cardinal = numberToWordObj.convert(_str);
    replaceObj.doReplace(cardinal, pos);
  }
}

module.exports = Cardinal;
