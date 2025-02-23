// Moving some elements of the array to the end of the array
// Use array.slice method to get the elements of the array of specified index and join the array elements using spread operator
// We have two array to join both the array into one use [...array1,...array2]
const array = [1,2,3,4,5,6,7];
let key = 3;
let n = array.length;

const sliceFirstKElements = array.slice(0,key)
console.log(sliceFirstKElements);

const sliceNextKElements = array.slice(key,n);
console.log(sliceNextKElements)
const newArray = [...sliceNextKElements,...sliceFirstKElements]
console.log("New array:",newArray);

// It can also done by:
const array1 = [10,20,30,40,50,60,70];
function sliceMethod(array1){
    let k = 3;
    for(let i = 0; i < k ; i++){
        array1.push(array1[i]);       
    } 
    console.log("Pushing elements at end:",array1);
    array1.splice(0,k);
    console.log("New array with elements pushed at end:",array1);
}


sliceMethod(array1);
