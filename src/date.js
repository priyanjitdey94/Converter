const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class cDate {
    constructor() {
        this.text = '';
        this.dd = '';
        this.mm = '';
        this.yy = '';
        this.dateFormat = /^\d{1,2}[/|.|-]\d{1,2}[/|.|-]\d{2,4}$/g;
        this.months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    setDate(_str) {
        if (_str === undefined) {
            console.log('Date cannot be undefined');
            return false;
        }
        this.text = _str;
        return true;
    }
    getDate() {
        return this.text;
    }

    belong(c) {
        if (c === '.' || c === '/' || c === '-') {
            return true;
        }
        return false;
    }

    isValidDate(_str) {
        let a = this.setDate(_str.trim());
        let b = _str.match(this.dateFormat);

        if (a === false || b === null) {
            return false;
        }
        return true;
    }

    convertDate(_str) {
        if (!this.isValidDate(_str)) {
            console.log('Not a valid date.');
            return false;
        }
        let breakPoints = [];
        let i, j = 0,
            k;
        for (i = 0; i < this.text.length; i++) {
            if (this.belong(this.text.charAt(i))) {
                breakPoints.push(i);
            }
        }
        let d = numberToWordObj.convert(this.text.substr(0, breakPoints[0]));
        let m = numberToWordObj.convert(this.text.substr(breakPoints[0] + 1, breakPoints[1] - breakPoints[0] - 1));
        let y = numberToWordObj.convert(this.text.substr(breakPoints[1] + 1, this.text.length - 1 - breakPoints[1]));

        replaceObj.show(d + this.text.charAt(breakPoints[0]) + m + this.text.charAt(breakPoints[1]) + y);
    }
}

let obj = new cDate();
console.log(obj.isValidDate('12/12/12'));
obj.convertDate('12/12-22');