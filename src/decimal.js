const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWord = new NumberToWord();
const replaceObj = new Replace();

class Decimal {
    constructor() {
        this.decimal = '';
        this.decimalFormat = /^\d+(\.)\d+$/g;
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
    }

    setDecimal(str) {
        if (str === undefined) {
            console.log('Decimal cannot be undefined');
            return false;
        }
        this.decimal = str;
        return true;
    }
    getDecimal() {
        return this.decimal;
    }

    isDecimal(str) {
        let a = this.setDecimal(str);
        let b = this.decimal.match(this.decimalFormat);
        if (b === null || a === false) {
            return false;
        }
        return true;
    }

    belongsToPunctuation(c) {
        let i;
        for (i = 0; i < this.punctuation.length; i++) {
            if (c === this.punctuation[i]) {
                return true;
            }
        }
        return false;
    }

    clean(word) {
        let i, j;
        let wordBreakUp = [];
        i = 0;
        while (this.belongsToPunctuation(word[i]) && i < word.length) {
            i++;
        }
        j = word.length - 1;
        while (this.belongsToPunctuation(word[j]) && j >= 0) {
            j--;
        }

        wordBreakUp.push(word.substr(0, i));
        wordBreakUp.push(word.substr(i, j - i + 1));
        wordBreakUp.push(word.substr(j + 1, word.length - j));

        return wordBreakUp;
    }

    convertDecimal(str,pos) {
        console.log('decimal');
        if (str===undefined) {
            return;
        }
        let temp=this.clean(str);
        str=temp[1];

        let decimalAr = str.split('.');

        let beforePoint = numberToWord.convert(decimalAr[0]);
        let afterPoint = '';

        let i, j;
        for (i = 0; i < decimalAr[1].length; i++) {
            afterPoint += (numberToWord.convert(decimalAr[1].charAt(i)) + ' ');
        }

        replaceObj.doReplace(temp[0]+beforePoint + '.' + afterPoint.trim()+temp[2],pos);
    }
}

module.exports=Decimal;
// const obj = new Decimal();
// console.log(obj.convertDecimal('33.44'));