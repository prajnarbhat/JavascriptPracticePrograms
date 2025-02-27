// array unshift is used to add the elements at the initial positions of the array

const array = [ 9, 10, 11, 12, 13];
const unShiftArray = array.unshift(6,7,8);

console.log("Adding elements at the initial positions of array:",array);
console.log(unShiftArray)

// push is adding elements at the end of the array

array.push(14,15,16);
console.log("Pushing the elements at the end of array:",array);

// array.splice is used to add or delete elements of the array at particular position

// add element at the position 2 and the element to be added is 100,200
// There is no need to delete any element
// syntax : array.splice(position where add/remove,number of element should be removed,elements to be added)

const array1 = [ 1,2,3,4 ];
//array1.splice(position where ele to added,number of element to be removed,elements to be added);
array1.splice(2,0,100,200);
console.log("Elements 100,200 are added at the position 2:",array1);
// output: [ 1, 2, 100, 200, 3, 4 ]

// remove element 2 only removing 1 element from position 1
// so the element 2 present in position 1 and the element to be removed is only 1
array1.splice(1,1);
console.log("Removing the element 2:",array1); 

