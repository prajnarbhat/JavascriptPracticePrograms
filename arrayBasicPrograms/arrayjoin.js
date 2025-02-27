// array.join returns a new string by concatenating allthe array elements
// seperated by comma or -
// array.join()   " array elements"
// It takes input as array and returns a string by specific seperator

const array = ["hi","hello","every","one"]

// Join array ()
const joinedarray = array.join();
console.log("array joined:",joinedarray)

// output: hi,hello,every,one

console.log("joining array element with seperator:",array.join("-"));

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

console.log("Joining array:",matrix.join());