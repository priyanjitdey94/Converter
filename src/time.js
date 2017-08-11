const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

class cTime {
    constructor() {
        this.text = '';
        this.timeFormat = /^\d+[:|\.]\d+([:|\.]\d+){0,1}(am|pm)*$/g;
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

let obj = new cTime();
console.log(obj.isValidTime('20:43'));
obj.convertTime('20:43');