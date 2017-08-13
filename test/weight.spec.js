const Replace = require('../src/replace.js');
const NumberToWord = require('../src/numberToWord.js');
const Cleaner = require('../src/cleaner.js');
const Weight = require('../src/weight.js')

const replaceObj = new Replace();
const numberToWordObj = new NumberToWord();

describe('Weight',function(){
    it('should check weight',function(){
        const weightObj=new Weight();

        expect(weightObj.convertWeight('1.2kg',4)).toBe(undefined);
        expect(weightObj.convertWeight('1kg',4)).toBe(undefined);
        expect(weightObj.convertWeight()).toBe(false);

        weightObj.setText('1.2kgs');
        expect(weightObj.getText()).toEqual('1.2kgs');
        expect(weightObj.setText()).toBe(false);
        expect(weightObj.isValidWeight('12.333kg')).toBe(true);
    });
});