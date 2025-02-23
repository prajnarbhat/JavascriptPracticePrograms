let word = "hi hello"

let wordCount = 0;

// split is used to split the words of string into substrings
let split = word.split(' ');
console.log("Words of the string:",split)

for (let i in split){
    console.log(i)
    wordCount += 1;
}
console.log("Worcount of words:",wordCount);