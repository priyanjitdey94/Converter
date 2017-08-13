/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const cDate = require('./date.js');
const cTime = require('./time.js');
const DecimalOrFraction = require('./decimalOrFraction.js');
const Phone = require('./phone.js');
const Cleaner = require('./cleaner.js');

const cDateObj = new cDate();
const cTimeObj = new cTime();
const decimalOrFractionObj = new DecimalOrFraction();
const phoneObj = new Phone();

/**
 * Class that checks whether a number contains any special character
 */
class SpecialMiddle extends Cleaner {
  /**
   * @param {string} text - string to be tested.
   */
  constructor () {
    super();
    this.text = '';
    this.format = /^\d{1,2}[\/|\.|\-]\d{1,2}[\/|\.|\-]\d{2,4}$|^\d+(\.)\d+$|^\d+(\/)\d+$|^\d{1,2}[\:]\d{1,2}([\:]\d{1,2}){0,1}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){0,1}$|^\d{10}$|^\+\d{1,2}\-\d{10}$|^\d{1,2}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){1}$/g;
  }

  /**
   * Returns the text value.
   */
  getText () {
    return this.text;
  }

  /**
   * Sets the text value.
   * @param {string} _str - string set to text. 
   */
  setText (_str) {
    if (_str === undefined) {
      return false;
    }
    this.text = _str;
    return true;
  }

  /**
   * Checks if string is valid
   * @param {string} _str - string to be tested
   */
  isValidSpecialMiddle (_str) {
    let a = this.setText(_str);
    let b = _str.match(this.format);
    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  /**
   * Chooses proper according to the given word
   * @param {string} word - string to tested.
   * @param {*} pos - position in original sting.
   */
  chooseBranch (word, pos) {
    // console.log('specialMiddle');
    if (word === undefined) {
      return false;
    }

    let temp = this.clean(word);
    temp[1] = temp[1].trim();
    // console.log(temp[1]);
    if (decimalOrFractionObj.isValidDecimalOrFraction(temp[1])) {
      if (decimalOrFractionObj.isDecimal(temp[1])) {
        decimalOrFractionObj.convertToDecimal(word, pos);
      } else if (decimalOrFractionObj.isFraction(temp[1])) {
        decimalOrFractionObj.convertToFraction(word, pos);
      }
    } else if (cTimeObj.isValidTime(temp[1])) {
      cTimeObj.convertTime(word, pos);
    } else if (cDateObj.isValidDate(temp[1])) {
      cDateObj.convertDate(word, pos);
    } else if (phoneObj.isValidPhone(temp[1])) {
      phoneObj.convertPhone(word, pos);
    }
  }
}

module.exports = SpecialMiddle;
