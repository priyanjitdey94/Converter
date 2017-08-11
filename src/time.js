const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class cTime {
    constructor() {
        this.text = '';
        this.timeFormat = /^\d+[:|\.]\d+([:|\.]\d+){0,1}(am|pm)$/g;
    }

    setTime(_str) {
        if (_str === undefined) {
            console.log('Time cannot be undefined');
            return false;
        }
        this.text = _str;
        return true;
    }
    getTime() {
        return this.text;
    }

    isValidTime(_str) {
        let a = this.setTime(_str);
        let b = _str.match(this.timeFormat);

        if (a === false || b === null) {
            return false;
        }
        return true;
    }

    convertTime(str) {
        if (str !== undefined && !this.isValidTime(str)) {
            console.log('Time not valid');
            return str;
        }
        let convertedTime = '';
        let timeAr = this.text.split(':');

        convertedTime += (numberToWordObj.convert(timeAr[0]) + ' hours ');
        convertedTime += (numberToWordObj.convert(timeAr[1]) + ' minutes');
        if (timeAr.length === 3) {
            convertedTime += (' ' + numberToWordObj.convert(timeAr[2]) + ' seconds');
        }

        replaceObj.show(convertedTime);
        // return convertedTime.trim();
    }
}

// let obj = new cTime();
// console.log(obj.isValidTime('20:43'));
// obj.convertTime('20:43');