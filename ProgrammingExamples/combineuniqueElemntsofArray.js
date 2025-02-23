const array1 = [1,2,3,4,5,11];
const array2 = [10,11,12,1,2,1];

const unique1 = array1.filter(element =>{
    return !array2.includes(element);
});
const unique2 = array2.filter(element => {
    return !array1.includes(element);
});

console.log("Unique elements from two array:",unique1.concat(unique2));