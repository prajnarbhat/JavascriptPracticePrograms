// array.includes method is used to find the element present in array or not
// It return a boolean value
let array1 = [ 1,2,2,2,2,3,4,5,5,5];

let uniqueArrayElements = [];

for( i of array1 ){
    console.log(i)
    if( !uniqueArrayElements.includes(i) ){
        uniqueArrayElements.push(i);
    }
}
console.log("Print unique elements in array:",uniqueArrayElements);



