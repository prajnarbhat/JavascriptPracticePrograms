const array = [4,1,2,3,6];

let max = array[0];

for ( let i = 0; i < array.length; i++){
    if (array[i] > max){
        max = array[i];
    }
}
console.log("Maximum element in array:",max);