const Replace = require('./replace.js');
const NumberToWord = require('./numberToWord.js');
const Cleaner = require('./cleaner.js');

const replaceObj = new Replace();
const numberToWordObj = new NumberToWord();

class OrdinalToCardinal extends Cleaner {
    constructor() {
        super();
        this.text = '';
    }

    getText() {
        return this.text;
    }
    setText(_str) {
        if (_str === undefined) {
            return false;
        }
        this.text = _str;
        return true;
    }

    isValidOrdinal(_str) {
        let a = this.setText(_str);
        let i, j, k = true;
        for (i = 0; i < _str.length - 2; i++) {
            if (isNaN(parseInt(_str.substr(i, 1)))) {
                return false;
            }
        }
        j = _str.substr(_str.length - 2, 2);
        if (j === 'rd' || j === 'th' || j === 'st' || j === 'nd') {
            return a;
        } else return false;
    }

    convertOrdinal(word, pos) {
        // console.log('ordinalToCardinal');
        if (word === undefined) {
            return;
        }
        let temp = this.clean(word);
        word = temp[1];

        let i, j, k, finalStr = '';
        let numString = word.substr(0, word.length - 2),
            suffix = word.substr(word.length - 2, 2);

        let convertedNumString = numberToWordObj.convert(numString);
        k = convertedNumString.split(' ');
        j = k.pop();
        k.push(numberToWordObj.findEquivalentOrdinal(j));

        for (i = 0; i < k.length; i++) {
            finalStr += (k[i] + ' ');
        }
        finalStr = finalStr.trim();
        replaceObj.doReplace(temp[0] + finalStr + temp[2], pos);
    }
}

module.exports = OrdinalToCardinal;