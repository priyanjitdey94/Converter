/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const OrdinalToCardinal = require('./ordinalToCardinal.js');
const cTime = require('./time.js');
const Replace = require('./replace.js');
const Weight = require('./weight.js');
const Cleaner = require('./cleaner.js');

const ordinalToCardinalObj = new OrdinalToCardinal();
const cTimeObj = new cTime();
const replaceObj = new Replace();
const weightObj = new Weight();

/**
 * Class to check if number contains any suffix and prefix
 */
class SuffixPrefix extends Cleaner {
  /**
   * @param {string} text - string to be tested
   */
  constructor () {
    super();
    this.text = '';
    this.suffixPrefixFormat = /^\d+([a-zA-Z]+|%)$|^([a-zA-Z]+.|$)+\d+$|^\d+((\.){1}\d+){0,1}(Kg|kg|Kgs|kgs|g)$/g;
  }

  /**
   * Sets text to _str
   * @param {string} _str - string to be tested
   */
  setText (_str) {
    if (_str === undefined) {
      return false;
    }
    this.text = _str;
    return true;
  }

  /**
   * Return text value
   */
  getText () {
    return this.text;
  }

  /**
   * Checks if _str is valid
   * @param {string} _str - string to be tested
   */
  isValidSuffixPrefix (_str) {
    _str = this.clean(_str)[1];
    if (this.setText(_str) && _str.match(this.suffixPrefixFormat) !== null) {
      return true;
    }
    return false;
  }

  /**
   * Chooses appropiate branch as per the string
   * @param {string} word - string to be tested
   * @param {number} pos - position in original string
   */
  chooseBranch (word, pos) {
    // console.log('suffixPrefix');
    if (!this.isValidSuffixPrefix(word)) {
      return false;
    }

    let temp = this.clean(word);
    // console.log(temp[1]);
    if (ordinalToCardinalObj.isValidOrdinal(temp[1])) {
      ordinalToCardinalObj.convertOrdinal(word, pos);
    } else if (weightObj.isValidWeight(temp[1])) {
      weightObj.convertWeight(word, pos);
    } else {
      replaceObj.doReplace(word, pos);
    }
  }
}

module.exports = SuffixPrefix;
