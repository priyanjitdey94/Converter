/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const css = require('./assets/css/style.css');
const eventManager = require('./eventManager.js');
const Decider = require('./decider.js');
const Replace = require('./replace.js');

const deciderObj = new Decider();
const replaceobj = new Replace();

/** 
 * class that breaks string into words
 */
class Identifier {
  /**
     * Create an Identifier Object.
     * @param {string} text - The input string.
     * @param {array} splitAr - Array used to store the elements after spliting text by space. 
     */
  constructor () {
    this.text = '';
    this.splitAr = [];
  }

  /**
     * Reset text and splitAr
     */
  initialize () {
    this.text = '';
    this.splitAr = [];
  }

  /**
     * Check if a string contains any digit
     * @param {string} word - string given as input 
     */
  containNumber (word) {
    let reg = /\d+/g;
    if (word.match(reg) === null) {
      return false;
    }
    return true;
  }

  /**
     * Asynchronously forwards words containing digits
     * @param {number} j - setTimeout interval 
     * @param {Object} localThis - store the this reference 
     */
  sendForProcessing (j, localThis) {
    setTimeout(function () {
      if (localThis.containNumber(localThis.splitAr[j])) {
        deciderObj.decide(localThis.splitAr[j], j);
        eventManager.addTask();
      }
      if (j === localThis.splitAr.length - 1) {
        eventManager.emit('finish', localThis.splitAr, replaceobj);
      }
    }, j);
  }

  /**
     * Splits the given string into words
     * @param {string} _str - string given as input
     */
  splitIntoArray (_str) {
    // console.log('identifier');
    if (_str === undefined) {
      return false;
    }
    this.text = _str;
    this.splitAr = this.text.split(' ');
    // console.log(this.splitAr);

    let i, j, localThis = this;
    for (i = 0; i < this.splitAr.length; i++) {
      this.sendForProcessing(i, this);
    }
  }
}

const obj = new Identifier();

window.startN2S = function () {
  let str = document.getElementById('input1').value;
  obj.initialize();
  eventManager.initialize();
  obj.splitIntoArray(str);
};

module.exports = Identifier;
