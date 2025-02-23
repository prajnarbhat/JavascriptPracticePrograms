// array.splice is used to add/remove the array element at the specified array index

// array.splice(index where elements add/remove,number of elements to remove,elements to be added)
// return value is the array of removed elements
const array = [1,2,3,4,5,6];

// Array.spice to remove the elements 3 amd 4
const arraySplice = array.splice(2,2);
console.log("Remove elements from index 2 and remove 2 elements:",arraySplice);
console.log("array output after removing two elements:",array);

const addElementsToArray = array.splice(2,0,10,12);
console.log("Added elements 10 and 2 from index position 2:",array);