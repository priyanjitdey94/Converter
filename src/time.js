/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

/**
 * Class that converts time to string
 */
class cTime extends Cleaner {
  /**
   * @param {string} text - string to be changed.
   */
  constructor () {
    super();
    this.text = '';
    this.timeFormat = /^\d{1,2}[\:]\d{1,2}([\:]\d{1,2}){0,1}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){0,1}$|^\d{1,2}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){1}$/g;
  }

  /**
   * Sets text to string
   * @param {string} _str 
   */
  setTime (_str) {
    if (_str === undefined) {
      // console.log('Time cannot be undefined');
      return false;
    }
    this.text = _str;
    return true;
  }

  /**
   * Returns the text value.
   */
  getTime () {
    return this.text;
  }

  /**
   * Checks if a string is valis date
   * @param {string} _str - string to be checked
   */
  isValidTime (_str) {
    let a = this.setTime(_str);
    let b = _str.match(this.timeFormat);

    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  /**
   * Fetches number from a string
   * @param {string} str - string to be processed
   */
  fetchNumber (str) {
    let j = str.length - 1;
    let div = [];
    while (isNaN(parseInt(str.substr(j, 1)) && j >= 0)) {
      j--;
    }
    div.push(str.substr(0, j + 1));
    div.push(str.substr(j + 1, str.length - j - 1));

    return div;
  }

  /**
   * Convert time to string format
   * @param {string} word - time string to be converted.
   */
  actualFormatConversion (word) {
    let k = word.split(':');
    let h = numberToWordObj.convert(k[0]);
    let m = -1;
    if (k.length >= 2) {
      m = numberToWordObj.convert(k[1]);
    }
    let s = -1;
    if (k.length >= 3) {
      s = numberToWordObj.convert(k[2]);
    }

    let finalTime = '';
    finalTime += (h === 'one' ? h + ' hour ' : h + ' hours ');
    if (m !== -1) {
      finalTime += (m === 'one' ? m + ' minute' : m + ' minutes');
    }
    if (s !== -1) {
      finalTime += (s === 'one' ? ' ' + s + ' second' : ' ' + s + ' seconds');
    }
    return finalTime;
  }
  convertTime (word, pos) {
    // console.log('cTime');
    if (word === undefined) {
      return;
    }
    let temp = this.clean(word);
    word = temp[1];

    let i, j, k = [];
    if (word[word.length - 1] === 'm' || word[word.length - 1] === 'M') {
      k = this.fetchNumber(word);
      j = this.actualFormatConversion(k[0]);
      // console.log(k);
      replaceObj.doReplace(temp[0] + j + temp[2], pos);
    } else {
      replaceObj.doReplace(temp[0] + this.actualFormatConversion(word) + temp[2], pos);
    }
  }
}

module.exports = cTime;
