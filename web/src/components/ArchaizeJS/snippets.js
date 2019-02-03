export const snippets=[`const uCLetters = ['A','B','C','D','E'];
 const lCLetters = upperCaseLetters.map((letter) => letter.toLowerCase());
 const letterInArr = arr.find((el) => el === letter);`,

 `const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7, 8, 9];`,`const wiz = {
  name: 'Gandalf',
  alias: 'Mithrandir',
  age: 3000
};

const str = \`The wise wizard \${wiz.name}, \${wiz.age}, years old and is also called \${wiz.alias}.\`;

console.log(str);

console.log(\`Text written by by C-M, \${Date()}.\`);`,`const foo = () => {
  let bar = \`The current date is \${Date()}. 2 + 2 = \${2 + 2}.\`;
  console.log(this, bar);
}`,`function printGreetingPhrase (greeting = 'Hello there, ', name) {
  console.log(\`Greet message: \${greeting} \${name}!\`);
}`,`
let a = 1;
let b = 2;
let c = { a, b };`,`function test() {
  const arr = ["a", "b", "c", "d", "e"];
  const i = arr.includes("a")
}`,`function test() {
  const arr = [1, 2, 3, 4, 5];
  const ifNumFiveInArr = arr.find((el) => el === 5);
}`,`function test() {
  let whatever = "test".includes("s");
  if("test2".includes("2")) {
    console.log("yay!");
  }
}`,`function test() {
  let whatever = "test".repeat(10);
}`];
