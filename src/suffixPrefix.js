const OrdinalToCardinal=require('./ordinalToCardinal.js');
const cTime=require('./time.js');
const Replace=require('./replace.js');

const ordinalToCardinalObj=new OrdinalToCardinal();
const cTimeObj=new cTime();
const replaceObj=new Replace();

class SuffixPrefix{
    constructor(){
        this.text='';
        this.suffixPrefixFormat=/^\d+([a-zA-Z]+|%)$|^([a-zA-Z]+.|$)+\d+$/g;
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']'];
    }

    setText(_str){
        if(_str===undefined){
            return false;
        }
        this.text=_str;
        return true;
    }
    getText(){
        return this.text;
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
        if(word===undefined){
            return;
        }
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

    isValidSuffixPrefix(_str){
        _str=this.clean(_str)[1];
        if(this.setText(_str) && _str.match(this.suffixPrefixFormat)!==null){
            return true;
        }
        return false;
    }

    
    chooseBranch(word,pos){
        if(!this.isValidSuffixPrefix(word)){
            return false;
        }

        let temp=this.clean(word);

        if(ordinalToCardinalObj.isValidOrdinal(temp[1])){
            ordinalToCardinalObj.convertOrdinal(word,pos);
        }else{
            replaceObj.doReplace(word,pos);
        }
    }
}

module.exports=SuffixPrefix;