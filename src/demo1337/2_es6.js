const charactersInLOTR = [
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

const indexOfGandalf = charactersInLOTR.findIndex((person) => person.name === 'Gandalf');

console.log(`Expected index: 1. Index: ${indexOfGandalf}.`);



