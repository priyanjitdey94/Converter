/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const eventManager = require('./eventManager.js');

/**
 * Class that replace the modified word with the old word
 */
class Replace {
  constructor () {
    // this.modified=[];
  }

  /**
   * Method that does the replacement
   * @param {string} value - modified string.
   * @param {number} pos - position in original string.
   */
  doReplace (value, pos) {
    if (value === undefined || pos === undefined) {
      return;
    }
    eventManager.modified.push(value);
    eventManager.modified.push(pos);
    eventManager.removeTask();
  }
}

/**
 * Finish Event
 * @event Replace#finish
 */
eventManager.on('finish', (arr) => {
  eventManager.complete();
  let timer = setInterval(function () {
    if (eventManager.check()) {
      eventManager.emit('done', arr);
      clearInterval(timer);
    }
  }, 20);
});

/**
 * Complete processing done
 * @event Replace#Done
 */
eventManager.on('done', (arr) => {
  eventManager.makeChangesAndPublish(arr);
  setTimeout(function () {
    eventManager.emit('sendNext');
  }, 5);
});

module.exports = Replace;
