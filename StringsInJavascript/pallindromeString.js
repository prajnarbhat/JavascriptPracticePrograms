let string ="helloolleh";

function reverseStr(string){
    let reverseString = ''
    for ( let i = string.length - 1; i >= 0; i--){
        reverseString += string[i]
    }
    return reverseString
}

function pallindrome(string){
    if ( string == reverseStr(string)){
        console.log("string is pallindrome");
    }
    else{
        console.log("String is not pallindrome");
    }
}
pallindrome(string);