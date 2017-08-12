const eventManager=require('./eventManager.js');
const Decider=require('./decider.js');
const Replace=require('./replace.js');

const deciderObj=new Decider();
const replaceobj=new Replace();
class Identifier {
    constructor() {
        this.text = '';
        this.splitAr = [];
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']'];
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

    containNumber(word) {
        let reg = /\d+/g;
        if (word.match(reg) === null) {
            return false;
        }
        return true;
    }

    containLetter(word) {
        let reg = /[a-zA-Z]/g;
        if (word.match(reg) === null) {
            return false;
        }
        return true;
    }

    splitIntoArray(_str) {
        if (_str === undefined) {
            return false;
        }
        this.text = _str;
        this.splitAr = this.text.split(' ');
        console.log(this.splitAr);

        let i, j,localThis=this;
        for (i = 0; i < this.splitAr.length; i++) {
            (function(j){
                setTimeout(function(){
                    if(localThis.containNumber(localThis.splitAr[j])){
                        deciderObj.decide(localThis.splitAr[j],j);
                        eventManager.addTask();
                    }
                    if(j===localThis.splitAr.length-1){
                        eventManager.emit('finish',localThis.splitAr,replaceobj);
                    }
                },j);
            })(i);
        }
    }

    makeChangesAndPublish(arr){
        let i,j,k;
        j=1;
        let finalStr='';
        for(i=0;i<this.splitAr.length;i++){
            if(j<arr.length && i===arr[j]){
                finalStr+=arr[j-1]+' ';
                j+=2;
            }else{
                finalStr+=this.splitAr[i]+' ';
            }
        }
        console.log(finalStr.trim());
    }
}

const obj = new Identifier();
obj.splitIntoArray('I am a very 55 good 24/12/22) 2.55 boy 12:11am.');