const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class cTime {
    constructor() {
        this.text = '';
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
        this.timeFormat = /^\d{1,2}[\:]\d{1,2}([\:]\d{1,2}){0,1}$|^\d{1,2}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){1}$/g;
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
    
    convertTime(str,pos) {
        console.log('cTime');
        if (str === undefined) {
            console.log('Time not valid');
            return str;
        }
        if((str.substr(str.length-2,2).toLowerCase()==='am') || (str.substr(str.length-2,2).toLowerCase()==='pm')){
            if(this.isValidTime(str.substr(0,str.length-2))){
                let digitRegex=/\d+/g;
                let timeArray=this.text.match(digitRegex);
                let timeInWordArray=[];
                let i;
                console.log(this.text);
                for(i=0;i<timeArray.length;i++){
                    timeInWordArray.push(numberToWordObj.convert(timeArray[i]));
                    this.text.replace(timeArray[i],timeInWordArray[i]);
                }
                replaceObj.show(this.text);console.log(timeInWordArray);
                return;
            }else{
                //console.log('')
                return str;
            }
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

module.exports=cTime;
// let obj = new cTime();
// console.log(obj.isValidTime('20:43'));
// obj.convertTime('20:43');