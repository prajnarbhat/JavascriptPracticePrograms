// To get all combination of letters of the string
// Create an empty array
// iterate through i=0 to n
// iterate j = i+1 to n
// i=0 j=1 slice(0,1)=D slice(0,2)=Do slice(0,3)=Dog
// i=1 j=2 slice(1,2)=o slice(1,3)=og 
let string = "Dog"
let arrayString = []

for ( let i = 0; i < string.length; i++){
    for( let j = i+1; j <= string.length; j++){
        arrayString.push(string.slice(i,j))
    }
}
console.log("Combination of string letters:",arrayString);