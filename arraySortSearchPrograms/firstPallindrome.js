// Find first Pallindrome

const words = ["hello", "world", "racecar", "level", "javascript"];

// x.split = [ 'h', 'e', 'l', 'l', 'o' ]
// reverse() [ulta] [ 'o', 'l', 'l', 'e', 'h' ]
// join()  o,l,l,e,h
// join("") olleh

const findPallindrome = (word) => {
    return word == word.split('').reverse().join("");
} 

console.log("Find pallindrome:",findPallindrome);

const findFirstPallindrome = words.find(findPallindrome)

console.log("Find first pallindrome:",findFirstPallindrome);
