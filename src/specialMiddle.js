const cDate=require('./date.js');
const cTime=require('./time.js');
const DecimalOrFraction=require('./decimalOrFraction.js');
const Phone=require('./phone.js');

const cDateObj=new cDate();
const cTimeObj=new cTime();
const decimalOrFractionObj=new DecimalOrFraction();
const phoneObj=new Phone();

class SpecialMiddle{
    constructor(){
        this.text='';
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
        this.format=/^\d{1,2}[\/|\.|\-]\d{1,2}[\/|\.|\-]\d{1,2}$|^\d+(\.)\d+$|^\d+(\/)\d+$|^\d{1,2}[\:]\d{1,2}([\:]\d{1,2}){0,1}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){0,1}$|^\d{10}$|^\+\d{1,2}\-\d{10}$|^\d{1,2}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){1}$/g;
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
    
    isValidSpecialMiddle(_str){
        let a = this.setText(_str);
        let b = _str.match(this.format);
        if(a===false || b===null){
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

    chooseBranch(word,pos){
        // console.log('specialMiddle');
        if(word===undefined){
            return false;
        }

        let temp=this.clean(word);
        temp[1]=temp[1].trim();
        // console.log(temp[1]);
        if(decimalOrFractionObj.isValidDecimalOrFraction(temp[1])){
            if(decimalOrFractionObj.isDecimal(temp[1])){
                decimalOrFractionObj.convertToDecimal(word,pos);
            }else if(decimalOrFractionObj.isFraction(temp[1])){
                decimalOrFractionObj.convertToFraction(word,pos);
            }
        }else if(cTimeObj.isValidTime(temp[1])){
            cTimeObj.convertTime(word,pos);
        }else if(cDateObj.isValidDate(temp[1])){
            cDateObj.convertDate(word,pos);
        }else if(phoneObj.isValidPhone(temp[1])){
            phoneObj.convertPhone(word,pos);
        }
    }
}

module.exports=SpecialMiddle;