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

    containNumber(word) {
        let reg = /\d+/g;
        if (word.match(reg) === null) {
            return false;
        }
        return true;
    }

    sendForProcessing(j,localThis){
        setTimeout(function(){
            if(localThis.containNumber(localThis.splitAr[j])){
                deciderObj.decide(localThis.splitAr[j],j);
                eventManager.addTask();
            }
            if(j===localThis.splitAr.length-1){
                eventManager.emit('finish',localThis.splitAr,replaceobj);
            }
        },j);
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
            this.sendForProcessing(i,this);
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

module.exports=Identifier;