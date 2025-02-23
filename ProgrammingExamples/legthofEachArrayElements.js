// Array of elements , find the length of each array elements

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const lengthOfArrayElements = array1.map((item) => {
//     return item.length;
// })

// console.log("Length of array elements:",lengthOfArrayElements);

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3);