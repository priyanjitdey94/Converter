const eventManager=require('../src/eventManager.js');
const Replace=require('../src/replace.js');

describe('Replace',function(){
    beforeAll(function(){
        var tempHTML = '<div id="container">'+
                        '<textarea id="input1" class="textBox" placeholder="Enter your text here..."></textarea>'+
                        '<button id="convertB" class="convert" onclick="startN2S()">CONVERT</button>'+
                        '<textarea id="input2" class="textBox"></textarea>'+
                        '</div>';
        
        document.body.insertAdjacentHTML('afterbegin',tempHTML);
    });
    
    it('should check replace',function(){
        const replaceObj=new Replace();
        eventManager.emit('done',[]);
        eventManager.emit('finish',2);
    });
});