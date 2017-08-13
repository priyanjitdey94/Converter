const NumberToWord = require('../src/numberToWord.js');
const Replace = require('../src/replace.js');
const cDate=require('../src/date.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

describe('Date',function(){
    it('should check date',function(){
        const date=new cDate();

        expect(date.convertDate()).toBe(undefined);
        expect(date.setDate()).toBe(false);
        expect(date.isValidDate('1/2/1')).toBe(false);
        date.setDate('1/2/11');
        expect(date.getDate()).toEqual('1/2/11');

        expect(date.convertDate('1/2/11.')).toBe(undefined);
        expect(date.convertDate('aa/bb/cccc')).toBe(undefined);
        expect(date.convertDate('75/23/2017')).toBe(undefined);
        expect(date.convertDate('31/04/19')).toBe(undefined);
        expect(date.convertDate('31/02/19')).toBe(undefined);
        expect(date.convertDate('31/02/16')).toBe(undefined);
        expect(date.convertDate('21/04/99')).toBe(undefined);
        expect(date.convertDate('21/04/019')).toBe(undefined);
        // expect(date.clean('(2/12/23)')).toBe(['(','2/12/23',')']);
    });
});