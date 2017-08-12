const OrdinalToCardinal=require('../src/ordinalToCardinal.js');
const cTime=require('../src/time.js');
const Replace=require('../src/replace.js');
const SuffixPrefix=require('../src/suffixPrefix.js');

const ordinalToCardinalObj=new OrdinalToCardinal();
const cTimeObj=new cTime();
const replaceObj=new Replace();

describe('SuffixPrefix',function(){
    it('should run suffixPrefix',function(){
        const suffixPrefixObj=new SuffixPrefix();
        expect(suffixPrefixObj.chooseBranch('e2n')).toBe(false);
        expect(suffixPrefixObj.chooseBranch('2ssn')).toBe(undefined);

        expect(suffixPrefixObj.setText()).toBe(false);
        suffixPrefixObj.setText('33rd')
        expect(suffixPrefixObj.getText()).toEqual('33rd');
        expect(suffixPrefixObj.clean('.')).toEqual(['.','','.']);
        expect(suffixPrefixObj.clean()).toBe(undefined);
    });
});