const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class Time {
    constructor() {
        this.text = '';
        this.timeFormat = /^\d+[:]\d+([:]\d+){0,1}$/g;
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
        let b = this.timeFormat.match(_str);

        if (a === false || b === null || b.length < 2 || b.length > 3) {
            return false;
        }
        return true;
    }

    convertTime(str) {
        if (str !== undefined && !isValidTime(_str)) {
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