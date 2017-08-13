const OrdinalToCardinal = require('./ordinalToCardinal.js');
const cTime = require('./time.js');
const Replace = require('./replace.js');
const Weight = require('./weight.js');
const Cleaner = require('./cleaner.js');

const ordinalToCardinalObj = new OrdinalToCardinal();
const cTimeObj = new cTime();
const replaceObj = new Replace();
const weightObj = new Weight();

class SuffixPrefix extends Cleaner {
    constructor() {
        super();
        this.text = '';
        this.suffixPrefixFormat = /^\d+([a-zA-Z]+|%)$|^([a-zA-Z]+.|$)+\d+$|^\d+((\.){1}\d+){0,1}(Kg|kg|Kgs|kgs|g)$/g;
    }

    setText(_str) {
        if (_str === undefined) {
            return false;
        }
        this.text = _str;
        return true;
    }
    getText() {
        return this.text;
    }

    isValidSuffixPrefix(_str) {
        _str = this.clean(_str)[1];
        if (this.setText(_str) && _str.match(this.suffixPrefixFormat) !== null) {
            return true;
        }
        return false;
    }

    chooseBranch(word, pos) {
        // console.log('suffixPrefix');
        if (!this.isValidSuffixPrefix(word)) {
            return false;
        }

        let temp = this.clean(word);
        // console.log(temp[1]);
        if (ordinalToCardinalObj.isValidOrdinal(temp[1])) {
            ordinalToCardinalObj.convertOrdinal(word, pos);
        } else if (weightObj.isValidWeight(temp[1])) {
            weightObj.convertWeight(word, pos);
        } else {
            replaceObj.doReplace(word, pos);
        }
    }
}

module.exports = SuffixPrefix;