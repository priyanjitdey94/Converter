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
        this.format=/(((\d+[:|\/|-|.])*\d+[:|\/|-|.]\d+(am|pm| am| pm)*))|(((\+){0,1}\d{1,2}(-){0,1})*\d{10})/g;
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
        if(!a && b===null){
            return false;
        }
        return true;
    }

    chooseBranch(_str){
        if(!isValidSpecialMiddle(_str)){
            return _str;
        }

        if(decimalOrFractionObj.isDecimalOrFraction(_str)){
            if(decimalOrFractionObj.isDecimal(_str)){
                decimalOrFractionObj.convertToDecimal(_str);
            }else if(decimalOrFractionObj.isFraction(_str)){
                decimalOrFractionObj.convertToFraction(_str);
            }
        }else if(cTimeObj.isValidTime(_str)){
            cTimeObj.convertTime(_str);
        }else if(cDateObj.isValidDate(_str)){
            cDateObj.convertDate(_str);
        }else if(phoneObj.isValidPhone(_str)){
            phoneObj.convertPhone(_str);
        }else{
            _str+='[Ambiguous]';
            return _str;
        }
    }
}