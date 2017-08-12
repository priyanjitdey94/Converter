class Identifier {
    constructor() {
        this.text = '';
        this.splitAr = [];
        this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
    }

    belongsToPunctuation(c) {
        let i;
        for (i = 0; i < this.punctuation.length; i++) {
            if (c === this.punctuation[i]) {
                return true;
            }
        }
        return false;
    }

    clean(word) {
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

    containNumber(word) {
        let reg = /\d+/g;
        if (word.match(reg) === null) {
            return false;
        }
        return true;
    }

    containLetter(word) {
        let reg = /[a-zA-Z]/g;
        if (word.match(reg) === null) {
            return false;
        }
        return true;
    }

    splitIntoArray(_str) {
        if (_str === undefined) {
            return false;
        }
        this.text = _str;
        this.splitAr = this.text.split(' ');
        console.log(this.splitAr);

        let i, j;
        for (i = 0; i < this.splitAr.length; i++) {
            if (this.containNumber(this.splitAr[i])) {
                if (this.containLetter(this.splitAr[i])) {
                    let arr = this.clean(this.splitAr[i]);
                    // send arr[0]+'' to decider;
                } else {
                    let str = this.splitAr[i] + '';
                    if (i !== 0) {
                        str = this.splitAr[i - 1] + ' ' + str;
                    }
                    if (i !== this.splitAr.length - 1) {
                        str = str + ' ' + this.splitAr[i + 1];
                    }
                    console.log(str);
                    // send str to decider;
                }
            }
        }
    }
}

const obj = new Identifier();
obj.splitIntoArray('I am a very good boy 3rd 2pm. 1.2kg. 2 am. Rs.2');