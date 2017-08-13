const Fraction = require('../src/fraction.js');
const Decimal = require('../src/decimal.js');
const DecimalOrFraction=require('../src/decimalOrFraction.js');

const fractionObj = new Fraction();
const decimalObj = new Decimal();

describe('DecimalOrFraction',function(){
    it('should run decimalOrFraction',function(){
        const decimalOrFractionObj=new DecimalOrFraction();
        expect(decimalOrFractionObj.isFraction()).toBe(false);
        decimalOrFractionObj.setText('2.3');
        expect(decimalOrFractionObj.getText()).toEqual('2.3');
    });
});
