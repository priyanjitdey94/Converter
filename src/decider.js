const Cardinal = require('./cardinal.js');
const SpecialMiddle = require('./specialMiddle.js');
const SuffixPrefix = require('./suffixPrefix.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const cardinalObj = new Cardinal();
const specialMiddleObj = new SpecialMiddle();
const suffixPrefixObj = new SuffixPrefix();
const replaceObj = new Replace();

class Decider extends Cleaner {
  constructor () {
    super();
    this.text = '';
  }

  decide (word, pos) {
    // console.log('Decider');
    if (word === undefined) {
      return false;
    }
    this.text = word;

    let temp = this.clean(this.text);
    // let arr=this.fetchNumber(temp[0]);

    // console.log(temp[1]);
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
