/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

/**
 * Class that removes punctuation from the beginning and end of the word
 */
class Cleaner {
  /**
   * @param {array} punctuation - array of all the punctuations that are to be ignored.
   */
  constructor () {
    this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
  }

  /**
   * Tests if a character is a punctuation
   * @param {char} c - character to be tested 
   */
  belongsToPunctuation (c) {
    let i;
    for (i = 0; i < this.punctuation.length; i++) {
      if (c === this.punctuation[i]) {
        return true;
      }
    }
    return false;
  }

  /**
   * Removes all preceding and trailing punctuations
   * @param {string} word - string which is to be cleaned
   */
  clean (word) {
    let i, j;
    let wordBreakUp = [];
    i = 0;
    while (this.belongsToPunctuation(word[i]) && i < word.length) {
      i++;
    }
    j = word.length - 1;
    while (this.belongsToPunctuation(word[j]) && j >= 0) {
      j--;
    }

    wordBreakUp.push(word.substr(0, i));
    wordBreakUp.push(word.substr(i, j - i + 1));
    wordBreakUp.push(word.substr(j + 1, word.length - j));

    return wordBreakUp;
  }
}

module.exports = Cleaner;
