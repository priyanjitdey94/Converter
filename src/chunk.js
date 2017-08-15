/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

const Identifier = require('./identifier.js');
const eventManager = require('./eventManager.js');

const identifierObj = new Identifier();
/**
 * Class that takes text from html textbox and sends it to identifier in chunks for processing
 * @class Chunk
 */
class Chunk {
  /**
     * Creates an instance of Chunk.
     * @param {string} str - String to be processed.
     * @memberof Chunk
     */
  constructor (str) {
    this.sentence = '';
    this.itrX = 0;
    this.itrY = 0;
    this.chunkNum = 0;
    if (str !== undefined) {
      this.sentence = str;
    }
  }

  /**
     * Initializes the class properties to its default value
     * @memberof Chunk
     */
  initialize () {
    this.sentence = '';
    this.itrX = 0;
    this.itrY = 0;
    this.chunkNum = 0;
  }

  /**
     * Sets the sentence to str
     * @param {string} str 
     * @memberof Chunk
     */
  setSentence (str) {
    this.sentence = str;
  }

  /**
     * Finds index of next non-whitespace character.
     * @returns index of next non-whistespace character.
     * @memberof Chunk
     */
  getNextIndexY () {
    let y = this.itrY;
    y = Math.min(this.itrX + 100, this.sentence.length);
    if (y >= this.sentence.length) {
      return y;
    }
    if (this.sentence[y] !== ' ') {
      while (this.sentence[y] !== ' ') {
        y++;
        if (y === this.sentence.length) {
          return y;
        }
      }
    }
    return y;
  }

  /**
     * Sends chunk of string to identifier for processing
     * @memberof Chunk
     */
  createChunkAndProcess () {
    if (this.itrX >= this.sentence.length) {
      document.getElementById('convertB').disabled = false;
      return;
    }
    this.chunkNum++;
    this.itrY = this.getNextIndexY();

    identifierObj.splitIntoArray(this.sentence.substr(this.itrX, this.itrY - this.itrX));

    this.itrX = this.itrY + 1;
    if (this.sentence[this.itrX] === ' ') {
      while (this.sentence[this.itrX] === ' ') {
        this.itrX++;
        if (this.itrX === this.sentence.length - 1) {
          break;
        }
      }
    }
  }
}

const chunkObj = new Chunk();

eventManager.on('sendNext', function () {
  chunkObj.createChunkAndProcess();
});

window.startN2S = function () {
  let str = document.getElementById('input1').value;
  document.getElementById('input2').value = '';
  chunkObj.initialize();
  chunkObj.setSentence(str);
  document.getElementById('convertB').disabled = true;
  eventManager.emit('sendNext');
};

module.exports = Chunk;
