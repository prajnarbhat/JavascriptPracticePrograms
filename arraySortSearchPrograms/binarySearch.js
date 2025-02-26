const array = [1, 2, 6, 9, 14, 16, 19, 21];
let k = 6;
let low = 0;
let high = array.length - 1;

function binarySearch(array,k,low,high){

    while ( low <= high){
        let middle =  Math.floor((low + high)/2);
        console.log(middle)

        if ( array[middle] == k){
            return middle;
        }
        
        if ( array[middle] < k){
            low = middle + 1;
        }
        else{
            high = middle - 1;
        }
    }
    return -1;
};
console.log("Middle element:",binarySearch(array,k,low,high));