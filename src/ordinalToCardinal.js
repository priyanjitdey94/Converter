const Replace =require('./replace.js');
const NumberToWord=require('./numberToWord.js');

const replaceObj=new Replace();
const numberToWordObj=new NumberToWord();

class OrdinalToCardinal{
    constructor(){
        this.text='';
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

    checkForOrdinal(_str){
        if(!this.isValidOrdinal(_str)){
            return;
        }
        let i,j,k;
        for(i=0;i<this.cOnePlace.length;i++){
            if(_str===this.cOnePlace[i]){
                return numberToWordObj.onePlace[i];
            }
        }
        for(i=0;i<this.cTenPlace.length;i++){
            if(_str===this.cTenPlace[i]){
                return numberToWordObj.tenPlace[i];
            }
        }
        for(i=0;i<this.cOneInTenPlace.length;i++){
            if(_str===this.cOneInTenPlace[i]){
                return numberToWordObj.oneInTenPlace[i];
            }
        }
        for(i=0;i<this.cMileStone.length;i++){
            if(_str===this.cMileStone[i]){
                return numberToWordObj.mileStone[i];
            }
        }
    }
}