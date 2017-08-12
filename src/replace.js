const eventManager=require('./eventManager.js');

class Replace {
    constructor() {

    }

    show(str) {
        console.log(str);
    }
    doReplace(value, pos) {
        if (value === undefined || pos === undefined) {
            return 'Illegal Arguement in doReplace';
        }
        window.arr[pos] = value + '';
        return window.arr[pos];
    }
}

// export default Replace;
module.exports = Replace;