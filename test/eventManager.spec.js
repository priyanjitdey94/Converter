const EventEmitter = require('events');
const eventManager = require('../src/eventManager.js');


describe('EventManager',function(){
    beforeAll(function(){
        var tempHTML = '<div id="container">'+
                        '<textarea id="input1" class="textBox" placeholder="Enter your text here..."></textarea>'+
                        '<button id="convertB" class="convert" onclick="startN2S()">CONVERT</button>'+
                        '<textarea id="input2" class="textBox"></textarea>'+
                        '</div>';
        
        document.body.insertAdjacentHTML('afterbegin',tempHTML);
    });

    it('should check eventManager',function(){
        expect(eventManager.initialize()).toBe(undefined);
        expect(eventManager.addTask()).toBe(undefined);
        expect(eventManager.removeTask()).toBe(undefined);
        expect(eventManager.complete()).toBe(undefined);

        eventManager.initialize();
        expect(eventManager.check()).toBe(false);
        eventManager.complete();
        expect(eventManager.check()).toBe(true);

        eventManager.modified.push('five');
        eventManager.modified.push(2);
        eventManager.makeChangesAndPublish(['i','am','5']);
    });
});