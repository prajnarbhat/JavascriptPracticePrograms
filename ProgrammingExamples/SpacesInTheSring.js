// Calculate number of spaces in the string of words

let String = "Spaces in the string";

console.log("Length of string:",String.length);
let countSpace = 0; 

for ( let i = 0; i < String.length; i++){
    console.log(String[i]);
    if ( String[i] == ' '){
        countSpace += 1;
    }
}
console.log("Count the space in String:",countSpace);