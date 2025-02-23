const array = [1,2,3,4,5,6];


for ( let i = array.length; i > 2; i--){
    array.pop(i);
}
console.log("Remove elements from end of array:",array);