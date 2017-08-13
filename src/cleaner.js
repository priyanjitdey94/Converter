class Cleaner {
  constructor () {
    this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
  }
  belongsToPunctuation (c) {
    let i;
    for (i = 0; i < this.punctuation.length; i++) {
      if (c === this.punctuation[i]) {
        return true;
      }
    }
    return false;
  }

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
