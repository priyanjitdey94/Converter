/**
 * @author Priyanjit Dey <priyanjitcareer@gmail.com>
 */

/**
 * Class that converts number to words
 */
class NumberToWord {
  /**
   * Constructor
   * @param {number} _num - number to be converted
   */
  constructor (_num) {
    this.num = 0;
    this.onePlace = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.tenPlace = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    this.oneInTenPlace = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    this.mileStone = ['', 'thousand', 'million', 'billion', 'hundred'];
    this.cOnePlace = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth'];
    this.cOneInTenPlace = ['tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth',
      'seventeenth', 'eighteenth', 'nineteenth'
    ];
    this.cTenPlace = ['', '', 'twentieth', 'thirteeth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth',
      'eightieth', 'ninetieth'
    ];
    this.cMileStone = ['', 'thousandth', 'millionth', 'billionth', 'hundredth'];
  }

  /**
   * Sets _num to num
   * @param {string} _num - number to be converted 
   */
  setNumber (_num) {
    this.num = parseInt(_num);
  }

  /**
   * Returns this.num
   */
  getNumber () {
    return this.num;
  }

  /**
   * Converts number to its equivalent ordinal
   * @param {string} _str - string whose ordinal is to be found
   */
  findEquivalentOrdinal (_str) {
    let i;
    for (i = 0; i < this.onePlace.length; i++) {
      if (_str === this.onePlace[i]) {
        return this.cOnePlace[i];
      }
    }
    for (i = 0; i < this.tenPlace.length; i++) {
      if (_str === this.tenPlace[i]) {
        return this.cTenPlace[i];
      }
    }
    for (i = 0; i < this.oneInTenPlace.length; i++) {
      if (_str === this.oneInTenPlace[i]) {
        return this.cOneInTenPlace[i];
      }
    }
    for (i = 0; i < this.mileStone.length; i++) {
      if (_str === this.mileStone[i]) {
        return this.cMileStone[i];
      }
    }
  }

  /**
   * Convert x, y and z to string
   * @param {char} x - hundredth place
   * @param {char} y - tenth place
   * @param {char} z - one's place
   */
  toHundredPlace (x, y, z) {
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

  /**
   * Converts number to string 
   * @param {string} _num - number to be converted
   */
  convert (_num) {
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
