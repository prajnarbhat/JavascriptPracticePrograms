// Function inside another function

function outerFunction(a){
    console.log(a)
    function innerFun(b){
        console.log(b);
        return a + b;
    }
    return innerFun
}
const testFunction = outerFunction(10)
console.log(testFunction(20))