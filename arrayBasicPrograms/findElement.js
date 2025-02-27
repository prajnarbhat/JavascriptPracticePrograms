// Finding element in that array using includes,indexOf,lastIndexOf

const array = [1,2,3,4,5,6,3,7,8,9,2,10,11];

// array.includes  check if the element present in the array
// It return a boolean value
console.log(array.includes(3));

//array.includes(element,at certain index positions)
// array.includes(element,4) from checks from 3rd index where element is present
console.log(array.includes(2,3));

// return false as element 2 is not present between [3,4,5,6]

// array.indexOf -> indexof element 3, it gives the first indexOf element
console.log(array.indexOf(3));

// array.lastIndexOf to find the last occurence of the element
console.log(array.lastIndexOf(3));

