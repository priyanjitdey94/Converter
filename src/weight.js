/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const Replace = require('./replace.js');
const NumberToWord = require('./numberToWord.js');
const Cleaner = require('./cleaner.js');

const replaceObj = new Replace();
const numberToWordObj = new NumberToWord();

/**
 * Class to convert weight to string format
 */
class Weight extends Cleaner {
  /**
   * @param {string} text - weight to be converted
   */
  constructor () {
    super();
    this.text = '';
    this.format = /^\d+((\.){1}\d+){0,1}(Kg|kg|Kgs|kgs|g)$/g;
  }

  /**
   * Sets the value of text
   * @param {string} str - value to be set
   */
  setText (str) {
    if (str === undefined) {
      return false;
    }
    this.text = str;
    return true;
  }

  /**
   * Returns the text value
   */
  getText () {
    return this.text;
  }

  /**
   * Checks if str is a valid weight.
   * @param {string} str - str to be tested.
   */
  isValidWeight (str) {
    let a = this.setText(str);
    let b = str.match(this.format);

    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  /**
   * Fetch number from a string
   * @param {string} word - string from which number is to be fetched.
   */
  fetchNumber (word) {
    let j = word.length - 1;
    while (j >= 0 && isNaN(parseInt(word.substr(j, 1)))) {
      j--;
    }
    return word.substr(0, j + 1);
  }

  /**
   * Converts a weight to string.
   * @param {string} word - weight to be converted.
   * @param {number} pos - position in original string.
   */
  convertWeight (word, pos) {
    if (word === undefined) {
      return false;
    }
    let temp = this.clean(word);
    word = temp[1];

    let num = this.fetchNumber(word);
    let numAr = num.split('.');
    let finalNum = [];
    finalNum.push(numberToWordObj.convert(numAr[0].trim()));
    if (numAr.length === 2) {
      let gram = numAr[1];
      while (gram.length < 3) {
        gram += '0';
      }
      finalNum.push(numberToWordObj.convert(gram.trim()));
      replaceObj.doReplace(temp[0] + finalNum[0] + ' kg ' + finalNum[1] + ' grams' + temp[2], pos);
    } else {
      replaceObj.doReplace(temp[0] + finalNum[0] + ' kgs' + temp[2]);
    }
  }
}

module.exports = Weight;
