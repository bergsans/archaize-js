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

const indexOfPerson = (name) => charactersInLOTR.findIndex((person) => person.name === name);
const indexGandalf = indexOfPerson('Gandalf');

console.log(`Index of Gandalf expected to be 1. Result: ${indexGandalf}.`);

