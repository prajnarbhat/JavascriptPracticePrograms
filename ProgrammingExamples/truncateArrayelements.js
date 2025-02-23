let array1 = [1,2,3,4];

// To remove truncate array elements using length
array1.length = 2;

console.log("Remove array elements from pos 2 using .length:",array1);

let array2 = [1,2,3,4,5,6];

// array.splice method used to remove the elements from particular position
array2.splice(3);

console.log("Remove array elements from pos 2 using splice:",array2);