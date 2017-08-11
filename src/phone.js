const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class Phone {
    constructor() {
        this.text = '';
        this.phoneFormat = /(\+){0,1}\d{0,2}(-){0,1}\d{10}/g;
    }

    getPhone() {
        return this.text;
    }
    setPhone(_str) {
        if (_str === undefined) {
            return false;
        }
        this.text = _str;
        return true;
    }

    isValidPhone(_str) {
        let a = this.setPhone(_str);
        let b = _str.match(this.phoneFormat);
        if (a === false || b === null) {
            return false;
        }
        return true;
    }

    convertPhone(_str) {
        if (!this.isValidPhone(_str)) {
            return _str;
        }
        let i, j, k, finalStr = '';
        if (this.text.charAt(0) === '+') {
            finalStr = '+';
        }
        for (i = 0; i < this.text.length; i++) {
            console.log(this.text.substr(i, 1));
            if (!isNaN(parseInt(this.text.substr(i, 1)))) {
                finalStr += numberToWordObj.convert(this.text.substr(i, 1)) + ' ';
            }
        }
        replaceObj.show(finalStr.trim());
    }
}

// let obj = new Phone();
// console.log(obj.isValidPhone('+91-9474851429'));
// obj.convertPhone('+91-9474851429');