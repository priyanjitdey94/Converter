const NumberToWord = require('../src/numberToWord.js');
const Replace = require('../src/replace.js');
const Phone=require('../src/phone.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

describe('Phone',function(){
    it('should test phone',function(){
        const phoneObj=new Phone();

        phoneObj.setPhone('9474851429');
        expect(phoneObj.getPhone()).toEqual('9474851429');
        expect(phoneObj.setPhone()).toBe(false);
        expect(phoneObj.convertPhone()).toBe(undefined);
        expect(phoneObj.isValidPhone('22')).toBe(false);
        expect(phoneObj.clean('.')).toEqual(['.','','.']);
        expect(phoneObj.convertPhone('+91-9474851429')).toBe(undefined);
    });
});