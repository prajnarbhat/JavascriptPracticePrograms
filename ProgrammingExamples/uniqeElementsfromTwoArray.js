// Find unique element from two unsorted array

const array1 = [10,20,30,40];
const array2 = [70,10,20,80,90];

// 1. iterate through every elements of array1
// 2. get the array1 element and check if the element present in array2 using indexOf
// 3. As indexOf of that particular element in array2 is present then that element is repeated
// 4. if the indexOf of that element is -1 then that array element is unique
// 5. Return result should be an array so use filter method


const unique1 = array1.filter((element) =>{
    return array2.indexOf(element) == -1
});
const unique2 = array2.filter((element) =>{
    return array1.indexOf(element) == -1;
})

console.log(unique1.concat(unique2));
