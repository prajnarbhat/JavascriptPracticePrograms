// array.split takes input as string
// It returns an array
// array.split divide the string intosubstrings and put these substring into an array by putting a particuar seperator

const message = "hi hello everyone";
const splitMessage = message.split(' ');
// so take space as a seperator and split the string into substring by taking the spcae as a sepertaor
console.log(splitMessage);
// creates an array from the substrings
// [ 'hi', 'hello', 'everyone' ]

// Use join method
// from the array it returns an string
const joinmessage = splitMessage.join("-");
console.log("Joing array message:",joinmessage);