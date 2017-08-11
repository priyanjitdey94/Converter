class NumberToWord {
    constructor(_num) {
        this.num = 0;
        // this.suffix='';
        // this.prefix='';
        this.onePlace = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        this.tenPlace = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        this.oneInTenPlace = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        this.mileStone = ['', 'thousand', 'million', 'billion', 'hundred'];
    }

    setNumber(_num) {
        this.num = parseInt(_num);
    }
    // setPrefix(_prefix){
    //     this.prefix=_prefix;
    // }
    // setSuffix(_suffix){
    //     this.suffix=_suffix;
    // }

    getNumber() {
        return this.num;
    }
    // getPrefix(){
    //     return this.prefix;
    // }
    // getSuffix(){
    //     return this.suffix;
    // }

    toHundredPlace(x, y, z) {
        let str = [],
            finalStr = '',
            i;
        if (x > 0) {
            str.push(this.onePlace[x] + ' hundred');
        }

        if (y === 1) {
            str.push(this.oneInTenPlace[z] + '');
        } else if (y > 1) {
            str.push(this.tenPlace[y] + '');
            str.push(this.onePlace[z] + '');
        } else {
            str.push(this.onePlace[z] + '');
        }

        for (i = 0; i < str.length; i++) {
            finalStr += (str[i] + ' ');
        }
        return finalStr.trim();
    }

    convert(_num) {
        if (_num !== undefined) {
            this.setNumber(_num);
        }

        if (this.getNumber() === 0) {
            return 'zero';
        }

        let temp = this.getNumber(),
            numArray = [],
            i,
            j,
            k;

        while (temp > 0) {
            numArray.push(temp % 10);
            temp /= 10;
            temp = Math.floor(temp);
        }
        if (numArray.length % 3 !== 0) {
            numArray.push(0);
        }
        if (numArray.length % 3 !== 0) {
            numArray.push(0);
        }

        let str = [];
        for (i = 2, j = 0; i < numArray.length; i += 3, j++) {
            let tempStr = this.toHundredPlace(numArray[i], numArray[i - 1], numArray[i - 2]);
            if (tempStr.trim() !== '') {
                str.push(tempStr + ' ' + this.mileStone[j]);
            }
        }

        let finalStr = '';
        for (i = str.length - 1; i >= 0; i--) {
            finalStr += str[i] + ' ';
        }
        return finalStr.trim();
    }
}

module.exports = NumberToWord;
// let obj=new NumberToWord();
// obj.setNumber(212443);
// console.log(obj.convert());