// Find unique element from two unsorted array

const array1 = [10,20,30,40];
const array2 = [70,10,20,80,90];

const indexOfArray1Elements = array1.indexOf(10);
console.log(indexOfArray1Elements)

for( let i of array1 ){
    const findArrayIndex = array1.indexOf(i);
    if ( findArrayIndex == -1 ){
        return false;
    }
    else{
        return true;
    }
}