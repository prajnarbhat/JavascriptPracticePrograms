let s = "GeeksforGeeks";

let res = s.replace('G','');

console.log("Replace a character in string:",res);

// Globally replacing all character of string
let res1 = s.replace(/G/g,'m');
console.log("Replacing all character in string that contains G:",res1);

let string1 = "GeeksforGeeks";
// string.split is used to split a string into array of elements with a specified seperator
let splitMethod = string1.split("G");
console.log("splitting a string:",splitMethod);
let joinSplitString = splitMethod.join('');
// array.join is used to join the array into one string
console.log("Relacing string letters using split and join:",joinSplitString);

// here split is used with string in seperating the elements of string and create an array
// join is used with array to return a string