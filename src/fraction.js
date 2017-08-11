import NumberToWord from './numberToWord.js';

const numberToWord=new NumberToWord();

class Fraction{
    constructor(){
        this.fraction='';
        this.fractionFormat=/[\d]+[\/][\d]+/g;
    }

    setFraction(str){
        if(!this.fractionFormat.test(str)){
            return 'Invalid fraction format';
        }else return 'Fraction cannot be undefined.';
        
        this.fraction=str.trim();
    }
    getFraction(){
        if(this.fraction===''){
            return 'Value not set(Fraction)';
        }
        return this.fraction;
    }

    isFraction(str){
        this.setFraction(str);
        if(!this.fractionFormat.test(this.fraction)){
            return false;
        }
        return true;
    }

    convertFraction(str){
        if(str!==undefined){
            this.setFraction(str);
        }
        let parts=str.split('/');
        
        let numerator=numberToWord.convert(parts[0]);
        let denominator=numberToWord.convert(parts[1]);
        
        let finalStr=numerator+'/'+denominator;
        return finalStr.trim();
    }
}

const obj=new Fraction();
console.log(obj.isFraction(23/45));
console.log(obj.convertFraction(23/45));