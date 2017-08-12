const Replace =require('./replace.js');
const NumberToWord=require('./numberToWord.js');

const replaceObj=new Replace();
const numberToWordObj=new NumberToWord();

class OrdinalToCardinal{
    constructor(){
        this.text='';
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
        this.cOnePlace = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth'];
        this.cOneInTenPlace = ['tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth',
                                'seventeenth', 'eighteenth', 'nineteenth'];
        this.cTenPlace = ['', '', 'twentieth', 'thirteeth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth',
                            'eightieth', 'ninetieth'];
        this.cMileStone = ['', 'thousandth', 'millionth', 'billionth', 'hundredth'];
    }

    getText(){
        return this.text;
    }
    setText(_str){
        if(_str===undefined){
            return false;
        }
        this.text=_str;
        return true;
    }

    isValidOrdinal(_str){
        let a=this.setText(_str);
        let i,j,k=true;
        for(i=0;i<_str.length-2;i++){
            if(isNaN(parseInt(_str.substr(i,1)))){
                return false;
            }
        }
        j=_str.substr(_str.length-2,2);
        if(j==='rd' || j==='th' || j==='st' || j==='nd'){
            return a;
        }else return false;
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

    findEquivalentOrdinal(_str){
        let i;
        for(i=0;i<numberToWordObj.onePlace.length;i++){
            if(_str===numberToWordObj.onePlace[i]){
                return this.cOnePlace[i];
            }
        }
        for(i=0;i<numberToWordObj.tenPlace.length;i++){
            if(_str===numberToWordObj.tenPlace[i]){
                return this.cTenPlace[i];
            }
        }
        for(i=0;i<numberToWordObj.oneInTenPlace.length;i++){
            if(_str===numberToWordObj.oneInTenPlace[i]){
                return this.cOneInTenPlace[i];
            }
        }
        for(i=0;i<numberToWordObj.mileStone.length;i++){
            if(_str===numberToWordObj.mileStone[i]){
                return this.cMileStone[i];
            }
        }
    }
    convertOrdinal(word,pos){
        console.log('ordinalToCardinal');
        if(word === undefined){
            return;
        }
        let temp=this.clean(word);
        word=temp[1];

        let i,j,k,finalStr='';
        let numString=word.substr(0,word.length-2),
            suffix=word.substr(word.length-2,2);

        let convertedNumString=numberToWordObj.convert(numString);
        k=convertedNumString.split(' ');
        j=k.pop();
        k.push(this.findEquivalentOrdinal(j));

        for(i=0;i<k.length;i++){
            finalStr+=(k[i]+' ');
        }
        finalStr=finalStr.trim();
        replaceObj.doReplace(temp[0]+finalStr+temp[2],pos);
    }
}

module.exports=OrdinalToCardinal;