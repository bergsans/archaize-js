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
var indexOfPerson = function (name) charactersInLOTR.findIndex(function (person) {
    return person.name == name;
});
var indexGandalf = indexOfPerson('Gandalf');
console.log('Index of Gandalf expected to be 1. Result: ' + indexGandalf + '.');