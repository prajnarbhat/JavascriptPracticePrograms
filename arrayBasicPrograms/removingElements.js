// Removing array elements from starting and ending positions

const array = [1,2,3,4,5,6];

// Remove 1st element
array.shift();
// Now again to remove another initial element
array.shift();

console.log("Removing elemnts at the starting position:",array);

// Removing elemets at the end
array.pop();
console.log("Removing elements at the end:",array);

// removing the specific position
// array.splice(index position,seletecount,adding count)
array.splice(1,2);
console.log("Removing 2 elements from position2:",array);