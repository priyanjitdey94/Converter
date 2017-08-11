import NumberToWord from './numberToWord.js';

const numberToWord=new NumberToWord();

class Decimal{
    constructor(){
        this.decimal='';
        this.decimalFormat=/[\d]+[.][\d]+/g;
    }

    setDecimal(str){
        if(str===undefined){
            console.log('Decimal cannot be undefined');
            return false;
        }
        this.decimal=str;
    }

    isDecimal(str){
        return this.setDecimal(str) && this.decimalFormat.test(this.decimal);
    }

    convertDecimal(str){
        if(!this.isDecimal(str)){
            console.log('Not a decimal. Cannot convert.')
            return str;
        }
        let decimalAr=str.split('.');
        
        let beforePoint=numberToWord.convert(decimalAr[0]);
        let afterPoint='';
        
        let i,j;
        for(i=0;i<decimalAr[1].length;i++){
            afterPoint+=(numberToWord.convert(decimalAr[1].charAt(i))+' ');
        }

        return beforePoint+'.'+afterPoint.trim();
    }
}