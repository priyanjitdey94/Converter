/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const Cardinal = require('./cardinal.js');
const SpecialMiddle = require('./specialMiddle.js');
const SuffixPrefix = require('./suffixPrefix.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const cardinalObj = new Cardinal();
const specialMiddleObj = new SpecialMiddle();
const suffixPrefixObj = new SuffixPrefix();
const replaceObj = new Replace();

/**
 * Class which decided which branch to choose based on given input
 */
class Decider extends Cleaner {
  /**
   * @param {string} text - Input text
   */
  constructor () {
    super();
    this.text = '';
  }

  /**
   * Decides which branch to choose
   * @param {string} word - word to be converted
   * @param {number} pos -  position in string
   */
  decide (word, pos) {
    // console.log('Decider');
    if (word === undefined) {
      return false;
    }
    this.text = word;

    let temp = this.clean(this.text);

    if (specialMiddleObj.isValidSpecialMiddle(temp[1])) {
      specialMiddleObj.chooseBranch(word, pos);
    } else if (cardinalObj.isValidCardinal(temp[1])) {
      cardinalObj.convertCardinal(word, pos);
    } else if (suffixPrefixObj.isValidSuffixPrefix(temp[1])) {
      suffixPrefixObj.chooseBranch(word, pos);
    } else {
      replaceObj.doReplace(word, pos);
    }
  }
}

module.exports = Decider;
