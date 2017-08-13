/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWord = new NumberToWord();
const replaceObj = new Replace();

/**
 * Class to convert fraction to word.
 */
class Fraction extends Cleaner {
  /**
   * @param {string} fraction - input fraction.
   * @param {regex} fractionFormat - regex to check if a fraction is valid.
   */
  constructor () {
    super();
    this.fraction = '';
    this.fractionFormat = /^\d+(\/)\d+$/g;
  }

  /**
   * Sets str to the fraction property
   * @param {string} str - input string
   */
  setFraction (str) {
    if (str === undefined) {
      return false;
    }
    this.fraction = str.trim();
    return true;
  }

  /**
   * Returns the fraction property
   */
  getFraction () {
    return this.fraction;
  }

  /**
   * Checks if a string is fraction.
   * @param {string} str - string to be tested.
   */
  isFraction (str) {
    let a = this.setFraction(str);
    let b = str.match(this.fractionFormat);
    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  /**
   * Converts a fraction to word
   * @param {string} str - word to be converted
   * @param {number} pos - position is string
   */
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
