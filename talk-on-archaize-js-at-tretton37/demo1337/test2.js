Array.prototype.findIndex = function (f, thisArg) {
    var arr = this;
    var len = arr.length;
    if (typeof f != 'function') {
        throw new TypeError('Not a function');
    }
    if (thisArg) {
        arr = thisArg;
    }
    for (var i = 0; i < len; i++) {
        if (f(arr[i])) {
            return i;
        }
    }
    return -1;
};
var charactersInLOTR = [
    {
        name: 'Galadriel',
        position: 'queen/wizard'
    },
    {
        name: 'Gandalf',
        position: 'wizard'
    },
    {
        name: 'Frodo',
        position: 'bourgeoisie landowner/hero'
    }
];
const indexOfGandalf = charactersInLOTR.findIndex(function (person) {
    return person.name == 'Gandalf';
});
console.log('Expected index: 1. Index: ' + indexOfGandalf + '.');