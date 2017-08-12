const NumberToWord = require('../src/numberToWord.js');
const Replace = require('../src/replace.js');
const cTime = require('../src/time.js');

const numberToWordObj = new NumberToWord();
const replaceObj = new Replace();

describe('Time',function(){
    it('should run time',function(){
        const time=new cTime();

        expect(time.convertTime()).toBe(undefined);
        expect(time.convertTime('22:22:22s')).toBe(undefined);

        expect(time.setTime()).toBe(false);
        time.setTime('22:33');
        expect(time.getTime()).toEqual('22:33');
        expect(time.clean('.')).toEqual(['.','','.']);

        expect(time.convertTime('1:1:1')).toBe(undefined);
    });
});