const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class Phone extends Cleaner {
  constructor () {
    super();
    this.text = '';
    this.phoneFormat = /^\d{10}$|^\+\d{1,2}\-\d{10}$/g;
  }

  getPhone () {
    return this.text;
  }
  setPhone (_str) {
    if (_str === undefined) {
      return false;
    }
    this.text = _str;
    return true;
  }

  isValidPhone (_str) {
    let a = this.setPhone(_str);
    let b = _str.match(this.phoneFormat);
    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  convertPhone (_str, pos) {
    // console.log('phone');
    if (_str === undefined) {
      return _str;
    }
    let temp = this.clean(_str);
    _str = temp[1];

    let i, j, k, finalStr = '';
    // if (_str.charAt(0) === '+') {
    //     finalStr = '+';
    // }
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
// let obj = new Phone();
// console.log(obj.isValidPhone('+91-9474851429'));
// obj.convertPhone('+91-9474851429');
