// Using push and shift method of array get the array list of removed elements from the array

const array1 = [1,2,3,4,5];

const removedArrayElements = [];

for (let i = 0; i < 3; i++){
    // array.push return the first element removed from array
        const removedfirstIndexElement = array1.shift();
    // array.push used to push the element to array
        removedArrayElements.push(removedfirstIndexElement)
    // this loop iterates 3 times
}
console.log(removedArrayElements);


