const Cardinal=require('../src/cardinal.js');
const SpecialMiddle=require('../src/specialMiddle.js');
const SuffixPrefix=require('../src/suffixPrefix.js');
const Replace=require('../src/replace.js');
const Decider=require('../src/decider.js');

const cardinalObj=new Cardinal();
const specialMiddleObj=new SpecialMiddle();
const suffixPrefixObj=new SuffixPrefix();
const replaceObj=new Replace();

describe('Decider',function(){
    it('should call decider',function(){
        const deciderObj=new Decider();
        
        expect(deciderObj.decide('2am.',9)).toBe(undefined);
        expect(deciderObj.decide()).toBe(false);
        expect(deciderObj.clean('...')).toEqual(['...','','...']);

        expect(deciderObj.decide('boy',2)).toBe(undefined);
        expect(deciderObj.decide('22nd',2)).toBe(undefined);
        expect(deciderObj.decide('22',2)).toBe(undefined);
    });
});