/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cleaner = function () {
  function Cleaner() {
    _classCallCheck(this, Cleaner);

    this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']', '%'];
  }

  _createClass(Cleaner, [{
    key: 'belongsToPunctuation',
    value: function belongsToPunctuation(c) {
      var i = void 0;
      for (i = 0; i < this.punctuation.length; i++) {
        if (c === this.punctuation[i]) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'clean',
    value: function clean(word) {
      var i = void 0,
          j = void 0;
      var wordBreakUp = [];
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
  }]);

  return Cleaner;
}();

module.exports = Cleaner;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventManager = __webpack_require__(3);

var Replace = function () {
  function Replace() {
    // this.modified=[];

    _classCallCheck(this, Replace);
  }

  _createClass(Replace, [{
    key: 'doReplace',
    value: function doReplace(value, pos) {
      if (value === undefined || pos === undefined) {
        return;
      }
      eventManager.modified.push(value);
      eventManager.modified.push(pos);
      eventManager.removeTask();
    }
  }]);

  return Replace;
}();

eventManager.on('finish', function (arr) {
  eventManager.complete();
  var timer = setInterval(function () {
    if (eventManager.check()) {
      eventManager.emit('done', arr);
      clearInterval(timer);
    }
  }, 20);
});

eventManager.on('done', function (arr) {
  eventManager.makeChangesAndPublish(arr);
});

module.exports = Replace;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberToWord = function () {
  function NumberToWord(_num) {
    _classCallCheck(this, NumberToWord);

    this.num = 0;
    // this.suffix='';
    // this.prefix='';
    this.onePlace = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.tenPlace = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    this.oneInTenPlace = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    this.mileStone = ['', 'thousand', 'million', 'billion', 'hundred'];
    this.cOnePlace = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth'];
    this.cOneInTenPlace = ['tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
    this.cTenPlace = ['', '', 'twentieth', 'thirteeth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth', 'eightieth', 'ninetieth'];
    this.cMileStone = ['', 'thousandth', 'millionth', 'billionth', 'hundredth'];
  }

  _createClass(NumberToWord, [{
    key: 'setNumber',
    value: function setNumber(_num) {
      this.num = parseInt(_num);
    }
    // setPrefix(_prefix){
    //     this.prefix=_prefix;
    // }
    // setSuffix(_suffix){
    //     this.suffix=_suffix;
    // }

  }, {
    key: 'getNumber',
    value: function getNumber() {
      return this.num;
    }
    // getPrefix(){
    //     return this.prefix;
    // }
    // getSuffix(){
    //     return this.suffix;
    // }

  }, {
    key: 'findEquivalentOrdinal',
    value: function findEquivalentOrdinal(_str) {
      var i = void 0;
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
  }, {
    key: 'toHundredPlace',
    value: function toHundredPlace(x, y, z) {
      var str = [],
          finalStr = '',
          i = void 0;
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
        finalStr += str[i] + ' ';
      }
      return finalStr.trim();
    }
  }, {
    key: 'convert',
    value: function convert(_num) {
      if (_num !== undefined) {
        this.setNumber(_num);
      }

      if (this.getNumber() === 0) {
        return 'zero';
      }

      var temp = this.getNumber(),
          numArray = [],
          i = void 0,
          j = void 0,
          k = void 0;

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

      var str = [];
      for (i = 2, j = 0; i < numArray.length; i += 3, j++) {
        var tempStr = this.toHundredPlace(numArray[i], numArray[i - 1], numArray[i - 2]);
        if (tempStr.trim() !== '') {
          str.push(tempStr + ' ' + this.mileStone[j]);
        }
      }

      var finalStr = '';
      for (i = str.length - 1; i >= 0; i--) {
        finalStr += str[i] + ' ';
      }
      return finalStr.trim();
    }
  }]);

  return NumberToWord;
}();

module.exports = NumberToWord;
// let obj=new NumberToWord();
// obj.setNumber(212443);
// console.log(obj.convert());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(11);

var EventManager = function (_EventEmitter) {
  _inherits(EventManager, _EventEmitter);

  function EventManager() {
    _classCallCheck(this, EventManager);

    var _this = _possibleConstructorReturn(this, (EventManager.__proto__ || Object.getPrototypeOf(EventManager)).call(this));

    _this.taskTobeProcessed = 0;
    _this.taskProcessed = 0;
    _this.processingDone = false;
    _this.modified = [];
    EventEmitter.call(_this);
    return _this;
  }

  _createClass(EventManager, [{
    key: 'initialize',
    value: function initialize() {
      this.taskProcessed = 0;
      this.taskTobeProcessed = 0;
      this.processingDone = false;
      this.modified = [];
    }
  }, {
    key: 'addTask',
    value: function addTask() {
      this.taskTobeProcessed++;
    }
  }, {
    key: 'removeTask',
    value: function removeTask() {
      this.taskProcessed++;
    }
  }, {
    key: 'complete',
    value: function complete() {
      this.processingDone = true;
    }
  }, {
    key: 'check',
    value: function check() {
      if (this.taskProcessed === this.taskTobeProcessed && this.processingDone) {
        return true;
      }
      return false;
    }
  }, {
    key: 'makeChangesAndPublish',
    value: function makeChangesAndPublish(arr) {
      var i = void 0,
          j = void 0,
          k = void 0;
      j = 1;
      var finalStr = '';
      for (i = 0; i < arr.length; i++) {
        if (j < this.modified.length && i === this.modified[j]) {
          finalStr += this.modified[j - 1] + ' ';
          j += 2;
        } else {
          finalStr += arr[i] + ' ';
        }
      }
      // console.log(finalStr.trim());
      document.getElementById('input2').value = finalStr.trim();
    }
  }]);

  return EventManager;
}(EventEmitter);

module.exports = new EventManager();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberToWord = __webpack_require__(2);
var Replace = __webpack_require__(1);
var Cleaner = __webpack_require__(0);

var numberToWordObj = new NumberToWord();
var replaceObj = new Replace();

var cTime = function (_Cleaner) {
  _inherits(cTime, _Cleaner);

  function cTime() {
    _classCallCheck(this, cTime);

    var _this = _possibleConstructorReturn(this, (cTime.__proto__ || Object.getPrototypeOf(cTime)).call(this));

    _this.text = '';
    _this.timeFormat = /^\d{1,2}[\:]\d{1,2}([\:]\d{1,2}){0,1}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){0,1}$|^\d{1,2}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){1}$/g;
    return _this;
  }

  _createClass(cTime, [{
    key: 'setTime',
    value: function setTime(_str) {
      if (_str === undefined) {
        // console.log('Time cannot be undefined');
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return this.text;
    }
  }, {
    key: 'isValidTime',
    value: function isValidTime(_str) {
      var a = this.setTime(_str);
      var b = _str.match(this.timeFormat);

      if (a === false || b === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'fetchNumber',
    value: function fetchNumber(str) {
      var j = str.length - 1;
      var div = [];
      while (isNaN(parseInt(str.substr(j, 1)) && j >= 0)) {
        j--;
      }
      div.push(str.substr(0, j + 1));
      div.push(str.substr(j + 1, str.length - j - 1));

      return div;
    }
  }, {
    key: 'actualFormatConversion',
    value: function actualFormatConversion(word) {
      var k = word.split(':');
      var h = numberToWordObj.convert(k[0]);
      var m = -1;
      if (k.length >= 2) {
        m = numberToWordObj.convert(k[1]);
      }
      var s = -1;
      if (k.length >= 3) {
        s = numberToWordObj.convert(k[2]);
      }

      var finalTime = '';
      finalTime += h === 'one' ? h + ' hour ' : h + ' hours ';
      if (m !== -1) {
        finalTime += m === 'one' ? m + ' minute' : m + ' minutes';
      }
      if (s !== -1) {
        finalTime += s === 'one' ? ' ' + s + ' second' : ' ' + s + ' seconds';
      }
      return finalTime;
    }
  }, {
    key: 'convertTime',
    value: function convertTime(word, pos) {
      // console.log('cTime');
      if (word === undefined) {
        return;
      }
      var temp = this.clean(word);
      word = temp[1];

      var i = void 0,
          j = void 0,
          k = [];
      if (word[word.length - 1] === 'm' || word[word.length - 1] === 'M') {
        k = this.fetchNumber(word);
        j = this.actualFormatConversion(k[0]);
        // console.log(k);
        replaceObj.doReplace(temp[0] + j + temp[2], pos);
      } else {
        replaceObj.doReplace(temp[0] + this.actualFormatConversion(word) + temp[2], pos);
      }
    }
  }]);

  return cTime;
}(Cleaner);

module.exports = cTime;
// let obj = new cTime();
// console.log(obj.isValidTime('20:43'));
// obj.convertTime('20:43');

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var css = __webpack_require__(6);
var eventManager = __webpack_require__(3);
var Decider = __webpack_require__(12);
var Replace = __webpack_require__(1);

var deciderObj = new Decider();
var replaceobj = new Replace();

var Identifier = function () {
  function Identifier() {
    _classCallCheck(this, Identifier);

    this.text = '';
    this.splitAr = [];
    this.punctuation = ['.', ',', '?', '!', '(', ')', '{', '}', '[', ']'];
  }

  _createClass(Identifier, [{
    key: 'initialize',
    value: function initialize() {
      this.text = '';
      this.splitAr = [];
    }
  }, {
    key: 'containNumber',
    value: function containNumber(word) {
      var reg = /\d+/g;
      if (word.match(reg) === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'sendForProcessing',
    value: function sendForProcessing(j, localThis) {
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
  }, {
    key: 'splitIntoArray',
    value: function splitIntoArray(_str) {
      // console.log('identifier');
      if (_str === undefined) {
        return false;
      }
      this.text = _str;
      this.splitAr = this.text.split(' ');
      // console.log(this.splitAr);

      var i = void 0,
          j = void 0,
          localThis = this;
      for (i = 0; i < this.splitAr.length; i++) {
        this.sendForProcessing(i, this);
      }
    }
  }, {
    key: 'makeChangesAndPublish',
    value: function makeChangesAndPublish(arr) {
      var i = void 0,
          j = void 0,
          k = void 0;
      j = 1;
      var finalStr = '';
      for (i = 0; i < this.splitAr.length; i++) {
        if (j < arr.length && i === arr[j]) {
          finalStr += arr[j - 1] + ' ';
          j += 2;
        } else {
          finalStr += this.splitAr[i] + ' ';
        }
      }
      // console.log(finalStr.trim());
    }
  }]);

  return Identifier;
}();

var obj = new Identifier();
// obj.splitIntoArray('I am a very 55 good 28/2/22) 9474851429 2/3 100th 2.55 1.22kgs. boy 12:11am.');

window.startN2S = function () {
  var str = document.getElementById('input1').value;
  obj.initialize();
  eventManager.initialize();
  obj.splitIntoArray(str);
};

module.exports = Identifier;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "html,body {\n\theight: 100%;\n\tmargin: 0;\n\tbackground-color: #1f2021;\n\tfont-family: 'Roboto';\n}\n\n#container {\n\twidth: 90vw;\n\theight: 90vh;\n\ttop: 5vh;\n\tleft:5vw;\n\tposition: relative;\n\tborder-radius: 2vw;\n\tbackground-color: #6195e8;\n\tbox-shadow: 0 0 3vw #6195e8;\n\toverflow: auto;\n}\n\n.textBox {\n\twidth: 40vw;\n\theight: 75vh;\n\t/*position: absolute;*/\n\tfloat: left;\n\tmargin-left: 1.8vw;\n\tmargin-top: 5vh;\n\tborder-width: 1vw;\n\tborder-radius: 1vw;\n\tborder-color: #595c60;\n\tfont-size: 1.5vw;\n\tfont-family: \"Roboto\";\n\toverflow: auto;\n}\n\n#input2{\n\tmargin-right: 1vw;\n}\n\nbutton:focus {\n\toutline: none;\n}\nbutton::-moz-focus-inner {\n\tborder:0;\n}\n.convert {\n\twidth: 8vw;\n\theight: 8vw;\n\tposition: absolute;\n\tbackground-color: red;\n\ttop: 36vh;\n\tleft:40.95vw;\n\tborder-radius: 8vw;\n\tborder:1vw solid #595c60;\n\tfont-size: 1vw;\n\tfont-weight:bold;\n\tcolor: white;\n\tfont-family: 'Roboto';\n\tbox-shadow: 0 0 1vw #595c60;\n}\n\n.convert:active {\n\ttop:37vh;\n}\n\n#radioButtons1{\n\tfloat: left;\n\tmargin-left: 35vw;\n\tfont-size: 1vw;\n\tmargin-top: 1.5vw;\n}\n\n#radioButtons2{\n\tfloat: left;\n\tmargin-left: 2vw;\n\tfont-size: 1vw;\n\tmargin-top: 1.5vw;\n}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cardinal = __webpack_require__(13);
var SpecialMiddle = __webpack_require__(14);
var SuffixPrefix = __webpack_require__(20);
var Replace = __webpack_require__(1);
var Cleaner = __webpack_require__(0);

var cardinalObj = new Cardinal();
var specialMiddleObj = new SpecialMiddle();
var suffixPrefixObj = new SuffixPrefix();
var replaceObj = new Replace();

var Decider = function (_Cleaner) {
  _inherits(Decider, _Cleaner);

  function Decider() {
    _classCallCheck(this, Decider);

    var _this = _possibleConstructorReturn(this, (Decider.__proto__ || Object.getPrototypeOf(Decider)).call(this));

    _this.text = '';
    return _this;
  }

  _createClass(Decider, [{
    key: 'decide',
    value: function decide(word, pos) {
      // console.log('Decider');
      if (word === undefined) {
        return false;
      }
      this.text = word;

      var temp = this.clean(this.text);
      // let arr=this.fetchNumber(temp[0]);

      // console.log(temp[1]);
      if (specialMiddleObj.isValidSpecialMiddle(temp[1])) {
        specialMiddleObj.chooseBranch(word, pos);
      } else if (cardinalObj.isValidCardinal(temp[1])) {
        cardinalObj.convertCardinal(word, pos);
      } else if (suffixPrefixObj.isValidSuffixPrefix(temp[1])) {
        suffixPrefixObj.chooseBranch(word, pos);
      } else {
        replaceObj.doReplace(word, pos);
      }
    }
  }]);

  return Decider;
}(Cleaner);

module.exports = Decider;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberToWord = __webpack_require__(2);
var Replace = __webpack_require__(1);
var Cleaner = __webpack_require__(0);

var numberToWordObj = new NumberToWord();
var replaceObj = new Replace();

var Cardinal = function (_Cleaner) {
  _inherits(Cardinal, _Cleaner);

  function Cardinal() {
    _classCallCheck(this, Cardinal);

    var _this = _possibleConstructorReturn(this, (Cardinal.__proto__ || Object.getPrototypeOf(Cardinal)).call(this));

    _this.text = '';
    return _this;
  }

  _createClass(Cardinal, [{
    key: 'setCardinal',
    value: function setCardinal(_str) {
      if (_str === undefined) {
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'getCardinal',
    value: function getCardinal() {
      return this.text;
    }
  }, {
    key: 'isValidCardinal',
    value: function isValidCardinal(_str) {
      var a = this.setCardinal(_str);

      var i = void 0;
      for (i = 0; i < _str.length; i++) {
        if (isNaN(parseInt(_str.substr(i, 1)))) {
          return false;
        }
      }
      return true && a;
    }
  }, {
    key: 'convertCardinal',
    value: function convertCardinal(_str, pos) {
      // console.log('cardinal');
      if (_str === undefined) {
        return;
      }
      var temp = this.clean(_str);
      _str = temp[1];
      var cardinal = numberToWordObj.convert(_str);
      replaceObj.doReplace(cardinal, pos);
    }
  }]);

  return Cardinal;
}(Cleaner);

module.exports = Cardinal;
// let obj = new Cardinal();
// console.log(obj.isValidCardinal('232'));
// obj.convertCardinal('2424');

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cDate = __webpack_require__(15);
var cTime = __webpack_require__(4);
var DecimalOrFraction = __webpack_require__(16);
var Phone = __webpack_require__(19);
var Cleaner = __webpack_require__(0);

var cDateObj = new cDate();
var cTimeObj = new cTime();
var decimalOrFractionObj = new DecimalOrFraction();
var phoneObj = new Phone();

var SpecialMiddle = function (_Cleaner) {
  _inherits(SpecialMiddle, _Cleaner);

  function SpecialMiddle() {
    _classCallCheck(this, SpecialMiddle);

    var _this = _possibleConstructorReturn(this, (SpecialMiddle.__proto__ || Object.getPrototypeOf(SpecialMiddle)).call(this));

    _this.text = '';
    _this.format = /^\d{1,2}[\/|\.|\-]\d{1,2}[\/|\.|\-]\d{2,4}$|^\d+(\.)\d+$|^\d+(\/)\d+$|^\d{1,2}[\:]\d{1,2}([\:]\d{1,2}){0,1}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){0,1}$|^\d{10}$|^\+\d{1,2}\-\d{10}$|^\d{1,2}(am|pm|a\.m|p\.m|AM|PM|A\.M|P\.M){1}$/g;
    return _this;
  }

  _createClass(SpecialMiddle, [{
    key: 'getText',
    value: function getText() {
      return this.text;
    }
  }, {
    key: 'setText',
    value: function setText(_str) {
      if (_str === undefined) {
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'isValidSpecialMiddle',
    value: function isValidSpecialMiddle(_str) {
      var a = this.setText(_str);
      var b = _str.match(this.format);
      if (a === false || b === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'chooseBranch',
    value: function chooseBranch(word, pos) {
      // console.log('specialMiddle');
      if (word === undefined) {
        return false;
      }

      var temp = this.clean(word);
      temp[1] = temp[1].trim();
      // console.log(temp[1]);
      if (decimalOrFractionObj.isValidDecimalOrFraction(temp[1])) {
        if (decimalOrFractionObj.isDecimal(temp[1])) {
          decimalOrFractionObj.convertToDecimal(word, pos);
        } else if (decimalOrFractionObj.isFraction(temp[1])) {
          decimalOrFractionObj.convertToFraction(word, pos);
        }
      } else if (cTimeObj.isValidTime(temp[1])) {
        cTimeObj.convertTime(word, pos);
      } else if (cDateObj.isValidDate(temp[1])) {
        cDateObj.convertDate(word, pos);
      } else if (phoneObj.isValidPhone(temp[1])) {
        phoneObj.convertPhone(word, pos);
      }
    }
  }]);

  return SpecialMiddle;
}(Cleaner);

module.exports = SpecialMiddle;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberToWord = __webpack_require__(2);
var Replace = __webpack_require__(1);
var Cleaner = __webpack_require__(0);

var numberToWordObj = new NumberToWord();
var replaceObj = new Replace();

var cDate = function (_Cleaner) {
  _inherits(cDate, _Cleaner);

  function cDate() {
    _classCallCheck(this, cDate);

    var _this = _possibleConstructorReturn(this, (cDate.__proto__ || Object.getPrototypeOf(cDate)).call(this));

    _this.text = '';
    _this.dd = '';
    _this.mm = '';
    _this.yy = '';
    _this.dateFormat = /^\d{1,2}[\/|\.|\-]\d{1,2}[\/|\.|\-]\d{2,4}$/g;
    _this.months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return _this;
  }

  _createClass(cDate, [{
    key: 'setDate',
    value: function setDate(_str) {
      if (_str === undefined) {
        // console.log('Date cannot be undefined');
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'getDate',
    value: function getDate() {
      return this.text;
    }
  }, {
    key: 'belong',
    value: function belong(c) {
      if (c === '.' || c === '/' || c === '-') {
        return true;
      }
      return false;
    }
  }, {
    key: 'isValidDate',
    value: function isValidDate(_str) {
      var a = this.setDate(_str.trim());
      var b = _str.match(this.dateFormat);

      if (a === false || b === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'convertDate',
    value: function convertDate(_str, pos) {
      // console.log('Date');
      if (_str === undefined) {
        return;
      }
      var word = _str;
      var temp = this.clean(_str);
      _str = temp[1];
      this.setDate(_str);
      // console.log(_str);
      var breakPoints = [];
      var i = void 0,
          k = void 0;
      for (i = 0; i < this.text.length; i++) {
        if (this.belong(this.text.charAt(i))) {
          breakPoints.push(i);
        }
      }
      var checkDD = this.text.substr(0, breakPoints[0]);
      var checkMM = this.text.substr(breakPoints[0] + 1, breakPoints[1] - breakPoints[0] - 1);
      var checkYY = this.text.substr(breakPoints[1] + 1, this.text.length - 1 - breakPoints[1]);

      var checkD = parseInt(checkDD);
      var checkM = parseInt(checkMM);
      var checkY = parseInt(checkYY);

      if (isNaN(checkD) || isNaN(checkM) || isNaN(checkY)) {
        replaceObj.doReplace(word, pos);
        return;
      } else if (checkM < 1 || checkM > 12 || checkD < 1 || checkD > 31) {
        replaceObj.doReplace(word, pos);
        return;
      } else if (checkM === 4 || checkM === 6 || checkM === 9 || checkM === 11) {
        if (checkD > 30) {
          replaceObj.doReplace(word, pos);
          return;
        }
      } else if (checkM === 2 && checkY % 4 !== 0) {
        if (checkD > 28) {
          replaceObj.doReplace(word, pos);
          return;
        }
      } else if (checkM === 2 && checkY % 4 === 0) {
        if (checkD > 29) {
          replaceObj.doReplace(word, pos);
          return;
        }
      }

      if (checkYY.length === 2) {
        if (checkY <= 50) {
          checkYY = '20' + checkYY;
        } else {
          checkYY = '19' + checkYY;
        }
      } else if (checkYY.length === 3) {
        checkYY = '2' + checkYY;
      }

      var d = numberToWordObj.convert(checkDD);
      var m = numberToWordObj.convert(checkMM);
      var y = numberToWordObj.convert(checkYY);

      var daySplit = d.split(' ');
      k = daySplit.pop();
      daySplit.push(numberToWordObj.findEquivalentOrdinal(k));
      d = '';

      for (i = 0; i < daySplit.length; i++) {
        d += daySplit[i] + ' ';
      }
      m = this.months[checkM] + ' ';
      replaceObj.doReplace(temp[0] + d + m + y + [temp[2]], pos);
    }
  }]);

  return cDate;
}(Cleaner);

module.exports = cDate;
// let obj = new cDate();
// console.log(obj.isValidDate('12/12/12'));
// obj.convertDate('12/12-22');

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fraction = __webpack_require__(17);
var Decimal = __webpack_require__(18);
var Cleaner = __webpack_require__(0);

var fractionObj = new Fraction();
var decimalObj = new Decimal();

var DecimalOrFraction = function (_Cleaner) {
  _inherits(DecimalOrFraction, _Cleaner);

  function DecimalOrFraction() {
    _classCallCheck(this, DecimalOrFraction);

    var _this = _possibleConstructorReturn(this, (DecimalOrFraction.__proto__ || Object.getPrototypeOf(DecimalOrFraction)).call(this));

    _this.text = '';
    _this.format = /^\d+(\.)\d+$|^\d+(\/)\d+$/g;
    _this.decimalFormat = /^\d+(\.)\d+$/g;
    _this.fractionFormat = /^\d+(\/)\d+$/g;
    return _this;
  }

  _createClass(DecimalOrFraction, [{
    key: 'getText',
    value: function getText() {
      return this.text;
    }
  }, {
    key: 'setText',
    value: function setText(_str) {
      if (_str === undefined) {
        // console.log('Text cannot be undefined.');
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'isValidDecimalOrFraction',
    value: function isValidDecimalOrFraction(_str) {
      this.setText(_str);
      var a = this.setText(_str);
      var b = this.text.match(this.format);
      if (b === null || a === false) {
        return false;
      }
      return true;
    }
  }, {
    key: 'isDecimal',
    value: function isDecimal(_str) {
      this.setText(_str);
      var b = this.text.match(this.decimalFormat);
      if (b !== null && b.length === 1) {
        return true;
      }
      return false;
    }
  }, {
    key: 'isFraction',
    value: function isFraction(_str) {
      this.setText(_str);
      var b = this.text.match(this.fractionFormat);
      if (b !== null && b.length === 1) {
        return true;
      }
      return false;
    }
  }, {
    key: 'convertToDecimal',
    value: function convertToDecimal(word, pos) {
      // console.log('DecimalOrFraction');
      var convertedText = decimalObj.convertDecimal(word, pos);
    }
  }, {
    key: 'convertToFraction',
    value: function convertToFraction(word, pos) {
      // console.log('DecimalOrFraction');
      var convertedText = fractionObj.convertFraction(word, pos);
    }
  }]);

  return DecimalOrFraction;
}(Cleaner);

module.exports = DecimalOrFraction;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberToWord = __webpack_require__(2);
var Replace = __webpack_require__(1);
var Cleaner = __webpack_require__(0);

var numberToWord = new NumberToWord();
var replaceObj = new Replace();

var Fraction = function (_Cleaner) {
  _inherits(Fraction, _Cleaner);

  function Fraction() {
    _classCallCheck(this, Fraction);

    var _this = _possibleConstructorReturn(this, (Fraction.__proto__ || Object.getPrototypeOf(Fraction)).call(this));

    _this.fraction = '';
    _this.fractionFormat = /^\d+(\/)\d+$/g;
    return _this;
  }

  _createClass(Fraction, [{
    key: 'setFraction',
    value: function setFraction(str) {
      if (str === undefined) {
        return false;
      }
      this.fraction = str.trim();
      return true;
    }
  }, {
    key: 'getFraction',
    value: function getFraction() {
      return this.fraction;
    }
  }, {
    key: 'isFraction',
    value: function isFraction(str) {
      var a = this.setFraction(str);
      var b = str.match(this.fractionFormat);
      if (a === false || b === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'convertFraction',
    value: function convertFraction(str, pos) {
      // console.log('fraction');
      if (str === undefined) {
        return;
      }

      var temp = this.clean(str);
      str = temp[1];
      var parts = str.split('/');

      var numerator = numberToWord.convert(parts[0]);
      var denominator = numberToWord.convert(parts[1]);

      var finalStr = numerator + '/' + denominator;
      replaceObj.doReplace(temp[0] + finalStr.trim() + temp[2], pos);
    }
  }]);

  return Fraction;
}(Cleaner);

module.exports = Fraction;
// const obj=new Fraction();
// console.log(obj.isFraction(23/45));
// console.log(obj.convertFraction(23/45));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberToWord = __webpack_require__(2);
var Replace = __webpack_require__(1);
var Cleaner = __webpack_require__(0);

var numberToWord = new NumberToWord();
var replaceObj = new Replace();

var Decimal = function (_Cleaner) {
  _inherits(Decimal, _Cleaner);

  function Decimal() {
    _classCallCheck(this, Decimal);

    var _this = _possibleConstructorReturn(this, (Decimal.__proto__ || Object.getPrototypeOf(Decimal)).call(this));

    _this.decimal = '';
    _this.decimalFormat = /^\d+(\.)\d+$/g;
    return _this;
  }

  _createClass(Decimal, [{
    key: 'setDecimal',
    value: function setDecimal(str) {
      if (str === undefined) {
        // console.log('Decimal cannot be undefined');
        return false;
      }
      this.decimal = str;
      return true;
    }
  }, {
    key: 'getDecimal',
    value: function getDecimal() {
      return this.decimal;
    }
  }, {
    key: 'isDecimal',
    value: function isDecimal(str) {
      var a = this.setDecimal(str);
      var b = this.decimal.match(this.decimalFormat);
      if (a === false || b === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'convertDecimal',
    value: function convertDecimal(str, pos) {
      // console.log('decimal');
      if (str === undefined) {
        return;
      }
      var temp = this.clean(str);
      str = temp[1];

      var decimalAr = str.split('.');

      var beforePoint = numberToWord.convert(decimalAr[0]);
      var afterPoint = '';

      var i = void 0;
      for (i = 0; i < decimalAr[1].length; i++) {
        afterPoint += numberToWord.convert(decimalAr[1].charAt(i)) + ' ';
      }

      replaceObj.doReplace(temp[0] + beforePoint + '.' + afterPoint.trim() + temp[2], pos);
    }
  }]);

  return Decimal;
}(Cleaner);

module.exports = Decimal;
// const obj = new Decimal();
// console.log(obj.convertDecimal('33.44'));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberToWord = __webpack_require__(2);
var Replace = __webpack_require__(1);
var Cleaner = __webpack_require__(0);

var numberToWordObj = new NumberToWord();
var replaceObj = new Replace();

var Phone = function (_Cleaner) {
  _inherits(Phone, _Cleaner);

  function Phone() {
    _classCallCheck(this, Phone);

    var _this = _possibleConstructorReturn(this, (Phone.__proto__ || Object.getPrototypeOf(Phone)).call(this));

    _this.text = '';
    _this.phoneFormat = /^\d{10}$|^\+\d{1,2}\-\d{10}$/g;
    return _this;
  }

  _createClass(Phone, [{
    key: 'getPhone',
    value: function getPhone() {
      return this.text;
    }
  }, {
    key: 'setPhone',
    value: function setPhone(_str) {
      if (_str === undefined) {
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'isValidPhone',
    value: function isValidPhone(_str) {
      var a = this.setPhone(_str);
      var b = _str.match(this.phoneFormat);
      if (a === false || b === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'convertPhone',
    value: function convertPhone(_str, pos) {
      // console.log('phone');
      if (_str === undefined) {
        return _str;
      }
      var temp = this.clean(_str);
      _str = temp[1];

      var i = void 0,
          j = void 0,
          k = void 0,
          finalStr = '';
      // if (_str.charAt(0) === '+') {
      //     finalStr = '+';
      // }
      for (i = 0; i < _str.length; i++) {
        // console.log(_str.substr(i, 1));
        if (!isNaN(parseInt(_str.substr(i, 1)))) {
          finalStr += numberToWordObj.convert(_str.substr(i, 1)) + ' ';
        }
      }
      replaceObj.doReplace(temp[0] + finalStr.trim() + temp[2], pos);
    }
  }]);

  return Phone;
}(Cleaner);

module.exports = Phone;
// let obj = new Phone();
// console.log(obj.isValidPhone('+91-9474851429'));
// obj.convertPhone('+91-9474851429');

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrdinalToCardinal = __webpack_require__(21);
var cTime = __webpack_require__(4);
var Replace = __webpack_require__(1);
var Weight = __webpack_require__(22);
var Cleaner = __webpack_require__(0);

var ordinalToCardinalObj = new OrdinalToCardinal();
var cTimeObj = new cTime();
var replaceObj = new Replace();
var weightObj = new Weight();

var SuffixPrefix = function (_Cleaner) {
  _inherits(SuffixPrefix, _Cleaner);

  function SuffixPrefix() {
    _classCallCheck(this, SuffixPrefix);

    var _this = _possibleConstructorReturn(this, (SuffixPrefix.__proto__ || Object.getPrototypeOf(SuffixPrefix)).call(this));

    _this.text = '';
    _this.suffixPrefixFormat = /^\d+([a-zA-Z]+|%)$|^([a-zA-Z]+.|$)+\d+$|^\d+((\.){1}\d+){0,1}(Kg|kg|Kgs|kgs|g)$/g;
    return _this;
  }

  _createClass(SuffixPrefix, [{
    key: 'setText',
    value: function setText(_str) {
      if (_str === undefined) {
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'getText',
    value: function getText() {
      return this.text;
    }
  }, {
    key: 'isValidSuffixPrefix',
    value: function isValidSuffixPrefix(_str) {
      _str = this.clean(_str)[1];
      if (this.setText(_str) && _str.match(this.suffixPrefixFormat) !== null) {
        return true;
      }
      return false;
    }
  }, {
    key: 'chooseBranch',
    value: function chooseBranch(word, pos) {
      // console.log('suffixPrefix');
      if (!this.isValidSuffixPrefix(word)) {
        return false;
      }

      var temp = this.clean(word);
      // console.log(temp[1]);
      if (ordinalToCardinalObj.isValidOrdinal(temp[1])) {
        ordinalToCardinalObj.convertOrdinal(word, pos);
      } else if (weightObj.isValidWeight(temp[1])) {
        weightObj.convertWeight(word, pos);
      } else {
        replaceObj.doReplace(word, pos);
      }
    }
  }]);

  return SuffixPrefix;
}(Cleaner);

module.exports = SuffixPrefix;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Replace = __webpack_require__(1);
var NumberToWord = __webpack_require__(2);
var Cleaner = __webpack_require__(0);

var replaceObj = new Replace();
var numberToWordObj = new NumberToWord();

var OrdinalToCardinal = function (_Cleaner) {
  _inherits(OrdinalToCardinal, _Cleaner);

  function OrdinalToCardinal() {
    _classCallCheck(this, OrdinalToCardinal);

    var _this = _possibleConstructorReturn(this, (OrdinalToCardinal.__proto__ || Object.getPrototypeOf(OrdinalToCardinal)).call(this));

    _this.text = '';
    return _this;
  }

  _createClass(OrdinalToCardinal, [{
    key: 'getText',
    value: function getText() {
      return this.text;
    }
  }, {
    key: 'setText',
    value: function setText(_str) {
      if (_str === undefined) {
        return false;
      }
      this.text = _str;
      return true;
    }
  }, {
    key: 'isValidOrdinal',
    value: function isValidOrdinal(_str) {
      var a = this.setText(_str);
      var i = void 0,
          j = void 0,
          k = true;
      for (i = 0; i < _str.length - 2; i++) {
        if (isNaN(parseInt(_str.substr(i, 1)))) {
          return false;
        }
      }
      j = _str.substr(_str.length - 2, 2);
      if (j === 'rd' || j === 'th' || j === 'st' || j === 'nd') {
        return a;
      } else return false;
    }
  }, {
    key: 'convertOrdinal',
    value: function convertOrdinal(word, pos) {
      // console.log('ordinalToCardinal');
      if (word === undefined) {
        return;
      }
      var temp = this.clean(word);
      word = temp[1];

      var i = void 0,
          j = void 0,
          k = void 0,
          finalStr = '';
      var numString = word.substr(0, word.length - 2),
          suffix = word.substr(word.length - 2, 2);

      var convertedNumString = numberToWordObj.convert(numString);
      k = convertedNumString.split(' ');
      j = k.pop();
      k.push(numberToWordObj.findEquivalentOrdinal(j));

      for (i = 0; i < k.length; i++) {
        finalStr += k[i] + ' ';
      }
      finalStr = finalStr.trim();
      replaceObj.doReplace(temp[0] + finalStr + temp[2], pos);
    }
  }]);

  return OrdinalToCardinal;
}(Cleaner);

module.exports = OrdinalToCardinal;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Replace = __webpack_require__(1);
var NumberToWord = __webpack_require__(2);
var Cleaner = __webpack_require__(0);

var replaceObj = new Replace();
var numberToWordObj = new NumberToWord();

var Weight = function (_Cleaner) {
  _inherits(Weight, _Cleaner);

  function Weight() {
    _classCallCheck(this, Weight);

    var _this = _possibleConstructorReturn(this, (Weight.__proto__ || Object.getPrototypeOf(Weight)).call(this));

    _this.text = '';
    _this.format = /^\d+((\.){1}\d+){0,1}(Kg|kg|Kgs|kgs|g)$/g;
    return _this;
  }

  _createClass(Weight, [{
    key: 'setText',
    value: function setText(str) {
      if (str === undefined) {
        return false;
      }
      this.text = str;
      return true;
    }
  }, {
    key: 'getText',
    value: function getText() {
      return this.text;
    }
  }, {
    key: 'isValidWeight',
    value: function isValidWeight(str) {
      var a = this.setText(str);
      var b = str.match(this.format);

      if (a === false || b === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'fetchNumber',
    value: function fetchNumber(word) {
      var j = word.length - 1;
      while (j >= 0 && isNaN(parseInt(word.substr(j, 1)))) {
        j--;
      }
      return word.substr(0, j + 1);
    }
  }, {
    key: 'convertWeight',
    value: function convertWeight(word, pos) {
      if (word === undefined) {
        return false;
      }
      var temp = this.clean(word);
      word = temp[1];

      var num = this.fetchNumber(word);
      var numAr = num.split('.');
      var finalNum = [];
      finalNum.push(numberToWordObj.convert(numAr[0].trim()));
      if (numAr.length === 2) {
        var gram = numAr[1];
        while (gram.length < 3) {
          gram += '0';
        }
        finalNum.push(numberToWordObj.convert(gram.trim()));
        replaceObj.doReplace(temp[0] + finalNum[0] + ' kg ' + finalNum[1] + ' grams' + temp[2], pos);
      } else {
        replaceObj.doReplace(temp[0] + finalNum[0] + ' kgs' + temp[2]);
      }
    }
  }]);

  return Weight;
}(Cleaner);

module.exports = Weight;

/***/ })
/******/ ]);