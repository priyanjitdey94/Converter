const NumberToWord = require('./numberToWord.js');
const Replace = require('./replace.js');

const numberToWord=new NumberToWord();
const replaceObj = new Replace();

class Fraction{
    constructor(){
        this.fraction='';
        this.fractionFormat = /^\d+(\/)\d+$/g;
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
    }

    setFraction(str){
        if(str===undefined){
            return false;
        }
        this.fraction=str.trim();
        return true;
    }
    getFraction(){
        return this.fraction;
    }

    isFraction(str){
        let a = this.setFraction(str);
        let b = str.match(this.fractionFormat);
        if(a === false || b === null){
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

    convertFraction(str,pos){
        // console.log('fraction');
        if(str===undefined){
            return;
        }

        let temp=this.clean(str);
        str=temp[1];
        let parts=str.split('/');
        
        let numerator=numberToWord.convert(parts[0]);
        let denominator=numberToWord.convert(parts[1]);
        
        let finalStr=numerator+'/'+denominator;
        replaceObj.doReplace(temp[0]+finalStr.trim()+temp[2],pos);
    }
}

module.exports=Fraction;
// const obj=new Fraction();
// console.log(obj.isFraction(23/45));
// console.log(obj.convertFraction(23/45));