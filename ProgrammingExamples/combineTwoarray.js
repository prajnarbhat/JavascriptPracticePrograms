const array1 = [1,2,3,4,5];
const array2 = [1,10,11,3,4,14];

// creating anew set of array elements make sure that no duplicate in that particular array
// create a new set set1 with unique elements
// then iterate through the array2 and add the elements to set again te set will take only the unique elements in array2
// iterate through ecah element of array2 and add element to set
// so creates a set of elements from two array containing unique elements 

const set1 = new Set(array1);

array2.forEach(element =>{
    set1.add(element)
})



console.log(set1);