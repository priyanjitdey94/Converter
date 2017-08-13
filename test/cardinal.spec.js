const NumberToWord = require('../src/numberToWord.js');
const Replace = require('../src/replace.js');
const Cardinal=require('../src/cardinal.js')

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

describe('Cardinal',function(){
    it('should check cardinal',function(){
        const cardinalObj=new Cardinal();
        expect(cardinalObj.convertCardinal()).toBe(undefined);
        expect(cardinalObj.setCardinal()).toBe(false);
        expect(cardinalObj.convertCardinal('0')).toBe(undefined);
        cardinalObj.setCardinal('22');
        expect(cardinalObj.getCardinal()).toEqual('22');
        expect(cardinalObj.clean('.')).toEqual(['.','','.']);
    });
});
