const EventEmitter = require('events');

class EventManager extends EventEmitter {
    constructor() {
        super();
        this.taskTobeProcessed = 0;
        this.taskProcessed = 0;
        this.processingDone = false;
        this.modified = [];
        EventEmitter.call(this);
    }

    addTask() {
        this.taskTobeProcessed++;
    }
    removeTask() {
        this.taskProcessed++;
    }
    complete() {
        this.processingDone = true;
    }
    check() {
        if (this.taskProcessed === this.taskTobeProcessed && this.processingDone) {
            return true;
        }
        return false;
    }
    makeChangesAndPublish(arr) {
        let i, j, k;
        j = 1;
        let finalStr = '';
        for (i = 0; i < arr.length; i++) {
            if (j < this.modified.length && i === this.modified[j]) {
                finalStr += this.modified[j - 1] + ' ';
                j += 2;
            } else {
                finalStr += arr[i] + ' ';
            }
        }
        console.log(finalStr.trim());
    }
}

module.exports = new EventManager();