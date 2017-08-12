const Cardinal=require('./cardinal.js');
const SpecialMiddle=require('./specialMiddle.js');
const SuffixPrefix=require('./suffixPrefix.js');
const Replace=require('./replace.js');

const cardinalObj=new Cardinal();
const specialMiddleObj=new SpecialMiddle();
const suffixPrefixObj=new SuffixPrefix();
const replaceObj=new Replace();

class Decider{
    constructor(){
        this.text='';
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
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

    fetchNumber(word){
        let i,j;
        let numberFetched=[];
        i=0;
        while(isNaN(parseInt(word[i])) && i<word.length){
            i++;
        }
        j=word.length-1;
        while(isNaN(parseInt(word[j])) && j>=0){
            j--;
        }

        numberFetched.push(word.substr(0,i));
        numberFetched.push(word.substr(i,j-i+1));
        numberFetched.push(word.substr(j+1,word.length-j));

        return numberFetched;
    }
    decide(word,pos){
        if(word===undefined){
            return false;
        }
        this.text=word;

        let temp=this.clean(this.text);
        let arr=this.fetchNumber(temp[0]);
        
        if(arr[0]==='' && arr[2]===''){
            cardinalObj.convertCardinal(word,pos);
        }else if(specialMiddleObj.isValidSpecialMiddle(temp[0])){
            specialMiddleObj.chooseBranch(word,pos);
        }else if(suffixPrefixObj.isValidSuffixPrefix(temp[0])){
            suffixPrefixObj.chooseBranch(word,pos);
        }else{
            replaceObj.doReplace(word,pos);
        }
    }
}