const eventManager = require('./eventManager.js');

class Replace {
  constructor () {
    // this.modified=[];
  }

  doReplace (value, pos) {
    if (value === undefined || pos === undefined) {
      return;
    }
    eventManager.modified.push(value);
    eventManager.modified.push(pos);
    eventManager.removeTask();
  }
}

eventManager.on('finish', (arr) => {
  eventManager.complete();
  let timer = setInterval(function () {
    if (eventManager.check()) {
      eventManager.emit('done', arr);
      clearInterval(timer);
    }
  }, 20);
});

eventManager.on('done', (arr) => {
  eventManager.makeChangesAndPublish(arr);
});

module.exports = Replace;
