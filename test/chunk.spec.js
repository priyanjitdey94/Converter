const Identifier = require('../src/identifier.js');
const eventManager = require('../src/eventManager.js');
const Chunk = require('../src/chunk.js');

const identifierObj = new Identifier();

describe('Replace',function(){
    beforeAll(function(){
        var tempHTML = '<div id="container">'+
                        '<textarea id="input1" class="textBox" placeholder="Enter your text here..."></textarea>'+
                        '<button id="convertB" class="convert" onclick="startN2S()">CONVERT</button>'+
                        '<textarea id="input2" class="textBox"></textarea>'+
                        '</div>';
        
        document.body.insertAdjacentHTML('afterbegin',tempHTML);
    });
    
    it('should check chunk',function(){
        const chunkObj=new Chunk();
        chunkObj.initialize();
        expect(chunkObj.setSentence('I am a boy')).toBe(undefined);
        chunkObj.getNextIndexY();

        document.getElementById('input1').value='I am a boy and my age is 5';
        document.getElementById('convertB').click();
        
        document.getElementById('convertB').disabled=false;
        document.getElementById('input1').value='1 2 3 4 5 6efefefef 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21\n 22 23 24 25 26 27 28 29 30 31 32 33     34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60                         ';
        document.getElementById('convertB').click();
        
        document.getElementById('convertB').disabled=false;
        document.getElementById('input1').value='                                                                                                                                            ';
        document.getElementById('convertB').click();
        // eventManager.emit('sendNext');
        // eventManager.emit('finish',2);
    });
});