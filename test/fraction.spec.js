const NumberToWord = require('../src/numberToWord.js');
const Replace = require('../src/replace.js');
const Fraction=require('../src/fraction.js');

const numberToWord=new NumberToWord();
const replaceObj = new Replace();

describe('Fraction',function(){
    it('should check fraction',function(){
        const fractionObj=new Fraction();

        expect(fractionObj.convertFraction()).toBe(undefined);

        expect(fractionObj.setFraction()).toBe(false);
        fractionObj.setFraction('1/2');
        expect(fractionObj.getFraction()).toEqual('1/2');
        expect(fractionObj.isFraction('1/2')).toBe(true);
        expect(fractionObj.isFraction('1.2')).toBe(false);
        expect(fractionObj.clean('.')).toEqual(['.','','.']);
    });
});