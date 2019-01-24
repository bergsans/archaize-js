const foo = () => {
  let bar = `The current date is ${Date()}. 2 + 2 = ${2 + 2}.`;
  console.log(this, bar);
}
