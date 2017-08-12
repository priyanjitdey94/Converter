const eventManager=require('../src/eventManager.js');
const Replace=require('../src/replace.js');

describe('Replace',function(){
    it('should check replace',function(){
        const replaceObj=new Replace();
        eventManager.emit('done',[]);
        eventManager.emit('finish',2);
    });
});