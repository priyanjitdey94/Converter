const cDate=require('../src/date.js');
const cTime=require('../src/time.js');
const DecimalOrFraction=require('../src/decimalOrFraction.js');
const Phone=require('../src/phone.js');
const SpecialMiddle=require('../src/specialMiddle.js');


const cDateObj=new cDate();
const cTimeObj=new cTime();
const decimalOrFractionObj=new DecimalOrFraction();
const phoneObj=new Phone();

describe('SpecialMiddle',function(){
    it('should check specialMiddle',function(){
        const specialMiddleObj=new SpecialMiddle();

        expect(specialMiddleObj.chooseBranch('2/3',4)).toBe(undefined);
        expect(specialMiddleObj.chooseBranch('2.3',4)).toBe(undefined);
        expect(specialMiddleObj.chooseBranch('2/3/12',4)).toBe(undefined);
        expect(specialMiddleObj.chooseBranch('9474851429',4)).toBe(undefined);
        expect(specialMiddleObj.chooseBranch()).toBe(false);

        expect(specialMiddleObj.setText()).toBe(false);
        specialMiddleObj.setText('2.2');
        expect(specialMiddleObj.getText()).toEqual('2.2');
        expect(specialMiddleObj.clean('.')).toEqual(['.','','.']);
    });
});