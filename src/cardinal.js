const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class Cardinal extends Cleaner {
  constructor () {
    super();
    this.text = '';
  }

  setCardinal (_str) {
    if (_str === undefined) {
      return false;
    }
    this.text = _str;
    return true;
  }
  getCardinal () {
    return this.text;
  }

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
// let obj = new Cardinal();
// console.log(obj.isValidCardinal('232'));
// obj.convertCardinal('2424');
