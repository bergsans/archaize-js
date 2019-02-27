const someFunc = (...params) => {
  const onlyInts = params.filter((el) => Number.isInteger(el, 10) !== NaN);
  const multiplyIntsByFive = onlyInts.map((el) => el * 5);
	return multiplyIntsByFive;
};
console.log(someFunc(1,1,1,'A'));

