// sort by length
let words = ["banana", "apple", "cherry", "blueberry", "grape"];

const sortByLength = words.sort(function(a,b){
    return a.length - b.length;
})
console.log(sortByLength);
