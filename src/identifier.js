const css = require('./assets/css/style.css');
const eventManager = require('./eventManager.js');
const Decider = require('./decider.js');
const Replace = require('./replace.js');

const deciderObj = new Decider();
const replaceobj = new Replace();
class Identifier {
    constructor() {
        this.text = '';
        this.splitAr = [];
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']'];
    }

    initialize() {
        this.text = '';
        this.splitAr = [];
    }
    containNumber(word) {
        let reg = /\d+/g;
        if (word.match(reg) === null) {
            return false;
        }
        return true;
    }

    sendForProcessing(j, localThis) {
        setTimeout(function () {
            if (localThis.containNumber(localThis.splitAr[j])) {
                deciderObj.decide(localThis.splitAr[j], j);
                eventManager.addTask();
            }
            if (j === localThis.splitAr.length - 1) {
                eventManager.emit('finish', localThis.splitAr, replaceobj);
            }
        }, j);
    }
    splitIntoArray(_str) {
        // console.log('identifier');
        if (_str === undefined) {
            return false;
        }
        this.text = _str;
        this.splitAr = this.text.split(' ');
        // console.log(this.splitAr);

        let i, j, localThis = this;
        for (i = 0; i < this.splitAr.length; i++) {
            this.sendForProcessing(i, this);
        }
    }

    makeChangesAndPublish(arr) {
        let i, j, k;
        j = 1;
        let finalStr = '';
        for (i = 0; i < this.splitAr.length; i++) {
            if (j < arr.length && i === arr[j]) {
                finalStr += arr[j - 1] + ' ';
                j += 2;
            } else {
                finalStr += this.splitAr[i] + ' ';
            }
        }
        // console.log(finalStr.trim());
    }
}

const obj = new Identifier();
// obj.splitIntoArray('I am a very 55 good 28/2/22) 9474851429 2/3 100th 2.55 1.22kgs. boy 12:11am.');

window.startN2S = function () {
    let str = document.getElementById('input1').value;
    obj.initialize();
    eventManager.initialize();
    obj.splitIntoArray(str);
}

module.exports = Identifier;