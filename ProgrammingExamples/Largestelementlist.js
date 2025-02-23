const array = [1,2,7,8,9];
let largestarr =[]

// find the 3 largest element
function findLargest(){
    largestarr[0] = 0;
    largestarr[1] = 0;
    largestarr[2] = 0;
    for (let i = 0; i < array.length; i++){
        if ( array[i] > largestarr[0] ){
            largestarr[0] = array[i];
        }
    }
    for (let i = 0; i< array.length; i++){
        if( array[i] > largestarr[1] && array[i] < largestarr [0]){
            largestarr[1] = array[i];
        }
    }
    for (let i = 0; i< array.length; i++){
        if( array[i] > largestarr[2] && array[i] < largestarr [1]){
            largestarr[2] = array[i];
        }
    }

}
findLargest();
console.log(largestarr);