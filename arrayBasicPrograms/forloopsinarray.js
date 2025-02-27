const array = [1,2,3,4,5,6];

for ( let i = 0; i < array.length; i++){
    console.log("index",i,"index value",array[i]);
}

for ( x of array ){
    console.log("Using for of get the element of array:",x);
}

array.forEach(function(number,index){
    console.log(number);
})