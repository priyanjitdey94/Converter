const eventManager=require('../src/eventManager.js');
const Decider=require('../src/decider.js');
const Replace=require('../src/replace.js');
const Identifier=require('../src/identifier.js')
const deciderObj=new Decider();
const replaceobj=new Replace();

jest.useFakeTimers();

describe('Identifier',function(){
    beforeAll(function(){
        var tempHTML = '<div id="container">'+
                        '<textarea id="input1" class="textBox" placeholder="Enter your text here..."></textarea>'+
                        '<button id="convertB" class="convert" onclick="startN2S()">CONVERT</button>'+
                        '<textarea id="input2" class="textBox"></textarea>'+
                        '</div>';
        
        document.body.insertAdjacentHTML('afterbegin',tempHTML);
    });

    it('should run splitIntoArray',function(){
        const identifierObj=new Identifier();
        expect(identifierObj.splitIntoArray()).toBe(false);
        expect(identifierObj.initialize()).toBe(undefined);
        expect(identifierObj.splitIntoArray()).toBe(false);
        expect(identifierObj.splitIntoArray('I am 5')).toBe(undefined);
        document.getElementById('convertB').click();
        // const callback=jest.fn();
        // identifierObj.sendForProcessing(1,identifierObj);
        // expect(callback).not.toBeCalled();
        jest.runAllTimers();
        // expect(eventManager.addTask).toBeCalled();
    });
    it('should run splitIntoArray',function(){
        const identifierObj=new Identifier();
        identifierObj.splitAr='I am 55'.split(' ');
        expect(identifierObj.makeChangesAndPublish(['fifty five',2])).toBe(undefined);
        expect(identifierObj.containNumber('12vb')).toBe(true);
        expect(identifierObj.containNumber('')).toBe(false);
    });
});