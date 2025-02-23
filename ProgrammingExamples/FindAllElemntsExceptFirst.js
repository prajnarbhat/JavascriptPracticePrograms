// get the array eliminating the starting element
// create a seperate empty array with index value initislising to 0
// iterate through every element of the array and assign each elemet to the new array with respect to its index value

const array = [1,2,3,4,5];

a2 = []
let k = 0;

for (let i = 1; i<array.length; i++){
    a2[k] = array[i];
    k++;
}
console.log(a2);

const arrayAllEleExceptFirst = array.map(item =>{
    return array.indexOf(item) > 0;
})
console.log("Array eliminating first element:",arrayAllEleExceptFirst);