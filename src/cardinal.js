const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class Cardinal {
    constructor() {
        this.text = '';
    }

    setCardinal(_str) {
        if (_str === undefined) {
            return false;
        }
        this.text = _str;
        return true;
    }
    getCardinal() {
        return this.text;
    }

    isValidCardinal(_str) {
        let a = this.setCardinal(_str);

        let i, j;
        for (i = 0; i < _str.length; i++) {
            if (isNaN(parseInt(_str.substr(i, 1)))) {
                return false;
            }
        }
        return true && a;
    }

    convertCardinal(_str) {
        if (!this.isValidCardinal(_str)) {
            return _str;
        }
        let cardinal = numberToWordObj.convert(_str);
        replaceObj.show(cardinal);
    }
}

// let obj = new Cardinal();
// console.log(obj.isValidCardinal('232'));
// obj.convertCardinal('2424');