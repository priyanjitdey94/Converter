/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const EventEmitter = require('events');

/**
 * Class that handles all the events.
 */
class EventManager extends EventEmitter {
  /**
   * @param {number} taskToBeProcessed - total number of tasks submitted.
   * @param {number} taskProcessed - total number of tasks done.
   * @param {boolean} processingDone - checks if processing is done.
   * @param {array} modified - stors all the words that are modified.
   */
  constructor () {
    super();
    this.taskTobeProcessed = 0;
    this.taskProcessed = 0;
    this.processingDone = false;
    this.modified = [];
    EventEmitter.call(this);
  }

  /**
   * Initialize everything
   */
  initialize () {
    this.taskProcessed = 0;
    this.taskTobeProcessed = 0;
    this.processingDone = false;
    this.modified = [];
  }

  /**
   * Adds a new task to be done
   */
  addTask () {
    this.taskTobeProcessed++;
  }

  /**
   * Remembers how many tasks are done
   */
  removeTask () {
    this.taskProcessed++;
  }

  /**
   * Check if processing of all task is complete
   */
  complete () {
    this.processingDone = true;
  }

  /**
   * check if the complete input string is processed and all the task are done
   */
  check () {
    if (this.taskProcessed === this.taskTobeProcessed && this.processingDone) {
      return true;
    }
    return false;
  }

  /**
   * Writes the changes
   * @param {array} arr - input string 
   */
  makeChangesAndPublish (arr) {
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
    // console.log(finalStr.trim());
    document.getElementById('input2').value += finalStr.trim();
  }
}

module.exports = new EventManager();
