function filterKeyVal(key, value, arr) {
  return arr.filter((person) => person[key] === value);
}

const arrOfCharacters = [
  {name: 'Gandalf', wizard: true},
  {name: 'Aragorn', wizard: false},
  {name: 'Frodo', wizard: false}
];

const list = filterKeyVal('wizard', true, arrOfCharacters);
const anotherListOfWizards = [{name:'Merlin', wizard:true},{name:'Morgana', wizard:true}];
const completeList = [...list, ...anotherListOfWizards];
console.log(completeList);


