// array.spread is to get all the values of array
// It will not create an array but it will give a copy of array values
// By passing that array values to an array it will create a new array

const array = [1,2,3,4,5,6];

// Display the array
console.log(array);
// [1,2,3,4,5,6]

// Display the values of the array
console.log(...array)
// 1,2,3,4,5,6 =>values of the array

// To get the copy of array values
const copyarray = [...array];
console.log("Get the copy of array:",copyarray);

// concating two array values
const num1 = [2,3,4];
const num2 = [4,5,6];
const num = [ ...num1, ...num2];
console.log("Concating array values and creating new array:",num);