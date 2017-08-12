const EventEmitter=require('events');

class EventManager extends EventEmitter{
    constructor(){
        super();
        this.taskTobeProcessed=0;
        this.taskProcessed=0;
        this.processingDone=false;
        EventEmitter.call(this);
    }

    addTask(){
        this.taskTobeProcessed++;
    }
    removeTask(){
        this.taskProcessed++;
    }
    complete(){
        this.processingDone=true;
    }
}

module.exports=new EventManager();