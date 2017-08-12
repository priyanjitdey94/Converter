const eventManager=require('./eventManager.js');

class Replace {
    constructor() {
        // this.modified=[];
    }

    show(str) {
        console.log(str);
    }
    doReplace(value, pos) {
        if (value === undefined || pos === undefined) {
            return;
        }
        eventManager.modified.push(value);
        eventManager.modified.push(pos);
        eventManager.removeTask();
        
        // console.log(value+' '+pos);
        //window.arr[pos] = value + '';
        //return window.arr[pos];
    }
    
}


eventManager.on('finish',(arr)=>{
    eventManager.complete();
    // console.log(arr+' '+obj.modified);
    let timer=setInterval(function() {
        // console.log(eventManager.taskProcessed+' '+eventManager.taskTobeProcessed+' '+eventManager.processingDone);
        // console.log(arr.length);
        if(eventManager.check()){
            // console.log('done');
            eventManager.emit('done',arr);
            clearInterval(timer);
        }
    }, 20);
});

eventManager.on('done',(arr,obj)=>{
    console.log('done');
    eventManager.makeChangesAndPublish(arr);
});
// export default Replace;
module.exports = Replace;