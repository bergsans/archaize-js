// test that fails:
//

const theGreatGruffalonTest = (arrayOfNames)  => (arrayOfNames.includes('Gruffalon')? true : false);

const array = ['Gruffalon', 'Little G.', 'Virginia Woolf'];

const isGruffalonIncluded = theGreatGruffalonTest(array);

console.log(isGruffalonIncluded);




