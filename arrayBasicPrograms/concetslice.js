// array.concat is used to add two array
// It returns an array

const a1 = [1,2,3,4];
const a2 = [3,4,5,6,7,8]

const array = a1.concat(a2);
console.log("Concating array a1 and a2:",array);
console.log(a1,a2)

// array.slice get some elements from the array
// It returns a new array from the initial array with only some specific elements

const array1 = a2.slice(2,5);
console.log("creating a new array from index 2 to 5:",array1);