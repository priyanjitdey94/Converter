const Replace =require('../src/replace.js');
const NumberToWord=require('../src/numberToWord.js');
const OrdinalToCardinal=require('../src/ordinalToCardinal.js');

const replaceObj=new Replace();
const numberToWordObj=new NumberToWord();


describe('ordinaltoCardinal',function(){
    it('should test ordinalToCardinal',function(){
        const ordinalToCardinalObj=new OrdinalToCardinal();
        expect(ordinalToCardinalObj.convertOrdinal()).toBe(undefined);
        expect(ordinalToCardinalObj.convertOrdinal('11th')).toBe(undefined);
        expect(ordinalToCardinalObj.convertOrdinal('22nd')).toBe(undefined);
        expect(ordinalToCardinalObj.convertOrdinal('10th')).toBe(undefined);
        expect(ordinalToCardinalObj.convertOrdinal('1000th')).toBe(undefined)
        expect(ordinalToCardinalObj.convertOrdinal('40th')).toBe(undefined);

        expect(ordinalToCardinalObj.clean('.')).toEqual(['.','','.']);
        expect(ordinalToCardinalObj.isValidOrdinal('11ss')).toBe(false);
        expect(ordinalToCardinalObj.isValidOrdinal('11st')).toBe(true);

        expect(ordinalToCardinalObj.setText()).toBe(false);
        ordinalToCardinalObj.setText('3rd');
        expect(ordinalToCardinalObj.getText()).toEqual('3rd');
    });
});
