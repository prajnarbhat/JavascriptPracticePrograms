
function multiple(...args){
    console.log(args);
    let mult = 1;
    //[1,2,3,4,5]
    for ( x of args ){
        console.log(x);
        mult = mult * x;
    }
    console.log("Mult of all numbers:",mult);

}

console.log(multiple(1,2,3,4,5));