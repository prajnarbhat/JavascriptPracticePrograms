const words = ["apple", "banana", "cherry", "apple", "date", "banana"];

const wordSplice = words.splice(-1);
console.log(wordSplice)
const findIndexOf = words.indexOf(words.splice(-1));

console.log("index of banana:",findIndexOf);