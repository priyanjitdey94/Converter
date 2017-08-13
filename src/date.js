const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');
const Cleaner = require('./cleaner.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class cDate extends Cleaner {
  constructor () {
    super();
    this.text = '';
    this.dd = '';
    this.mm = '';
    this.yy = '';
    this.dateFormat = /^\d{1,2}[\/|\.|\-]\d{1,2}[\/|\.|\-]\d{2,4}$/g;
    this.months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  setDate (_str) {
    if (_str === undefined) {
      // console.log('Date cannot be undefined');
      return false;
    }
    this.text = _str;
    return true;
  }
  getDate () {
    return this.text;
  }

  belong (c) {
    if (c === '.' || c === '/' || c === '-') {
      return true;
    }
    return false;
  }

  isValidDate (_str) {
    let a = this.setDate(_str.trim());
    let b = _str.match(this.dateFormat);

    if (a === false || b === null) {
      return false;
    }
    return true;
  }

  convertDate (_str, pos) {
    // console.log('Date');
    if (_str === undefined) {
      return;
    }
    let word = _str;
    let temp = this.clean(_str);
    _str = temp[1];
    this.setDate(_str);
    // console.log(_str);
    let breakPoints = [];
    let i,
      k;
    for (i = 0; i < this.text.length; i++) {
      if (this.belong(this.text.charAt(i))) {
        breakPoints.push(i);
      }
    }
    let checkDD = this.text.substr(0, breakPoints[0]);
    let checkMM = this.text.substr(breakPoints[0] + 1, breakPoints[1] - breakPoints[0] - 1);
    let checkYY = this.text.substr(breakPoints[1] + 1, this.text.length - 1 - breakPoints[1]);

    let checkD = parseInt(checkDD);
    let checkM = parseInt(checkMM);
    let checkY = parseInt(checkYY);

    if (isNaN(checkD) || isNaN(checkM) || isNaN(checkY)) {
      replaceObj.doReplace(word, pos);
      return;
    } else if (checkM < 1 || checkM > 12 || checkD < 1 || checkD > 31) {
      replaceObj.doReplace(word, pos);
      return;
    } else if (checkM === 4 || checkM === 6 || checkM === 9 || checkM === 11) {
      if (checkD > 30) {
        replaceObj.doReplace(word, pos);
        return;
      }
    } else if (checkM === 2 && checkY % 4 !== 0) {
      if (checkD > 28) {
        replaceObj.doReplace(word, pos);
        return;
      }
    } else if (checkM === 2 && checkY % 4 === 0) {
      if (checkD > 29) {
        replaceObj.doReplace(word, pos);
        return;
      }
    }

    if (checkYY.length === 2) {
      if (checkY <= 50) {
        checkYY = '20' + checkYY;
      } else {
        checkYY = '19' + checkYY;
      }
    } else if (checkYY.length === 3) {
      checkYY = '2' + checkYY;
    }

    let d = numberToWordObj.convert(checkDD);
    let m = numberToWordObj.convert(checkMM);
    let y = numberToWordObj.convert(checkYY);

    let daySplit = d.split(' ');
    k = daySplit.pop();
    daySplit.push(numberToWordObj.findEquivalentOrdinal(k));
    d = '';

    for (i = 0; i < daySplit.length; i++) {
      d += (daySplit[i] + ' ');
    }
    m = this.months[checkM] + ' ';
    replaceObj.doReplace(temp[0] + d + m + y + [temp[2]], pos);
  }
}

module.exports = cDate;
// let obj = new cDate();
// console.log(obj.isValidDate('12/12/12'));
// obj.convertDate('12/12-22');
