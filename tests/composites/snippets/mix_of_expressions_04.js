const addTenToNumsTotalsum = (...nums) => nums.reduce((a, b) => a + b, 10);

const someRandomNumsAddedPlusTen = addTenToNumsTotalsum(10, 10);
console.log(someRandomNumsAddedPlusTen); // 30

const checkIfNumEndsWithZero = someRandomNumsAddedPlusTen.toString().endsWith('0');
console.log(checkIfNumEndsWithZero); // true

const checkIfNumStartsWithThree = someRandomNumsAddedPlusTen.toString().startsWith('3');
console.log(checkIfNumStartsWithThree); // true;

const someStringNumsArray = ['0', '10', '20'];

const newArray = [...someStringNumsArray, someRandomNumsAddedPlusTen.toString()];
console.log(newArray); // ['0', '10', '20', '30']

