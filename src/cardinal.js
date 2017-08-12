const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class Cardinal {
    constructor() {
        this.text = '';
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
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
    convertCardinal(_str,pos) {
        if (_str===undefined) {
            return;
        }
        let temp=this.clean(_str);
        _str=temp[1];
        let cardinal = numberToWordObj.convert(_str);
        replaceObj.doReplace(cardinal,pos);
    }
}

module.exports=Cardinal;
// let obj = new Cardinal();
// console.log(obj.isValidCardinal('232'));
// obj.convertCardinal('2424');