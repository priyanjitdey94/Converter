const NumberToWord = require('../src/numberToWord.js');
const Replace = require('../src/replace.js');
const Decimal = require('../src/decimal.js');

const numberToWord = new NumberToWord();
const replaceObj = new Replace();

describe('Decimal',function(){
    it('should check decimal',function(){
        const decimalObj=new Decimal();

        decimalObj.setDecimal('1.2');
        expect(decimalObj.setDecimal()).toBe(false);
        expect(decimalObj.getDecimal()).toEqual('1.2');
        expect(decimalObj.isDecimal('1.2.')).toBe(false);
        expect(decimalObj.isDecimal()).toBe(false);
        expect(decimalObj.isDecimal('1.2')).toBe(true);
        expect(decimalObj.convertDecimal()).toBe(undefined);
        expect(decimalObj.clean('..')).toEqual(['..','','..']);
    });
});